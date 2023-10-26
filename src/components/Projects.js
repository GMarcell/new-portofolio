import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import instagramClone from "../assets/img/instagramClone.PNG"
import netflixClone from "../assets/img/netflixClone.PNG"
import photoGalery from "../assets/img/photoGalery.PNG"
import reactTodo from "../assets/img/reactToDo.PNG"
import pokedex from "../assets/img/Pokedex.PNG"
import vueTodoApp from "../assets/img/vue-todo-app.png"
import frvrhngry from "../assets/img/frvrhngry.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import nuxtmovieapp from "../assets/img/nuxt-movie-app.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Instagram Clone",
      description: "ReactJS & Firebase",
      imgUrl: instagramClone,
      Url: "https://instagram-clone-d1422.firebaseapp.com/"
    },
    {
      title: "Netflix Clone",
      description: "ReactJS & Firebase",
      imgUrl: netflixClone,
      Url: "https://netflix-clone-5a379.firebaseapp.com/"
    },
    {
      title: "Photo Galery",
      description: "ReactJS & Firebase",
      imgUrl: photoGalery,
      Url: "https://clone-instagram-6f601.firebaseapp.com/"
    },
    {
      title: "React ToDo",
      description: "ReactJS & Firebase",
      imgUrl: reactTodo,
      Url: "https://fir-todo-c24d8.web.app/"
    },
    {
      title: "Pokedex",
      description: "ReactJS & PokeAPI",
      imgUrl: pokedex,
      Url: "https://simple-pokedex-new.netlify.app/"
    },
    {
      title: "Todo App",
      description: "VueJS",
      imgUrl: vueTodoApp,
      Url: "https://benevolent-sawine-8d2d61.netlify.app"
    },
    {
      title: "frvrhngry",
      description: "ReactJS",
      imgUrl: frvrhngry,
      Url: "https://frvrhngry.netlify.app/"
    },
    {
      title: "Movie App",
      description: "NuxtJS & TMDB API",
      imgUrl: nuxtmovieapp,
      Url: "https://nuxtjs-movie-app.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects I have developed</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ReactJS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
