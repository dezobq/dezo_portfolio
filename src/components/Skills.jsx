import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Meter1 from '../assets/img/meter1.svg';
import Meter2 from '../assets/img/meter2.svg';
import Meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png'
import Marquee from "react-fast-marquee";
import Techs from './Techs';

const Skills = () => {


  const techSkills = [
    {
      id: '1',
      skill: 'MongoDB',
      img: '../assets/img/skills/mongoDB.svg',
    },
    {
      id: '2',
      skill: 'NestJS',
      img: '../assets/img/skills/nestJS.svg',
    },
    {
      id: '3',
      skill: 'React',
      img: '../assets/img/skills/react.svg',
    },
    {
      id: '4',
      skill: 'NodeJS',
      img: '../assets/img/skills/nodeJS.svg',
    },
    {
      id: '5',
      skill: 'Material UI',
      img: '../assets/img/skills/materialUI.svg',
    },
    {
      id: '6',
      skill: 'javaScript',
      img: '../assets/img/skills/js.svg',
    },
    {
      id: '7',
      skill: 'express',
      img: '../assets/img/skills/expressJS.svg',
    },
    {
      id: '8',
      skill: 'HTML',
      img: '../assets/img/skills/html.svg',
    },
    {
      id: '9',
      skill: 'Typescript',
      img: '../assets/img/skills/ts.svg',
    },
    {
      id: '10',
      skill: 'CSS',
      img: '../assets/img/skills/css.svg',
    },
    {
      id: '11',
      skill: 'Tailwind',
      img: '../assets/img/skills/tailwind.svg',
    },
  ];
  const responsive = {
    superLargeDesktop: {
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
  };
  return (
   
    <section className='skill' id='skills'>
      <Container>
        <Row>
        <Col>
           <div className='skill-bx'>
           

            <h2>My Skills</h2>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, voluptatum, quibusdam, amet quas similique
             
            </p>

            {/*  {techSkills.map(({ id, skill, img }) => (
                <Techs key={id} srcImg={img} skill={skill} />
              ))} */}
            
           </div>
        
        </Col>
        </Row>
        
      </Container>
      <img className='background-image-left' src={colorSharp} alt="" />

    </section>
  )
}

export default Skills
