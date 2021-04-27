import './App.css';

function App() {
  return (
    <div className="App">
        <header><input id="navopen" type="checkbox" name="nav"/>
            <div className="logo">
                <h1 data-heading="L" className="name_title">uqman</h1>
            </div>

        </header>
        <main>
            <article>
                <div className="slider">
                    <div className="slide slide-1" id="home">
                        <div className="parallax"><img alt=""
                                                       src="https://www.demix-sport.com/sportmaster.ru/sm-dev/img/item_photo2.png"/>
                        </div>
                        <h3 className="sub">Hey There I am Luqman</h3>
                        <h1 className="title">Welcome to my Portfolio</h1><a className="btn" href="#">Let's start →</a>
                    </div>
                    <div className="slide slide-2" id="clothes">

                    </div>
                    <div className="slide slide-3" id="accessories">

                    </div>
                    <div className="slide slide-4" id="shoes">

                    </div>
                </div>
            </article>
            <aside>
                <ul className="nums">
                    <li>scroll</li>
                    <li>down</li>
                </ul>
            </aside>
        </main>
        <footer>
        </footer>
    </div>
  );
}

export default App;
