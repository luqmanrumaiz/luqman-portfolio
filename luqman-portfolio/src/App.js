import './App.scss';

function App() {

    return (
        <div className="App">
            <div className="header" id="myHeader">
                <h1 data-heading="L" className="name_title">uqman</h1>
            </div>

            <div id="page">
                <div id="layerSun">
                    <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/sun.svg"/>
                </div>
                <div id="layerClouds">
                    <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/clouds.svg"/>
                </div>
                <div id="container">
                    <div id="parallax">
                        <div className="layer" id="overlay">
                        </div>
                        <div className="layer" id="layer0">
                            <img src=""/>
                        </div>
                        <div className="layer" id="layer1"><img
                            src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/1.svg"/></div>
                        <div className="layer" id="layer2"><img
                            src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/2.svg"/></div>
                        <div className="layer" id="layer3">
                            <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/3.svg"/>
                        </div>
                        <div className="layer" id="layer4">
                            <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/4.svg"/>
                        </div>
                        <div className="layer" id="layer5">
                            <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/5.svg"/>
                        </div>
                        <div className="layer" id="layer6">
                            <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/6.svg"/>
                        </div>
                        <div className="layer" id="layerBalloon">
                            <img src="https://www.lukw4l.de/utils/media/assets/monochromaticLandscape/balloon.svg"/>
                        </div>
                    </div>
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
    );
}

function myFunction() {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function() {
    //console.log(document.getElementById("container").offsetHeight);
    const height = document.getElementById("container").offsetHeight;
    const scroll = document.getElementById("container").scrollTop
    const opacity = 1 - ((height-scroll)/height);
    myFunction();
    console.log(opacity); document.getElementById("overlay").style.opacity = opacity;
}





export default App;
