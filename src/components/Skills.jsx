import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Techs from './Techs'

const skillTechs = [
  {
    id: '1',
    skill: 'React',
    img: '/skills/react.svg'
  },
  {
    id: '2',
    skill: 'NestJS',
    img: '/skills/nestJS.svg'
  },
  {
    id: '3',
    skill: 'MongoDB',
    img: '/skills/mongoDB.svg'
  },
  {
    id: '4',
    skill: 'NodeJS',
    img: '/skills/nodeJS.svg'
  },
  {
    id: '5',
    skill: 'Material UI',
    img: '/skills/materialUI.svg'
  },
  {
    id: '6',
    skill: 'JavaScript',
    img: '/skills/js.svg'
  },
  {
    id: '7',
    skill: 'Express',
    img: '/skills/expressJS.svg'
  },
  {
    id: '8',
    skill: 'HTML',
    img: '/skills/html.svg'
  },
  {
    id: '9',
    skill: 'Typescript',
    img: '/skills/ts.svg'
  },
  {
    id: '10',
    skill: 'CSS',
    img: '/skills/css.svg'
  },
  {
    id: '11',
    skill: 'Tailwind',
    img: '/skills/tailwind.svg'
  }
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <h3>
                A full-stack web developer with passion for the newest techs.
              </h3>
              <p>
                I have maintained, developed and launched multiple projects from
                scratch, handling the development of their back-end and
                front-end codebases.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay
                arrows={false}
              >
                {skillTechs.map(({ id, skill, img }) => (
                  <Techs key={id} skill={skill} srcImg={img} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
