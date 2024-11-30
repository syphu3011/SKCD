"use client";
import React from "react";
import Link from "next/link";
import IDanh_sach_link from "./interfaces/IDanh_sach_link";
import Search from "@/components/Search/Search";
import Navbar from "@/components/NavBar";


const Danh_sach_link: React.FC<IDanh_sach_link> = ({ danh_sach_link }) => {
  try {
    return (
      <>
        <ul className="md:block hidden">
          {danh_sach_link.map((e) => (
            <li className="inline mx-3" key={e.ten}>
              {<a href={e.link} target="_blank">{e.ten}</a>}
            </li>
          ))}
        </ul>
        <div className="md:hidden block absolute top-0">
          <Navbar navLinks={danh_sach_link}></Navbar>
        </div>
        {/* <InstantSearch indexName="skcd-bai-viet" searchClient={searchClient}>
          <SearchBox />
          <InfiniteHits hitComponent={Hit} />
        </InstantSearch> */}
        {
          <div className="flex w-full h-full md:absolute md:top-[0px] md:left-0 md:bottom-1">
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
