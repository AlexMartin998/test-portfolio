import { useEffect, useRef } from 'react'
import gsap from 'gsap'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin()

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 12,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 2,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          // transform="translate(0 457) scale(.1 -.1)"
          fill="none"
          style={{
            fill: 'none',
            stroke: 'gold',
            strokeMiterlimit: 10,
          }}
        >
          <path
            ref={outlineLogoRef}
            className="cls-1"
            d="M333.87,849.63l-13-77.8H181.6l-14,77.8H10.29L211.65,47.29h80.14L492.15,849.63ZM251.72,391.32,207.64,624.73H294.8Z"
            transform="translate(-9.65 -46.79)"
          />

          <path
            className="cls-1"
            d="M368.92,850l-13-77.8H216.65l-14,77.8H45.34L246.7,47.66h80.14L527.2,850ZM286.77,391.69,242.69,625.1h87.16Z"
            transform="translate(-9.65 -46.79)"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
