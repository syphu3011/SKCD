import React from "react";
import ILogo from "./interfaces/ILogo";
import { BASE_URL } from "@/utils/Const";
import Image from "next/image";
const Logo: React.FC<ILogo> = ({
  url,
  alternativeText = "logo",
  width,
  height,
}) => {
  try {
    const img = (
      <Image
        alt={alternativeText ?? ""}
        src={BASE_URL + url}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL='/image_placeholder.svg'
      ></Image>
    );
    return img;
  } catch (error) {
    console.error(error)
    return <Image
        alt={"Lỗi ảnh"}
        src={"/image_placeholder.svg"}
        width={width}
        height={height}
      ></Image>
  }
};
export default Logo;
