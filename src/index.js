import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Parallax from "parallax-js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="logo">
            <h1 data-heading="L" id="name_title">
              uqman
            </h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <img src="../images/github.svg" alt="" />
              </li>
              <li>
                <img src="../images/behance.svg" alt="" />
              </li>
              <li>
                <img src="../images/twitter.svg" alt="" />
              </li>
            </ul>
          </div>
        </nav>
        <div className="sidenav">
          <div id="innernav">
            <a
              onClick={() =>
                // Scroll to a certain element
                document.querySelector(".parallax").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              _
            </a>
            <a
              onClick={() =>
                // Scroll to a certain element
                document.querySelector(".about-content").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              _
            </a>
            <a
              onClick={() =>
                // Scroll to a certain element
                document.querySelector(".wrapper").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              _
            </a>
          </div>
        </div>

        <div id="background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            class="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <div className="parallax">
            <div className="layer" id="layer1">
              <h1>
                Hey I am Luqman Rumaiz{" "}
                <span id="red">Welcome to My Portfolio</span>
              </h1>
            </div>

            <div className="layer" id="layer6">
              <img src="../images/triangle-mountain-bg.svg" />
              <div class="icon-scroll" />
            </div>
          </div>

          <div className="content">
            <div>
              <div class="about-section" id="scene">
                <div data-depth="0.2" class="inner-container">
                  <h1>About Me</h1>
                  <p data-depth="0.6" class="about-text">
                    Hi! I'm Luqman Rumaiz a 17 year old Computer Science
                    Undergraduate at the University of Westminster. I live in
                    Colombo and aspire to be a Full Stack. Oh and I know a bit
                    of Machine Learning :)
                  </p>
                  <div class="skills">
                    <span>Full Stack Dev</span>
                    <span>Gamer</span>
                    <span>Data Science Enthusiast</span>
                  </div>
                </div>
              </div>

              <div class="button">
                <a class="white" href="../documents/CV.pdf" target="_blank">
                  <p>
                    <span class="bg"></span>
                    <span class="base"></span>
                    <span class="text">Download CV</span>
                  </p>
                </a>
              </div>
            </div>

            <div class="wrapper">
              <h1>Skills</h1>
              <div class="skills-container">
                <iframe
                  src="https://my.spline.design/librarydevicemodel-44951d33158b65702b731f73fa0c649b/"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>

            <section class="portfolio section" id="portfolio">
              <h1 class="section-title">Portfolio</h1>

              <div class="portfolio__container bd-grid">
                <div class="portfolio__img">
                  <img src="../images/work1.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work2.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work3.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work4.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work5.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work6.jpg" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      View details
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer class="footer-distributed">
              <div class="footer-left">
                <h3>
                  Luqman<span>Rumaiz</span>
                </h3>

                <p class="footer-links">
                  <a href="#">Home</a>·<a href="#">About</a>·
                  <a href="#"> Skils</a>·<a href="#">Projects</a>
                </p>

                <p class="footer-company-name">Luqman &copy; 2021</p>
              </div>

              <div class="footer-center">
                <div>
                  <i class="fa fa-map-marker"></i>
                  <p>
                    <span>Nugegoda</span> Colombo, Sri Lanka
                  </p>
                </div>

                <div>
                  <i class="fa fa-phone"></i>
                  <p>+0000000000</p>
                </div>

                <div>
                  <i class="fa fa-envelope"></i>
                  <p>
                    <a href="mailto:luqman.rumaiz@gmail.com">
                      luqman.rumaiz@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="footer-right">
                <p class="footer-company-about">
                  <span>Contact Me</span>
                  Feel free to send me an Email or dm on Discord I will try my
                  best to respond.
                  <form action="/action_page.php">
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Hey.."
                    ></textarea>
                    <div class="button" id="send-email">
                      <a class="white" href="#">
                        <p>
                          <span class="bg"></span>
                          <span class="base"></span>
                          <span class="text">Send Message</span>
                        </p>
                      </a>
                    </div>
                  </form>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
