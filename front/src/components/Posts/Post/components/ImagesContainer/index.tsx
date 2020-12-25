import * as React from 'react';
// styles
import { Wrapper } from './styles';

interface IImagesProps {
  images: string[];
}

const Images: React.FC<IImagesProps> = ({ images }) => (
  <Wrapper isTwoImages={images.length === 2} isMoreTwoImages={images.length >= 3}>
    {images.map((img, index) => (
      <img src={img} key={index} alt={'post_image'} />
    ))}
  </Wrapper>
);

export default Images;
