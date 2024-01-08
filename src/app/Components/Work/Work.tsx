import Image, {StaticImageData} from "next/image";
import work from './work.module.css'
import img1 from '@Public/assets/gallery1-min.jpg'
import img2 from '@Public/assets/gallery2-min.png'
import img3 from '@Public/assets/gallery3-min.jpg'
import img4 from '@Public/assets/gallery4-min.jpg'

interface image {
  img: StaticImageData
  desc: string
}

const Work = () => {
  const images: image[] = [
    {
      img: img1,
      desc: 'whiteBath'
    },
    {
      img:img2,
      desc:'porch'
    },
    {
      img: img3,
      desc:'bath2'
    },
    {
      img:img4,
      desc:'bath3'
    }
  ];

  return(
    <div className={work.work_container}>
      <h1>View some of our work</h1>
      <div className={work.work_img}>
        {images.map((imgObj: image) => {
          return (
            <div className={work.work_img_container} key={`img_${imgObj.desc}`}>
              <Image className={work.image} src={imgObj.img} alt="project_img" fill sizes="100vw"/>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Work;