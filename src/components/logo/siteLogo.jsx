import React from 'react'
import { container, logo } from './siteLogo.module.css'

const SiteLogo = ({ ...props }) => {
  return (
    <div className={container}>
      <svg
        className={logo}
        role="img"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="alexandria"
      >
        <title>Alexandria</title>
        <path d="M 5.4935331,19.029725 H 4.3054955 Q 4.678879,18.045348 5.6123369,17.654997 6.4857148,17.289755 7.6710366,17.26634 a 8.2999673,8.2999673 0 0 1 0.1646305,-0.0013 q 0.5770441,0 1.1880356,0.06789 a 27.446389,27.446389 0 0 1 1.1754773,0.157159 30.016287,30.016287 0 0 1 0.08045,0.01256 q 1.73114,-2.613782 3.547144,-5.074721 1.816002,-2.4609305 3.394393,-4.3787626 1.464001,-1.7786628 2.475194,-2.7545511 A 13.905808,13.905808 0 0 1 19.851824,5.1467496 6.5725647,6.5725647 0 0 1 20.294448,4.7533411 Q 20.7493,4.3877578 21.118268,4.2621659 a 1.1282967,1.1282967 0 0 1 0.362867,-0.065855 1.1574882,1.1574882 0 0 1 0.33027,0.051253 q 0.236589,0.070602 0.501349,0.2372686 A 4.4612493,4.4612493 0 0 1 22.72348,4.77947 q 0.202643,0.1625917 0.41445,0.364219 a 8.1652154,8.1652154 0 0 1 0.142227,0.1388003 1.1130212,1.1130212 0 0 0 -0.169378,0.1768489 q -0.29328,0.3692886 -0.696195,1.2657481 -0.526123,1.1710681 -1.120145,2.9361509 -0.594018,1.7650868 -1.171068,3.8696048 -0.577048,2.104528 -1.06923,4.293911 -0.492191,2.189381 -0.780717,4.158135 -0.232172,1.584161 -0.27766,2.860791 a 16.954997,16.954997 0 0 0 -0.01085,0.601492 9.316256,9.316256 0 0 0 0.02749,0.740994 q 0.05737,0.716891 0.234892,1.194144 a 2.5403641,2.5403641 0 0 0 0.02616,0.06754 1.4354891,1.4354891 0 0 0 0.193141,0.344532 0.92904576,0.92904576 0 0 0 0.774261,0.368289 1.5987593,1.5987593 0 0 0 0.650035,-0.151064 q 0.510174,-0.22708 1.087223,-0.794959 a 7.5158638,7.5158638 0 0 0 0.265443,-0.275963 9.7704237,9.7704237 0 0 0 0.719952,-0.896459 Q 22.66309,25.06973 23.433619,23.62304 a 35.889948,35.889948 0 0 0 0.253904,-0.486068 l 0.339437,0.339445 a 16.369801,16.369801 0 0 1 -1.038005,2.25895 q -0.673787,1.202294 -1.505077,2.128285 a 10.233758,10.233758 0 0 1 -0.05365,0.05939 q -1.578388,1.73115 -3.275589,1.73115 A 2.4283496,2.4283496 0 0 1 17.270398,29.501181 Q 16.656002,29.2629 16.270056,28.653607 A 2.8675835,2.8675835 0 0 1 16.134964,28.415321 5.0946458,5.0946458 0 0 1 15.740193,27.32063 q -0.131025,-0.536317 -0.188728,-1.170049 a 11.605772,11.605772 0 0 1 -0.04449,-1.044794 q 0,-1.086203 0.152752,-2.376077 a 35.154364,35.154364 0 0 1 0.295989,-1.992168 40.08643,40.08643 0 0 1 0.128309,-0.689404 Q 14.590487,19.810458 13.351539,19.6577 12.112584,19.504956 11.06032,19.369178 9.4649596,22.3223 7.9544494,25.44514 A 143.96441,143.96441 0 0 0 5.1944677,31.494634 132.49373,132.49373 0 0 0 5.1540734,31.589 Q 4.4358401,31.164345 4.2199567,30.69286 A 1.1082695,1.1082695 0 0 1 4.2036637,30.655536 3.5529125,3.5529125 0 0 1 4.0919881,30.349014 Q 4.0458243,30.200343 4.0230824,30.069315 A 1.427003,1.427003 0 0 1 4,29.823895 3.6048453,3.6048453 0 0 1 4.0661906,29.172515 Q 4.2148652,28.370761 4.6958509,27.24416 5.3917012,25.614851 6.5627672,23.527297 7.7338335,21.439746 9.1594775,19.199446 8.2959445,19.12952 7.6089205,19.091503 a 35.348872,35.348872 0 0 0 -0.5879102,-0.02784 53.811371,53.811371 0 0 0 -0.6286418,-0.02072 q -0.4955813,-0.01324 -0.8988354,-0.01324 z m 10.8281159,-0.16972 q 0.509159,-2.240301 1.188035,-4.531512 0.678882,-2.291216 1.442618,-4.3617955 a 86.35709,86.35709 0 0 1 0.652067,-1.7141722 q 0.30651,-0.7796934 0.59809,-1.4687547 A 49.239408,49.239408 0 0 1 20.394922,6.334696 5.9829607,5.9829607 0 0 0 19.705862,6.8357038 Q 18.91293,7.4942193 17.96793,8.6259108 16.786685,10.040689 15.4924,11.981952 a 57.881536,57.881536 0 0 0 -0.426676,0.64934 q -1.527478,2.359104 -3.122843,5.176451 1.154091,0.237605 2.291217,0.526137 1.137122,0.288519 2.087551,0.526125 z M 25.818144,2.9501438 a 7.7422727,7.7422727 0 0 0 0.584857,0.024099 q 0.477253,0 0.838073,-0.2331945 A 1.641868,1.641868 0 0 0 27.692869,2.2953652 Q 26.504834,1.9219823 25.062213,1.5655706 23.619602,1.2091588 22.193954,0.95457956 A 17.49403,17.49403 0 0 0 21.143387,0.79877685 14.10608,14.10608 0 0 0 19.512379,0.7 q -1.221983,0 -1.561426,0.8825425 a 11.478821,11.478821 0 0 1 0.392057,0.041074 q 0.330953,0.040394 0.70977,0.1035291 a 24.462038,24.462038 0 0 1 0.782068,0.1439215 q 1.103174,0.2206359 2.342134,0.4752157 A 71.568758,71.568758 0 0 0 22.9397,2.498691 60.96092,60.96092 0 0 0 24.536085,2.7875546 17.652883,17.652883 0 0 0 25.215297,2.888028 q 0.320432,0.04074 0.602847,0.062116 z" />
      </svg>
    </div>
  )
}

export default SiteLogo
