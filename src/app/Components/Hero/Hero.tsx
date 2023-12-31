import Image from "next/image";
import hero_bg from '@Public/assets/hero_img.jpg';
import hero from './hero.module.css';

export const Hero = () => {
  return (
    <div className={hero.hero_container}>
      <div className={hero.heroImg_container}>
        <Image src={hero_bg} alt="Hero" fill className={hero.bg_img} quality={100} placeholder="blur" priority={true}/>
        {/*Content*/}
      </div>
      <div className={hero.content_container}>
        <div className={hero.content_cta_container}>
          <h1 className={hero.content_cta_heading}>Make your dream home <br/> <b>a reality</b>.</h1>
          <button className={hero.content_cta_btn}>Get a quote</button>
        </div>
      </div>
    </div>

  );
};

export default Hero;