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
  const Hit = ({ hit }: { hit: ISearch }) => (
    <article key={hit.id} className="search-item">
      <Image
        src={
          BASE_URL +
          (hit.anh_dai_dien.formats?.small?.url ??
            hit.anh_dai_dien.formats?.thumbnail.url ??
            hit.anh_dai_dien.url)
        }
        alt={hit.ten_bai_viet}
        width={
          hit.anh_dai_dien.formats?.small?.width ??
          hit.anh_dai_dien.formats?.thumbnail.width ??
          hit.anh_dai_dien.width
        }
        height={
          hit.anh_dai_dien.formats?.small?.height ??
          hit.anh_dai_dien.formats?.thumbnail.height ??
          hit.anh_dai_dien.height
        }
      />
      <div
        dangerouslySetInnerHTML={{
          __html: he.decode(hit._highlightResult.ten_bai_viet["value"]),
        }}
      />
      <p>{hit.noi_dung_bai_viet.mo_ta}</p>
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
    console.log("ủa j kì z")
    console.log(page)
    search(true); // Reset kết quả
  }, [query]);

  return (
    <div className="relative w-full z-10 ">
      <input
        className="text-black"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="max-h-[500px] overflow-scroll fixed bg-white bg-opacity-75 text-black" ref={scrollRef}>
        {results.map((hit) => (
          <Hit key={hit.id} hit={hit} />
        ))}
      </div>
      {isLoading && <p>Đang tải...</p>}
      {!hasMore && <p>Đã tải hết kết quả.</p>}
    </div>
  );
};

export default Search;
