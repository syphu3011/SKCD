export default interface IAnh {
  id: number,
  url: string;
  name?: string;
  alternativeText: string;
  alt?: string;
  width?: number;
  height?: number;
  size?: number;
  formats?: IAnhFormat
}
interface IAnhFormat {
  thumbnail: IAnhFormatDetail;
  small?: IAnhFormatDetail;
  medium?: IAnhFormatDetail;
  large?: IAnhFormatDetail;
}
interface IAnhFormatDetail {
  url: string;
  width: number;
  height: number;
}
