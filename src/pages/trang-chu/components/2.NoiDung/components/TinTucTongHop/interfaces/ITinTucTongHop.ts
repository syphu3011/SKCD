import IAnh from "@/components/interfaces/IAnh";
import IBaiViet from "@/components/interfaces/IBaiViet";
import ILoaiBaiViet from "@/components/interfaces/ILoaiBaiViet";

export default interface ITinTucTongHop {
  skcd_bai_viets: IBaiViet[],
  skcd_loai_bai_viets: ILoaiBaiViet[],
  sang_kien_vui: IAnh[]
}
