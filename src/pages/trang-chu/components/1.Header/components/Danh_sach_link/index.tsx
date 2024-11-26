"use client";
import React from "react";
import Link from "next/link";
import IDanh_sach_link from "./interfaces/IDanh_sach_link";
import Search from "@/components/Search/Search";


const Danh_sach_link: React.FC<IDanh_sach_link> = ({ danh_sach_link }) => {
  try {
    return (
      <>
        <ul>
          {danh_sach_link.map((e) => (
            <li className="inline mx-3" key={e.ten}>
              {<a href={e.link}>{e.ten}</a>}
            </li>
          ))}
        </ul>
        {/* <InstantSearch indexName="skcd-bai-viet" searchClient={searchClient}>
          <SearchBox />
          <InfiniteHits hitComponent={Hit} />
        </InstantSearch> */}
        {
          <div className="flex w-1/12 h-4 absolute right-20 top-4">
            <Search></Search>
          </div>
        }
      </>
    );
  } catch (error) {
    console.error(error);
    return <Link href="/">Lỗi</Link>;
  }
};
export default Danh_sach_link;
