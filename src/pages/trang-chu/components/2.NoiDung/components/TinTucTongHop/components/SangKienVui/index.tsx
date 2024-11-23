import IAnh from "@/components/interfaces/IAnh"
import { BASE_URL } from "@/utils/Const"
import Image from "next/image"

const SangKienVui = (sangKienVui: IAnh[]) => {
  return (
    <div>
      <p className="lg:text-sm text-base font-bold underline lg:underline-offset-4 underline-offset-8 lg:mb-2 mb-8 lg:ml-8 uppercase">Sáng kiến vui</p>
      {sangKienVui.map(sangKien => (
        <div
          className="w-full mb-12"
          key={sangKien.id}>
            <Image
              className="w-full object-cover"
              src={BASE_URL + (sangKien.formats?.small?.url ?? sangKien.formats?.thumbnail.url ?? sangKien.url)}
              alt={sangKien.alternativeText ?? ""}
              width={sangKien.formats?.small?.width ?? sangKien.formats?.thumbnail.width ?? sangKien.width}
              height={sangKien.formats?.small?.height ?? sangKien.formats?.thumbnail.height ?? sangKien.height}
            ></Image>
        </div>
      ))}
    </div>
  )
}
export default SangKienVui
