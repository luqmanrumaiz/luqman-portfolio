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
                    <a href="#parallax">_</a>
                    <a href="#services">_</a>
                    <a href="#clients">_</a>
                    <a href="#contact">_</a>
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

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
export default App;

