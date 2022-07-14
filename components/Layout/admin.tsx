import React from 'react'
import { LayoutProps } from '../../models/layout'



const adminLayout = ({children}: LayoutProps) => {
  return (
    <div>Admin
        {children}
    </div>
  )
}

export default adminLayout