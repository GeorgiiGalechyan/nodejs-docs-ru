import React from 'react'
import { button, svg } from './svgButton.module.css'

const SVGButton = ({ title, d, ...props }) => {
  return (
    <button className={button}>
      <svg className={svg} role="button" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>{title}</title>
        <path d={d} />
      </svg>
    </button>
  )
}

export default SVGButton
