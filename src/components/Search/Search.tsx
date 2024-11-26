"use client";
import React, { useEffect, useRef, useState } from "react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import Image from "next/image";
import he from "he";
import { MEILI_HOST, MEILI_API_KEY, BASE_URL } from "@/utils/Const";
import ISearch from "../interfaces/ISearch";


const Search = () => {
  const [query, setQuery] = useState(""); // Truy vấn tìm kiếm
  const [results, setResults] = useState<ISearch[]>([]); // Kết quả tìm kiếm
  const [page, setPage] = useState(0); // Trang hiện tại
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải dữ liệu
  const [hasMore, setHasMore] = useState(true); // Kiểm tra còn dữ liệu không

  const {searchClient} = instantMeiliSearch(MEILI_HOST, MEILI_API_KEY, {
    placeholderSearch: false,
    meiliSearchParams: {
      attributesToHighlight: ["ten_bai_viet"],
      highlightPreTag: "<em>",
      highlightPostTag: "</em>",
      attributesToSearchOn: ["ten_bai_viet"],
    },
  });
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  const lockScroll = () => {
    // const scrollY = window.scrollY; // Lấy vị trí cuộn hiện tại
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${scrollY}px`; // Cố định vị trí
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  };

  const unlockScroll = () => {
    // const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, scrollY); // Đưa người dùng trở lại vị trí ban đầu
    window.onscroll = function () { };
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const Hit = ({ hit }: { hit: ISearch }) => (
    <article key={hit.id} className="flex items-start p-4 space-x-4 border-b">
      {/* Ảnh bên trái */}
      <div className="flex-shrink-0">
        <Image
          src={
            BASE_URL +
            (hit.anh_dai_dien.formats?.small?.url ??
              hit.anh_dai_dien.formats?.thumbnail.url ??
              hit.anh_dai_dien.url)
          }
          alt={hit.ten_bai_viet}
          width={hit.anh_dai_dien.formats?.small?.width ??
            hit.anh_dai_dien.formats?.thumbnail.width ??
            hit.anh_dai_dien.width}
          height={hit.anh_dai_dien.formats?.small?.height ??
            hit.anh_dai_dien.formats?.thumbnail.height ??
            hit.anh_dai_dien.height}
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>

      {/* Nội dung bên phải */}
      <div className="flex-1">
        {/* Tiêu đề với highlight */}
        <h3
          className="text-lg font-semibold text-black line-clamp-2 search-item"
          dangerouslySetInnerHTML={{
            __html: he.decode(hit._highlightResult.ten_bai_viet["value"]),
          }}
        />

        {/* Mô tả bài viết */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {hit.noi_dung_bai_viet.mo_ta}
        </p>
      </div>
    </article>
  );

  const search = async (reset = false) => {
    if (isLoading || (!reset && !hasMore)) return; // Không tải nếu đang tải hoặc hết dữ liệu
    setIsLoading(true);
    let _page = 0
    if (!reset) {
      _page = page
    }
    else {
      setPage(0)
    }
    console.log('ủa ủa ủa')
    try {
      const rs = await searchClient.search([
        {
          indexName: "skcd-bai-viet",
          params: {
            query,
            page: _page,
            hitsPerPage: 10, // Kích thước trang
          },
        },
      ]);
      if (query == '') {
        unlockScroll()
      }
      else {
        lockScroll()
      }
      const hits = rs.results[0]?.hits || [];
      setResults((prevResults) =>
        reset ? hits : [...prevResults, ...hits]
      ); // Nếu reset, ghi đè kết quả
      setHasMore(hits.length > 0); // Nếu không có kết quả, dừng tải
      setPage(_page + 1); // Tăng trang tiếp theo
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Theo dõi cuộn để tải thêm dữ liệu
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        // console.log("Scroll Top:", scrollTop);
        // console.log("Scroll Height:", scrollHeight);
        // console.log("Client Height:", clientHeight);

        // Kiểm tra nếu đã cuộn đến cuối
        if (scrollTop + clientHeight >= scrollHeight) {
          search(false);
        }
      }
    }, 300); // Chỉ gọi sau 300ms

    const current = scrollRef.current;
    current?.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện khi unmount
    return () => {
      current?.removeEventListener("scroll", handleScroll);
    };
  }, [query, page, hasMore]);
  // Tìm kiếm khi query thay đổi
  useEffect(() => {
    search(true); // Reset kết quả
  }, [query]);
  // Xử lý đóng khi bấm ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setResults([]); // Đóng kết quả tìm kiếm
        setQuery('')
        unlockScroll()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full z-10" ref={containerRef}>
      {/* Input search */}
      <input
        className="w-full h-full px-4 py-2 text-black bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}

      />

      {/* Kết quả tìm kiếm */}
      {results.length ?
        (
        <div
          className="absolute left-0 mx-[20px] mt-2 w-full max-h-[500px] overflow-y-auto bg-white shadow-lg rounded-lg text-black border border-gray-200"
          ref={scrollRef}
        >
          {
            results.map((hit) => (
              <div
                key={hit.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 border-gray-200"
              >
                <Hit hit={hit} />
              </div>
            ))
          }
        </div>
      ):(
        <div></div>
      )}


      {/* Thông báo tải thêm */}
      {isLoading && <p className="mt-2 text-gray-500">Đang tải...</p>}
      {!hasMore && !isLoading && results.length > 0 && (
        <p className="mt-2 text-gray-500">Đã tải hết kết quả.</p>
      )}
    </div>

  );
};

export default Search;
