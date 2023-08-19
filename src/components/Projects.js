import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import omni from "../assets/img/OmniAI.png";
import artificer from "../assets/img/artificer.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "OmniAI",
      description: "This AI model is powered by GPT-3.5 and Replicate",
      imgUrl: omni,
      siteUrl: "https://ai-saas-tan.vercel.app/",
      gitUrl: "https://github.com/nipun221/ai-saas/",
    },
    {
      title: "Artificer",
      description: "This is a plateform to share your piece of work.",
      imgUrl: artificer,
      siteUrl: "https://grafbase-pro.vercel.app/",
      gitUrl: "https://github.com/nipun221/grafbase_pro",
    }
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
                  {
                    projects.map((route)=> {
                      return (
                        <div className="linka">
                          <a
                              href={route.siteUrl}
                            >
                              live site
                          </a>
                          <a
                            href={route.gitUrl}
                          >
                            repository
                          </a>
                        </div>
                      )
                    })
                  }
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
