import IDoiTac from "@/components/interfaces/IDoiTac"
import { BASE_URL } from "@/utils/Const"
import Image from "next/image"

const CacDoiTac = (cacDoiTac: IDoiTac[]) => {
  return (
    <div className="flex flex-row justify-center justify-items-center h-[100px]">
      {cacDoiTac.map(doiTac => (
        <a href={doiTac.link} target="_blank">
        <Image
          className="h-full object-contain"
          src={
            BASE_URL +
            (doiTac.anh_dai_dien.formats?.thumbnail.url ??
            doiTac.anh_dai_dien.url)
          }
          alt={
            doiTac.anh_dai_dien.alternativeText ?? ""
          }
          width={
            doiTac.anh_dai_dien.formats?.thumbnail.width ??
            doiTac.anh_dai_dien.width
          }
          height={
            doiTac.anh_dai_dien.formats?.thumbnail.height ??
            doiTac.anh_dai_dien.height
          }>
        </Image>
        </a>
      ))}
    </div>
  )
 }
export default CacDoiTac
