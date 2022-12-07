import Image from 'next/image'

type Props = {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string,
  priority?: boolean,
  quality?: number
}

const CloudImage = (props: Props) => {
  const { src, width, height, alt = "", className = "" } = props
  const accountUrl = "https://res.cloudinary.com/matthew-antone/image/upload/"
  const cloudSrc = `${accountUrl}w_${width},c_fill,dpr_2.0,f_auto/${src.replace(accountUrl,'')}`

  return (
    <img src={cloudSrc} width={width} height={height} className={className} alt={alt}/>
  )
}

export default CloudImage