import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const Emptylayout = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default Emptylayout