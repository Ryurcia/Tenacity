import Image from "next/image";
import hero_bg from '@Public/assets/hero_img.jpg';
import hero from './hero.module.css';

const Hero = () => {
  return (
    <div className={hero.hero_container}>
      <div className={hero.heroImg_container}>
        <Image src={hero_bg} alt="Hero" fill className={hero.bg_img} quality={90} placeholder="blur" priority={true}/>
        {/*Content*/}
      </div>
      <div className={hero.content_container}>
        <div className={hero.content_cta_container}>
          <h1 className={hero.content_cta_heading}>Make your dream home <br/> <b>a reality</b>.</h1>
          <a href= "tel:6468989012" className={hero.content_cta_btn}>Call for a quote</a>
        </div>
      </div>
    </div>

  );
};

export default Hero;