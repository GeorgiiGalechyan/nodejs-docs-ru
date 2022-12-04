import React from 'react'
import Navigation from './navMenu'
import SiteLogo from '../../svgs/siteLogo'
import ThemeScheme from './themeScheme'
import Search from './search'

import { header, limiter } from './header.module.css'

const PrimaryHeader = () => {
  return (
    <header className={header}>
      <div className={limiter}>
        <SiteLogo
          d="M4.4 54H.9q1.1-2.9 3.85-4.05 2.573-1.076 6.065-1.145a24.452 24.452 0 0 1 .485-.005q1.7 0 3.5.2a80.858 80.858 0 0 1 3.463.463 88.429 88.429 0 0 1 .237.037q5.1-7.7 10.45-14.95 5.35-7.25 10-12.9 4.313-5.24 7.292-8.115a40.967 40.967 0 0 1 .458-.435 19.363 19.363 0 0 1 1.304-1.159q1.34-1.077 2.427-1.447A3.324 3.324 0 0 1 51.5 10.3a3.41 3.41 0 0 1 .973.151q.697.208 1.477.699a13.143 13.143 0 0 1 1.21.868q.597.479 1.221 1.073a24.055 24.055 0 0 1 .419.409 3.279 3.279 0 0 0-.499.521q-.864 1.088-2.051 3.729-1.55 3.45-3.3 8.65-1.75 5.2-3.45 11.4-1.7 6.2-3.15 12.65t-2.3 12.25q-.684 4.667-.818 8.428A49.95 49.95 0 0 0 41.2 72.9a27.446 27.446 0 0 0 .081 2.183q.169 2.112.692 3.518a7.484 7.484 0 0 0 .077.199 4.229 4.229 0 0 0 .569 1.015A2.737 2.737 0 0 0 44.9 80.9a4.71 4.71 0 0 0 1.915-.445q1.503-.669 3.203-2.342a22.142 22.142 0 0 0 .782-.813 28.784 28.784 0 0 0 2.121-2.641q2.061-2.865 4.331-7.127A105.733 105.733 0 0 0 58 66.1l1 1a48.226 48.226 0 0 1-3.058 6.655q-1.985 3.542-4.434 6.27a30.149 30.149 0 0 1-.158.175q-4.65 5.1-9.65 5.1a7.154 7.154 0 0 1-2.605-.451q-1.81-.702-2.947-2.497a8.448 8.448 0 0 1-.398-.702 15.009 15.009 0 0 1-1.163-3.225q-.386-1.58-.556-3.447A34.191 34.191 0 0 1 33.9 71.9q0-3.2.45-7a103.566 103.566 0 0 1 .872-5.869A118.096 118.096 0 0 1 35.6 57q-4.4-.7-8.05-1.15-3.65-.45-6.75-.85-4.7 8.7-9.15 17.9a424.124 424.124 0 0 0-8.131 17.822A390.331 390.331 0 0 0 3.4 91Q1.284 89.749.648 88.36a3.265 3.265 0 0 1-.048-.11 10.467 10.467 0 0 1-.329-.903q-.136-.438-.203-.824A4.204 4.204 0 0 1 0 85.8a10.62 10.62 0 0 1 .195-1.919Q.633 81.519 2.05 78.2q2.05-4.8 5.5-10.95Q11 61.1 15.2 54.5q-2.544-.206-4.568-.318A104.139 104.139 0 0 0 8.9 54.1a158.53 158.53 0 0 0-1.852-.061Q5.588 54 4.4 54Zm31.9-.5q1.5-6.6 3.5-13.35t4.25-12.85a254.411 254.411 0 0 1 1.921-5.05q.903-2.297 1.762-4.327A145.061 145.061 0 0 1 48.3 16.6a17.626 17.626 0 0 0-2.03 1.476q-2.336 1.94-5.12 5.274-3.48 4.168-7.293 9.887A170.521 170.521 0 0 0 32.6 35.15q-4.5 6.95-9.2 15.25 3.4.7 6.75 1.55 3.35.85 6.15 1.55ZM64.277 6.629A22.809 22.809 0 0 0 66 6.7q1.406 0 2.469-.687A4.837 4.837 0 0 0 69.8 4.7q-3.5-1.1-7.75-2.15Q57.8 1.5 53.6.75a51.538 51.538 0 0 0-3.095-.459A41.557 41.557 0 0 0 45.7 0q-3.6 0-4.6 2.6a33.817 33.817 0 0 1 1.155.121q.975.119 2.091.305a72.066 72.066 0 0 1 2.304.424q3.25.65 6.9 1.4a210.844 210.844 0 0 0 2.247.449 179.593 179.593 0 0 0 4.703.851 52.006 52.006 0 0 0 2.001.296q.944.12 1.776.183Z"
          title="Alexandria"
          aria-labelledby="alexandria"
          fill="white"
        />
        <Navigation />
        <ThemeScheme />
        <Search />
      </div>
    </header>
  )
}

export default PrimaryHeader
