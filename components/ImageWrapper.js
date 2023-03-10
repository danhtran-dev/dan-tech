import NextImage from "next/image";

// eslint-disable-next-line jsx-a11y/alt-text
const ImageWrapper = ({ ...rest }) => (
  <NextImage
    {...rest}
    placeholder="blur"
    loading="lazy"
    blurDataURL="/static/images/SVG-placeholder.png"
  />
);

export default ImageWrapper;
