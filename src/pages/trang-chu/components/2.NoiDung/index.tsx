import BaiVietTheoTags from "./components/BaiVietTheoTags"
import CacDoiTac from "./components/CacDoiTac"
import TinTucNoiBat from "./components/TinTucNoiBat"
import TinTucTongHop from "./components/TinTucTongHop"
import VideoProcess from "./components/Video"

const NoiDung = (noiDung: []) => {
  const noiDungPreProcess = []
  for (const item of noiDung) {
    const componentName = item['__component']
    if (componentName == "skcd.tin-tuc-noi-bat") {
      noiDungPreProcess.push(TinTucNoiBat(item))
    }
    else if (componentName == 'skcd.video') {
      noiDungPreProcess.push(VideoProcess(item['skcd_videos']))
    }
    else if (componentName == 'skcd.tin-tuc-tong-hop') {
      noiDungPreProcess.push(TinTucTongHop(item))
    }
    else if (componentName == 'skcd.bai-viet-theo-tags') {
      noiDungPreProcess.push(BaiVietTheoTags(item['skcd_tags']))
    }
    else if (componentName == 'skcd.doi-tac') {
      noiDungPreProcess.push(CacDoiTac(item['skcd_doi_tacs']))
    }
  }
  return (
    <div className="text-black">
      {noiDungPreProcess.map(e => (
        <>
          {e}
          <hr className="mx-[96px] my-[30px]" />
        </>))}
    </div>
  )
}
export default NoiDung
