import './App.scss';

function App() {

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
                        document.querySelector(".content").scrollIntoView({
                            behavior: 'smooth'
                        })}>_</a>
                    <a>_</a>
                    <a>_</a>
                    <a>_</a>
                </div>
            </div>

            <div id="container">
                <div id="parallax">

                    <div className="layer" id="layer1">
                        <h1>Hey I am Luqman Rumaiz <span id="red">Welcome to My Portfolio</span></h1>
                    </div>

                    <div className="layer" id="layer6">
                        <img src="../images/castle-bg.svg"/>
                    </div>
                </div>

                <div className="content">
                </div>
            </div>
        </div>
    );
}
export default App;

