import ILoaiBaiViet from "@/components/interfaces/ILoaiBaiViet";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";

const BaiVietTheoLoai = (loaiBaiViets: ILoaiBaiViet[]) => {
  return loaiBaiViets.map((loaiBaiViet) => {
    const baiViets = loaiBaiViet.skcd_bai_viets ?? []
    return (
      <div key={loaiBaiViet.id}>
        <p className="lg:text-sm text-base font-bold underline lg:underline-offset-4 underline-offset-8 lg:mb-2 mb-8 lg:ml-8 uppercase">{loaiBaiViet.loai}</p>
        {baiViets.map(baiViet => (
          <div
          key={baiViet.id}
            className="flex flex-column w-full mb-12">
            <div className="lg:w-5/12 w-1/3">
              <Image
                className="w-full object-cover lg:max-h-20 max-h-44"
                src={BASE_URL + (baiViet.anh_dai_dien.formats?.small?.url ?? baiViet.anh_dai_dien.formats?.thumbnail.url ?? baiViet.anh_dai_dien.url)}
                alt={baiViet.anh_dai_dien.alternativeText ?? ""}
                width={baiViet.anh_dai_dien.formats?.small?.width ?? baiViet.anh_dai_dien.formats?.thumbnail.width ?? baiViet.anh_dai_dien.width}
                height={baiViet.anh_dai_dien.formats?.small?.height ?? baiViet.anh_dai_dien.formats?.thumbnail.height ?? baiViet.anh_dai_dien.height}
              ></Image>
            </div>
            <div className="lg:w-7/12 w-2/3 ml-5 text-justify">
              <p className="font-bold lg:text-sm text-base">{baiViet.ten_bai_viet}</p>
            </div>
          </div>
        ))}
      </div>
    )
  });
};
export default BaiVietTheoLoai;
