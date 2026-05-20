import { ImageProps } from "./Image.types";

const Image = ({
  src,
  width,
  height,
  alt
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}  // HTML attributes for CLS prevention
      height={height}
      style={{
        // Preserve proportions:
        // - If only width is provided, height auto-scales
        // - If only height is provided, width auto-scales  
        // - If both provided, use both
        // - If none provided, use default full width
        width: width ? `${width}px` : height ? 'auto' : '100%',
        height: height ? `${height}px` : width ? 'auto' : 'auto',
      }}
      className="transition-opacity duration-500 border-width-secondary border-color-primary rounded-rounding-primary bg-bg-color-primary"
    // Removed object-cover to prevent cropping
    />
  )
}

export default Image;
