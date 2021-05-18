import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <nav>
                    <div className="logo">
                        <h1 data-heading="L" id="name_title">uqman</h1>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><img src="../images/github.svg" alt=""/></li>
                            <li><img src="../images/behance.svg" alt=""/></li>
                            <li><img src="../images/twitter.svg" alt=""/></li>
                        </ul>
                    </div>
                </nav>
                <div className="sidenav">
                    <div id="innernav">
                        <a onClick={() =>
                            // Scroll to a certain element
                            document.querySelector(".parallax").scrollIntoView({
                                behavior: 'smooth'
                            })}>_</a>
                        <a onClick={() =>
                            // Scroll to a certain element
                            document.querySelector(".content").scrollIntoView({
                                behavior: 'smooth'
                            })}>_</a>
                        <a href=".parallax">_</a>
                        <a>_</a>
                    </div>
                </div>

                <div id="container">

                    <div className="parallax">

                        <div className="layer" id="layer1">
                            <h1>Hey I am Luqman Rumaiz <span id="red">Welcome to My Portfolio</span></h1>
                        </div>

                        <div className="layer" id="layer6">
                            <img src="../images/triangle-mountain-bg.svg"/>
                        </div>
                    </div>

                    <div className="content">
                        <h1>Skills & <span className="purple">Technologies</span></h1>
                        <iframe src='https://my.spline.design/librarydevicemodel-44951d33158b65702b731f73fa0c649b/'
    frameBorder='0' width='100%' height='100%'/>
                    </div>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
