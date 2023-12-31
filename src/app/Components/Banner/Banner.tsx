import Image, {StaticImageData} from "next/image";
import banner from "./banner.module.css";
import banner1 from "@Public/assets/banner1.jpg";

export const Banner = ({img, heading,content}: {img:StaticImageData,heading:string,content:string}) => {
  return (
    <div className={banner.banner_container}>
      <div className={banner.bannerImg_container}>
        <Image className={banner.bannerImg} src={banner1} alt="Banner" fill quality={80}/>
      </div>
      <div className={banner.bannerContent_container}>
        <div className={banner.bannerContent}>
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}