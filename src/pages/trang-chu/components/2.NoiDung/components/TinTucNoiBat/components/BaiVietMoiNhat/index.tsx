import IBaiViet from "@/components/interfaces/IBaiViet";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";

const BaiVietMoiNhat = (baiViet: IBaiViet) => {
  return (
    <div key={baiViet.id} className="flex lg:flex-row flex-col-reverse lg:max-h-96 mx-5">
      <div className="lg:w-2/3 text-lg lg:mr-7">
        <strong className="lg:text-3xl line-clamp-5 overflow-hidden">{baiViet.ten_bai_viet}</strong>
        <p className="line-clamp-5 overflow-hidden lg:mt-5 mt-2 text-justify lg:text-base text-sm">{baiViet.noi_dung_bai_viet.mo_ta}</p>
      </div>
      <div>
        <Image
          className="w-full object-cover max-h-40"
          src={BASE_URL + baiViet.anh_dai_dien.url}
          alt={baiViet.anh_dai_dien.alternativeText ?? ""}
          width={baiViet.anh_dai_dien.width}
          height={baiViet.anh_dai_dien.height}
        ></Image>
      </div>
    </div>
  );
};
export default BaiVietMoiNhat;
