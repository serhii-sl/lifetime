import * as React from 'react'
// components
import { ClipLoader } from 'react-spinners'
// styles
import { LoaderWrapper } from './styles'
// constants
import { DEFAULT_LOADER_COLOR, DEFAULT_LOADER_SIZE } from './constants'

export interface ILoaderProps {
  color?: string
  size?: number
}

const Loader: React.FC<ILoaderProps> = ({ color, size }) => {
  return (
    <LoaderWrapper>
      <ClipLoader size={size} color={color} />
    </LoaderWrapper>
  )
}

Loader.defaultProps = {
  color: DEFAULT_LOADER_COLOR,
  size: DEFAULT_LOADER_SIZE,
}

export default Loader
