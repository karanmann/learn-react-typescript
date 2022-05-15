import React from 'react'
import {ContainerProps} from './Container.types'


const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>Text Goes Here</div>
  )
}

export default Container