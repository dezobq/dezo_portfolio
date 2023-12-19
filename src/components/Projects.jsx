import 'animate.css'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-snapgram.png'
import projImg2 from '../assets/img/project-memories.png'
import projImg3 from '../assets/img/project-dalle.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Snapgram',
      description: 'Modern social app featuring a native mobile feel and a striking UI. Built with React JS, Appwrite, TypeScript.',
      imgUrl: projImg1,
      link:'https://socialapp-wheat.vercel.app/'
    },
    {
      title: 'Memories',
      description: 'The App "Memories" is a social media app that allows users to post interesting events that happened in their lives. Built with MongoDB, Express, React and NodeJS.',
      imgUrl: projImg2
    },
    {
      title: 'AI Image Generator',
      description: 'Dall-e clone that generates images using Artifical Inteligence. Built with React JS, MongoDB, NodeJS, Express.',
      imgUrl: projImg3
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

export default Projects
