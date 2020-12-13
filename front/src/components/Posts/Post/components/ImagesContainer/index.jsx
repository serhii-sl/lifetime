import * as React from 'react'
// styles
import {Wrapper} from "./styles";


const Images = ({images}) => (
  <Wrapper isTwoImages={images.length === 2} isMoreTwoImages={images.length >= 3}>
    {images.map((img, index) => (
      <img src={img} key={index}/>
    ))}
  </Wrapper>
)

export default Images
