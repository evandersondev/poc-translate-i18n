import React, { ReactElement } from 'react'

import { WrapperContainer } from './styles'

interface IProps {
  children: ReactElement
}

const Container = (props: IProps) => {
  return <WrapperContainer>{props.children}</WrapperContainer>
}

export default Container
