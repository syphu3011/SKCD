

import * as React from 'react';
import IBaiViet from "@/components/interfaces/IBaiViet";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";
import ClientSwiper from '@/components/Swiper/ClientSwiper';

const CacBaiVietKhac = (baiViets: IBaiViet[]) => {
  const slides = baiViets.map((baiViet) => (
      <>
        <Image
          className="object-contain"
          src={BASE_URL + baiViet.anh_dai_dien.url}
          alt={baiViet.anh_dai_dien.alternativeText ?? ""}
          width={baiViet.anh_dai_dien.width}
          height={baiViet.anh_dai_dien.height}
        ></Image>
      <strong className='lg:text-base text-sm line-clamp-5 overflow-hidden mt-2'>{baiViet.ten_bai_viet}</strong>
      </>
    ))
  return (
    <div className="flex flex-row my-10 max-w-full">
      <ClientSwiper slides={slides}
        className='mx-[96px]'/>
    </div>
  );
};
export default CacBaiVietKhac;
