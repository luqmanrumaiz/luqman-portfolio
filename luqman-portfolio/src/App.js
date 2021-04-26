import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

      <div className="parallax"></div>

      <div style="height:1000px;background-color:red;font-size:36px">
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>

    </div>
  );
}

export default App;
