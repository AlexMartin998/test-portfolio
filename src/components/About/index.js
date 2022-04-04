import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Acerca de mi'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Soy ingeniero en biotecnología ambiental con conocimientos sólidos
            en cartografía y GIS. Llevo un par de años desarrollando mapas para
            investigaciones científicas, propias y de terceros, en lo referente
            a variación en el uso de suelo, cobertura vegeta, avance de la
            frontera agrícola, delimitación de cuencas hidrográficas,
            determinación de áreas inundables, zonas de influencia directa e
            indirecta, mapas de ruido, puntos de muestreo, georreferenciación,
            hidrología, hidráulica, entre otras.
          </p>
          <p align="LEFT">
            Además de conocer la normativa ambiental vigente, en el ámbito
            ambiental, poseo destreza en técnicas de monitoreo de agua, suelo y
            aire, análisis fisicoquímico y biológico de agua y suelo, técnicas
            de biorremediación, manejo de GPS y conocimientos generalesen el
            área del Desarrollo: programación con Python, desarrollo web y SEO.
          </p>
          <button className="flat-button">
            <a
              href="https://drive.google.com/drive/folders/1uTJelXC4RvVh4WvnOjzOvJCCFCAnFnog?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              VER MAPAS
            </a>
          </button>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/11/ESRI_logo_logotype.png"
                alt="logo"
              />
            </div>
            <div className="face2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ArcGIS_logo.png/600px-ArcGIS_logo.png"
                alt="logo"
              />
            </div>
            <div className="face3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/QGIS_logo%2C_2017.svg/1200px-QGIS_logo%2C_2017.svg.png"
                alt="logo"
              />
            </div>
            <div className="face4">
              <img
                className="envi"
                src="https://www.telematica.com.pe/wp-content/uploads/2020/05/LOGO-ENVI.png"
                alt="logo"
              />
            </div>
            <div className="face5">
              <img
                className="code"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                alt="logo"
              />
            </div>
            <div className="face6">
              <img
                className="code"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
