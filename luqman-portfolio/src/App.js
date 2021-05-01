import './App.scss';

const Contrast = require('contrast-js');
let contrast = new Contrast();

function App() {

    return (
        <div className="App">
            <div className="contrast-bg">
                <nav>
                    <div className="logo">
                        <h1 data-heading="L" className="contrast-el" id="name_title">uqman</h1>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><img src="../images/github.svg" alt=""/></li>
                            <li><img src="../images/behance.svg" alt=""/></li>
                            <li><img src="../images/twitter.svg" alt=""/></li>
                        </ul>
                    </div>
                </nav>

                <div>
                    <div id="container">
                        <div id="parallax">

                            <div className="layer" id="layer1">
                                <h1>Hey I am Luqman Rumaiz <span id="red">Welcome to My Portfolio</span></h1>
                            </div>

                            <div className="layer" id="layer6">
                                <img src="../images/castle-bg.svg"/>
                            </div>

                        </div>
                        . <div className="content">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

