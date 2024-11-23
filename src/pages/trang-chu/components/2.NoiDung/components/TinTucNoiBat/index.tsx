import ITinTucNoiBat from "./interfaces/ITinTucNoiBat";
import BaiVietMoiNhatProcess from "./components/BaiVietMoiNhat";
import CacBaiVietKhacProcess from "./components/CacBaiVietKhac";

const TinTucNoiBat = (tinTucNoiBat: ITinTucNoiBat) => {
  const baiVietMoiNhat = tinTucNoiBat.skcd_bai_viets[0]
  const cacBaiVietConLai = tinTucNoiBat.skcd_bai_viets.slice(1)
  const baiVietMoiNhatProcessed = BaiVietMoiNhatProcess(baiVietMoiNhat)
  const cacBaiVietConLaiProcessed = CacBaiVietKhacProcess(cacBaiVietConLai)
  return (<div className="flex flex-col lg:mx-[96px] mx-[20px] mt-10 text-justify">
    {baiVietMoiNhatProcessed}
    {cacBaiVietConLaiProcessed}
  </div>)
}
export default TinTucNoiBat
