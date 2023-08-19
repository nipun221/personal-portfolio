import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="linka">
            <Row>
              <a
                href={siteUrl}
              >
                site
              </a>
              <a
                href={gitUrl}
              >
                repo
              </a>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  )
}
