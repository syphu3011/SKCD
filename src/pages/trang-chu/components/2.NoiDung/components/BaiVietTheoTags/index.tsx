import { ITag } from "@/components/interfaces/ITag";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";

const BaiVietTheoTags = (tags: ITag[]) => {
  return (
    <div className="flex lg:flex-row flex-col gap-11 lg:mx-[96px] mx-[20px] text-justify">
      {tags.map((tag) => {
        return (
          <div className="flex flex-col gap-8 flex-1 basis-1/3" key={tag.id}>
            <p className="font-bold underline underline-offset-4">{tag.tag}</p>
            {tag.skcd_bai_viets?.map((baiViet) => {
              return (
                <div className="flex flex-row w-full" key={baiViet.id}>
                  <Image
                    className="w-1/4 xl:h-[100px] lg:h-[80px] max-h-44 object-cover"
                    src={
                      BASE_URL + (
                      baiViet.anh_dai_dien.formats?.small?.url ??
                      baiViet.anh_dai_dien.formats?.thumbnail.url ??
                      baiViet.anh_dai_dien.url)
                    }
                    alt={
                      baiViet.anh_dai_dien.alternativeText ?? ""
                    }
                    width={
                      baiViet.anh_dai_dien.formats?.small?.width ??
                      baiViet.anh_dai_dien.formats?.thumbnail.width ??
                      baiViet.anh_dai_dien.width
                    }
                    height={
                      baiViet.anh_dai_dien.formats?.small?.height ??
                      baiViet.anh_dai_dien.formats?.thumbnail.height ??
                      baiViet.anh_dai_dien.height
                    }
                    loading="lazy"

                  ></Image>
                  <div className="ml-4 w-3/4">
                    <p className="font-bold line-clamp-2 overflow-hidden text-sm">{baiViet.ten_bai_viet}</p>
                    <p className="text-xs font-medium text-gray-600 mt-2">{baiViet.ngay_dang}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default BaiVietTheoTags;
