import IBaiViet from "@/components/interfaces/IBaiViet";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";

const CacBaiViet = (baiViets: IBaiViet[]) => {
  return (
    <div>
      {baiViets.map((baiViet) => (
        <div
          key={baiViet.id}
          className="flex flex-column w-full mb-12">
          <div className="w-1/3">
            <Image
              className="w-full object-cover max-h-56"
              src={BASE_URL + (baiViet.anh_dai_dien.formats?.small?.url ?? baiViet.anh_dai_dien.formats?.thumbnail.url ?? baiViet.anh_dai_dien.url)}
              alt={baiViet.anh_dai_dien.alternativeText ?? ""}
              width={baiViet.anh_dai_dien.formats?.small?.width ?? baiViet.anh_dai_dien.formats?.thumbnail.width ?? baiViet.anh_dai_dien.width}
              height={baiViet.anh_dai_dien.formats?.small?.height ?? baiViet.anh_dai_dien.formats?.thumbnail.height ?? baiViet.anh_dai_dien.height}
            ></Image>
          </div>
          <div className="w-2/3 ml-5 text-justify">
            <p className="font-bold lg:text-2xl text-base">{baiViet.ten_bai_viet}</p>
            <p className="my-1 text-xs text-gray-600">{baiViet.ngay_dang}</p>
            <p className="min-h-28 lg:text-base text-sm">{baiViet.noi_dung_bai_viet.mo_ta}</p>
          </div>
        </div>
      ))}
    </div>
    )
  }
export default CacBaiViet
