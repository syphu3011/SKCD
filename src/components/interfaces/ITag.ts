import IBaiViet from "./IBaiViet";
import ILoaiBaiViet from "./ILoaiBaiViet";

export interface ITag {
  id: number,
  tag: string,
  slug: string,
  skcd_bai_viets?: IBaiViet[],
  skcd_loai_bai_viets?: ILoaiBaiViet[]
}
