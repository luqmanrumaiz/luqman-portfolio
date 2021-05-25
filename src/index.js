import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

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
                <a href="https://solo.to/luqmanrumaiz" target="_blank">
                  <img src="../images/solo.svg" alt="Github-Icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

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
            <div id="about">
              <div class="about-section">
                <div class="inner-container">
                  <h1>About Me</h1>
                  <p class="about-text">
                    Hi! I'm Luqman Rumaiz a 17 year old Computer Science
                    Undergraduate at the University of Westminster. I live in
                    Colombo and aspire to be a Full Stack. Oh and I know a bit
                    of Machine Learning :)
                    <br />
                    <div class="button">
                      <a
                        class="white"
                        href="../documents/CV.pdf"
                        target="_blank"
                      >
                        <p>
                          <span class="bg"></span>
                          <span class="base"></span>
                          <span class="text">Download CV</span>
                        </p>
                      </a>
                    </div>
                  </p>
                  <div class="skills">
                    <span>Full Stack Dev</span>
                    <span>Gamer</span>
                    <span>Data Science Enthusiast</span>
                  </div>
                </div>
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
              <h1>Portfolio</h1>

              <div class="portfolio__container bd-grid">
                <div class="portfolio__img">
                  <img src="../images/work1.png" alt="" />
                  <div class="portfolio__link">
                    <a class="portfolio__link-name">
                      ONCO - an Open Source mobile platform that specializes in
                      the diagnosis and prognosis of Skin, Lung, and Breast
                      Cancer, utilizing deep convolutional neural networks for
                      diagnosis, and machine learning and risk models for
                      prognosis. The main aim is to bridge the gap between many
                      mediocre and unreliable diagnosis and prognosis
                      applications, while at the same time making it more
                      enhanced and effective
                      <br />
                      <br /> Flutter, Firebase, Flask, Azure, OpenCV, Heroku,
                      TensorFlow | Keras | Sci-kit Learn | NLTK, Python
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work2.png" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      Train Ticket Booking System – Complete Application for
                      Employees and Customers that with various features that
                      helps for a smooth running of a Train Station
                      <br />
                      <br />
                      Java, JavaFX, MongoDB
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work3.png" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      Premier League Manager - Web and GUI Application that
                      gives Managers the ability to manage their English
                      Football League.
                      <br />
                      <br />
                      Angular, Playframework, Java, JavaFX
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work4.png" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      Network Flow Application - GUI Applicaiton that calculates
                      and shows the User the optimal Paths taken to push Flow
                      from a Source to a Target along with other handy features
                      like Inserting, Editing & Deleting Edges and Visualizing
                      the Graph
                      <br />
                      <br />
                      Java, JavaFX
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work5.png" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      Car Quiz Game - Mobile Application that entertains the
                      User with 4 Different Quiz Modes along with the option for
                      a Timer in each
                      <br />
                      <br />
                      Android
                    </a>
                  </div>
                </div>
                <div class="portfolio__img">
                  <img src="../images/work6.png" alt="" />

                  <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">
                      Cinema Application – Mobile Application that allows Users
                      to Add, Edit, Delete, Favorite, Search Movies and View
                      Ratings for a Movie
                      <br />
                      <br />
                      Android SQLite
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
                  <p>
                    <span>Nugegoda</span> Colombo, Sri Lanka
                  </p>
                </div>

                <div>
                  <p>+0000000000</p>
                </div>

                <div>
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
                      placeholder="Hey Luqman.."
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

        <div class="side">
          <a href="#">
            About <i class="fas fa-address-card"></i>
          </a>
          <a href="#">
            Skills <i class="fas fa-brain"></i>
          </a>
          <a href="#">
            Projects <i class="fas fa-project-diagram"></i>
          </a>
          <a href="#">
            Contact <i class="far fa-address-book"></i>
          </a>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
