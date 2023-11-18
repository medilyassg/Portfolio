import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Edu Solutions"
              description="The platform may include features such as discussion forums, live chat, and resources such as tutorials, videos, and study materials. It may also offer tools for collaborative learning, such as group projects and peer review."
              ghLink="https://github.com/medilyassg/Edu-solutions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Money Management"
              description="A money management website is an online platform designed to help individuals manage their finances. It may include features such as budget tracking, expense monitoring, investment tracking, and debt management tools."
              ghLink="https://github.com/medilyassg/budget-manager-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Waether-App"
              description="Weather forecast systems and applications predict weather conditions based on multiple parameters."
              ghLink="https://github.com/medilyassg/React-Waether-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-commerce Platform"
              description="An eCommerce platform is a sophisticated software solution designed to empower businesses in establishing and managing their online presence. It serves as a virtual storefront, offering a suite of tools and features that enable merchants to showcase, sell, and deliver their products or services to a global audience."
              ghLink="https://github.com/medilyassg/ONLINE-STORE-MERN"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
