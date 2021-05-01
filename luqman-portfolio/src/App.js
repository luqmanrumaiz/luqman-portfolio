import './App.scss';

function App() {

    return (
        <div className="App">
            <nav>
                <div className="logo">
                    <h1 data-heading="L" className="name_title">uqman</h1>
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
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
    );
}

window.onscroll = function() {
    //console.log(document.getElementById("container").offsetHeight);
    const height = document.getElementById("container").offsetHeight;
    const scroll = document.getElementById("container").scrollTop
    const opacity = 1 - ((height-scroll)/height);
    console.log(opacity); document.getElementById("overlay").style.opacity = opacity;
}





export default App;
