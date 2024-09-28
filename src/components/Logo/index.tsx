import Image, { ImageProps } from "next/image"

interface LogoProps extends ImageProps {
  size?: "large" | "medium" | "small"
}

const Logo = ({ src, alt, size = "large", ...rest }: LogoProps) => {
  const dimensions =
    size === "large"
      ? { width: 190, height: 195 }
      : size === "medium"
      ? { width: 100, height: 103 }
      : { width: 65, height: 67 }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      priority
      className="py-4"
      {...rest}
    />
  )
}

export default Logo
