import React from 'react'
import { container, logo } from './siteLogo.module.css'

const SiteLogo = ({ title, d, ...props }) => {
  return (
    <div className={container}>
      <svg role="img" className={logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <title>{title}</title>
        <path d={d} />
      </svg>
    </div>
  )
}

export default SiteLogo