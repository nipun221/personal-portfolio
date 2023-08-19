import html5 from "../assets/img/icons8-html5.svg";
import css from "../assets/img/icons8-css.svg";
import js from "../assets/img/icons8-js.svg";
import react from "../assets/img/icons8-react-native.svg";
import tailwind from "../assets/img/icons8-tailwind-css.svg";
import node from "../assets/img/icons8-nodejs.svg";
import ts from "../assets/img/icons8-typescript.svg";
import prisma from "../assets/img/icons8-prisma-orm.svg";
import mongodb from "../assets/img/icons8-mongodb.svg";
import cpp from "../assets/img/icons8-c.svg";
import flutter from "../assets/img/icons8-flutter.svg";
import git from "../assets/img/icons8-git.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech stack</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={html5} alt='' />
                              <h5>HTML</h5>
                            </div>
                            <div className="item">
                              <img src={css} alt='' />
                              <h5>CSS</h5>
                            </div>
                            <div className="item">
                              <img src={js} alt='' />
                              <h5>Javascript</h5>
                            </div>
                            <div className="item">
                              <img src={react} alt='' />
                              <h5>React</h5>
                            </div>
                            <div className="item">
                              <img src={tailwind} alt='' />
                              <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                              <img src={node} alt='' />
                              <h5>Node js</h5>
                            </div>
                            <div className="item">
                              <img src={ts} alt='' />
                              <h5>Typescript</h5>
                            </div>
                            <div className="item">
                              <img src={prisma} alt='' />
                              <h5>Prisma</h5>
                            </div>
                            <div className="item">
                              <img src={mongodb} alt='' />
                              <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                              <img src={cpp} alt='' />
                              <h5>C++</h5>
                            </div>
                            <div className="item">
                              <img src={flutter} alt='' />
                              <h5>Flutter</h5>
                            </div>
                            <div className="item">
                              <img src={git} alt='' />
                              <h5>Version Control</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
