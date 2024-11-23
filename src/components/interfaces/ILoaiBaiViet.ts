import IBaiViet from "./IBaiViet";
import { ITag } from "./ITag";

export default interface ILoaiBaiViet {
  id: number,
  loai: string,
  slug: string,
  skcd_bai_viets?: IBaiViet[],
  skcd_tags?: ITag[]
}
