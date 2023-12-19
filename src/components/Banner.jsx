import 'animate.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import TrackVisibility from 'react-on-screen'
import Typewriter from 'typewriter-effect'

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h1 className=" md:text-3xl xl:text-[2.5rem] font-semibold">
                    <Typewriter
                      options={{
                        strings: [
                          'Full Stack Developer',
                          'Web Design',
                          'UI/UX'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75
                      }}
                    />
                  </h1>

                  
                  <p>
                    With an unwavering passion for innovation and technology, I
                    consistently seek to explore new solutions and enhance my
                    knowledge. My journey in the tech world has led me through
                    diverse paths, from crafting applications to delving into
                    the possibilities offered by artificial intelligence.
                    Through each challenge encountered, I've found opportunities
                    to learn, grow, and collaborate with diverse teams. I firmly
                    believe in technology's ability to positively transform the
                    world, and I'm dedicated to contributing to this
                    advancement, whether through crafting innovative products or
                    sharing the knowledge I've gained.
                  </p>

                  <button
                    onClick={() => {
                      const connectSection = document.getElementById('connect');
                      if (connectSection) {
                        connectSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Contact Me <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
