import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact, } from '@fortawesome/free-brands-svg-icons'

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
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>I'm a very ambitious and motivated individual currently pursuing B.Tech in Computer Science and Engineering with specialization in Big Data Analytics, in search of opportunities where I get to work with the latest technologies on challenging and diverse projects that would help me to learn and grow. </p>
            <p align='left'>A tech enthusiast always eager to learn about new technologies, a passionate and highly productive individual who knows how to manage pressure and commit to deadlines.</p>
            <p>I have strong interest in Programming, Full Stack Development, Machine Learning, Data Science, and UI/UX Design.</p>
            </div>

            <div className="stage-cube-cont">
               <div className="cubespinner">
                  <div className="face1">
                     <FontAwesomeIcon icon={faReact} color="#61DBFB" /> </div>
                  <div classname='face2'>
                     <FontAwesomeIcon icon={faHtml5} color="#E34C26" />  </div>
                  <div classname='face3'>
                     <FontAwesomeIcon icon={faCss3} color="#E31B5F" /> </div>
                  <div classname='face4'>
                     <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" /> </div>
                  <div classname='face5'>
                     <FontAwesomeIcon icon={faNodeJs} color="#3C873A" /> </div>
                  <div classname='face6'>
                     <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
      </>  
    )
}

export default About