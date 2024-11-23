import IAnh from "./IAnh";

export default interface IDoiTac {
  id: number,
  ten: string,
  link: string,
  slug: string,
  anh_dai_dien: IAnh
}
