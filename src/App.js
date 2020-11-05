import "./app.scss";
import ParticlesBody from "./components/particles/ParticlesBody";

function App() {
  return (
    <div className="app">
      <div className="particles">
        <ParticlesBody />
      </div>
      <div className="app-content">
        <div className="introduce-my-self">
          <div className="me">
            <img src="/images/peoples/dijalma.jpg" alt="Dijalma Silva" />
            <h1>Dijalma Silva</h1>
            <p>Site em manutenção!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
