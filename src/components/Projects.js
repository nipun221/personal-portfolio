import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import omni from "../assets/img/OmniAI.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "OmniAI",
      description: "This AI model is powered by GPT-3.5 and Replicate",
      imgUrl: omni,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Each project is a unique piece of development</p>
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
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}
