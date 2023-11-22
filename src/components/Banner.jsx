import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import Typewriter from 'typewriter-effect'

const Banner = () => { 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

            <span className="tagline">Welcome to my portfolio!</span>
            <h1 className=" md:text-3xl xl:text-[2.5rem] font-semibold">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Web Design', 'UI/UX'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>

            {/* <h1>
              {`Hi I'm Dezo `}
              <span className="wrap"> {text} </span>
            </h1> */}
            <p>
              Hey there! I'm André, also known as Dezo, a digital enthusiast who
              began crafting web pages back in 1998 at the age of 16. My first
              project was a dedicated fan site for Britney Spears, which became
              a hit despite the technological limitations of the time. Though I
              pursued a different career path, my passion for digital creation
              persisted.
            </p>

            <p>
              In 2021, I returned with a fresh drive, dedicating myself to
              creating impactful digital solutions and connecting people through
              my code. What started as a fan site evolved into a quest for
              innovative solutions and meaningful digital experiences. Now, I
              focus on using technology to simplify lives and foster
              connections.
            </p>

            <p>
              Beyond coding, I devote my time to my two children, my wife, and
              our shared passion for exploring the trails and parks in my city
              in Canada. We love hiking and immersing ourselves in nature,
              finding inspiration for my digital creations along the way.
            </p>

            <p>
              I'm excited to continue this journey, exploring new possibilities
              and embracing challenges that allow me to contribute significantly
              in the digital world.
            </p>

            <button onClick={() => console.log('contact')} href="contact">
              Contact Me <ArrowRightCircle size={25} />
            </button>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
