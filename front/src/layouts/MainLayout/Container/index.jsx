import * as React from 'react'
// styles
import {ContainerStyles} from "./styles";

const Container = ({children}) => (
  <ContainerStyles>
    {children}
  </ContainerStyles>
)

export default Container
