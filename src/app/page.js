import Image from 'next/image'
import style from "./home.module.css"

export default function Home() {
  return (
    <div className={style.container}>
    {/* text container */}
    <div className={style.textContainer}>
    <h1 className={style.title}>Creative Thought Agency</h1>
    <p className={style.description}>This is the new era of thinking, thinking big and we have boundaryless thinking. we are here to solve your problems</p>
    <div className={style.brandContainer}>
    {/* First, the value of sizes is used by the browser to determine which size of the image to download, */}
    <Image src="/mini.png" alt='brand.png' fill className='brandImage'  
    sizes="(max-width: 1200px) 500px" />
    </div>
    <div className={style.buttonContainer}>
      <button className={style.btn}>Learn More</button>
      <button className={style.btn}>Contact</button>
    </div>
    </div>

    {/* Image container */}
    <div className={style.imageContainer}>
    <Image src="/web.png" alt='image.png' width={500} height={500}/>
    </div>
    </div>
  )
}
