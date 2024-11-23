import BaiVietTheoLoai from "./components/BaiVietTheoLoai"
import CacBaiViet from "./components/CacBaiViet"
import SangKienVui from "./components/SangKienVui"
import ITinTucTongHop from "./interfaces/ITinTucTongHop"

const TinTucTongHop = (tinTucTongHop: ITinTucTongHop) => {
  const CacBaiVietProcessed = CacBaiViet(tinTucTongHop.skcd_bai_viets)
  const BaiVietTheoLoaiProcessed = BaiVietTheoLoai(tinTucTongHop.skcd_loai_bai_viets)
  const SangKienVuiProcessed = SangKienVui(tinTucTongHop.sang_kien_vui)
  return (
    <div className="lg:mx-[96px] mx-[20px]">
      <p className="lg:ml-8 lg:text-4xl text-xl font-bold lg:mb-8 mb-4 uppercase">
        Tin tức
      </p>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-8/12 lg:mr-10">
          {CacBaiVietProcessed}
        </div>
        <div className="lg:w-4/12">
          {BaiVietTheoLoaiProcessed}
          {SangKienVuiProcessed}
        </div>
      </div>
    </div>
  )
}
export default TinTucTongHop
