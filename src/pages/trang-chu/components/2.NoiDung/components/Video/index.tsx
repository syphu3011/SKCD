import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import IVideo from "./interfaces/IVideo";
import { EmblaOptionsType } from "embla-carousel";

const Video = (videos: [IVideo]) => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  return (
    <div className="lg:mx-[96px] mx-[20px]">
        <p className="lg:ml-8 lg:text-4xl text-xl mb-7 font-bold">Video</p>
        <EmblaCarousel slides={videos} options={OPTIONS} />
    </div>
  )
}
export default Video
