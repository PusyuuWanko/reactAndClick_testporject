import logo from './profile.jpg';
import audio from './audio_file.m4a';
import './App.css';

function App() {
  let music = new Audio(audio);
  const btn = function() {
    let time = new Date();
    let resultTime = time.getSeconds();
    alert("品質はティンティンだけど、なにか問題でも？" + resultTime + "歳");
    music.play();
  }  

  return (
    <div className="App">
      <header className="App-header" onClick={btn}>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="comment">はっはー、私はめが回らないんだな〜、これが</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
          nanisoreoisiino?
        </p>
        <div>
          <h4>プシューページってね。</h4>
        </div>
        <a
          className="App-link"
          href="https://21emon.wjg.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          osunayo!!
        </a>
      </header>
    </div>
  );
}

export default App;
