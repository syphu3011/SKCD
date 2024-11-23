import IAnh from "@/components/interfaces/IAnh";
import ILikeBaiViet from "@/components/interfaces/ILikeBaiViet";
import INoiDungBaiViet from "@/components/interfaces/INoiDungBaiViet";

export default interface IBaiViet {
  id: number,
  ten_bai_viet: string,
  slug: string,
  ngay_dang: string,
  anh_dai_dien: IAnh
  noi_dung_bai_viet: INoiDungBaiViet,
  like_bai_viet: ILikeBaiViet
}
