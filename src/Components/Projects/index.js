import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ResearchCard } from "./ResearchCard";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../../assets/img/Project1.png";
import projImg2 from "../../assets/img/Project2.png";
import projImg3 from "../../assets/img/Project3.png";
import resImg1 from "../../assets/img/Research1.png"
import resImg2 from "../../assets/img/Research2.png"
import certImg1 from "../../assets/img/Cert1.png"
import certImg2 from "../../assets/img/Cert2.png"
import certImg3 from "../../assets/img/Cert3.png"
import certImg4 from "../../assets/img/Cert4.png"
import certImg5 from "../../assets/img/Cert5.png"

import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Anti Virus Bot",
      description: "Telegram bot that analyze file uploaded for virus and malware scan.",
      imgUrl: projImg1,
    },
    {
      title: "File Encrypter",
      description: "Encrypt file with custom key to secure your files.",
      imgUrl: projImg2,
    },
    {
      title: "Telegram Bot Reverse Shell",
      description: "Telegram Bot to take reverse shell of any victim.",
      imgUrl: projImg3,
    },
  ];
  const research = [
    {
      title: "Computation Offloading in Mobile Edge Computing for Next Generation Networks: A deep reinforcement learning approach",
      description: "Shrey Dhiman | Amita Chauhan | Sakshi Kaushal | Harish Kumar",
      imgUrl: resImg1,
    },
    {
      title: "Optimizing Resource Sharing in Blockchain-based Mobile Edge Computing through Reinforcement Learning: A DDPG Approach",
      description: "Shrey Dhiman | Amita Chauhan | Sakshi Kaushal | Harish Kumar",
      imgUrl: resImg2,
    },
    
  ];

  const cerificate = [
    {
      title: "Python Programming",
      description: "NITTTR Chandigarh",
      imgUrl: certImg1,
    },
    {
      title: "Data Science with Python",
      description: "www.edureka.com",
      imgUrl: certImg2,
    },
    {
      title: "Blockchain Technologies and its Applications",
      description: "NIT Hamirpur",
      imgUrl: certImg3,
    },
    {
      title: "Cyber Security",
      description: "RESEC SYSTEMS PVT. LTD.",
      imgUrl: certImg4,
    },
    {
      title: "ERP",
      description: "Himachal Pradesh Power Corporation Limited",
      imgUrl: certImg5,
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
                <h2>Projects | Research</h2>
                <p>Innovative Projects, Pioneering Research: Shaping the Future with Excellence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          research.map((research, index) => {
                            return (
                              <ResearchCard
                                key={index}
                                {...research}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          cerificate.map((cerificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...cerificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
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