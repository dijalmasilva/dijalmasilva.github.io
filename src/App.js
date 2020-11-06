import "./app.scss";
import CardIdentification from "./components/card-identification/CardIdentification";
import MiniMenu from "./components/mini-menu/MiniMenu";
import PageComponent from "./components/page/PageComponent";
import ParticlesBody from "./components/particles/ParticlesBody";

function App() {
  return (
    <div className="app">
      <div className="particles">
        <ParticlesBody />
      </div>
      <div className="app-content">
        <div className="content">
          <MiniMenu />
          <CardIdentification />
          <PageComponent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "66vh",
                color: "white",
              }}
            >
              <div align="center">
                <h1>Página em desenvolvimento!</h1>
                <p>O site em breve estará finalizado.</p>
                <p>Obrigado pela visita! </p>
              </div>
            </div>
          </PageComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
