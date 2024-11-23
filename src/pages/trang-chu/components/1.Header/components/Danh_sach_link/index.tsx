"use client";
import React from "react";
import Link from "next/link";
import IDanh_sach_link from "./interfaces/IDanh_sach_link";
import { InstantSearch, SearchBox, InfiniteHits } from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { BASE_URL, MEILI_API_KEY, MEILI_HOST } from "@/utils/Const";
import Image from "next/image";
import IBaiViet from "@/components/interfaces/IBaiViet";

const Danh_sach_link: React.FC<IDanh_sach_link> = ({ danh_sach_link }) => {
  const { searchClient } = instantMeiliSearch(
    MEILI_HOST,
    MEILI_API_KEY,
    {
      placeholderSearch: false,
    }
  );
  const Hit = ({ hit }: {hit: IBaiViet}) => (
  <article key={hit.id}>
      <Image src={BASE_URL + (hit.anh_dai_dien.formats.small.url ?? hit.anh_dai_dien.formats.thumbnail.url)} alt={hit['ten_bai_viet']} />
      <h1>{hit['ten_bai_viet']}</h1>
    <p>{hit['noi_dung_bai_viet']['mo_ta']}</p>
  </article>
);
  try {
    return (
      <>
        <ul>
          {danh_sach_link.map((e) => (
            <li className="inline mx-3" key={e.ten}>{<a href={e.link}>{e.ten}</a>}</li>
          ))}
        </ul>
        <InstantSearch
          indexName="skcd-bai-viet"
          searchClient={searchClient}
        >
          <SearchBox />
          <InfiniteHits hitComponent={Hit}/>
        </InstantSearch>
      </>
    );
  } catch (error) {
    console.error(error);
    return <Link href="/">Lỗi</Link>;
  }
};
export default Danh_sach_link;
