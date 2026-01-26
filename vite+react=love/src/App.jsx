import Counter from "./components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Vite + React = Love</h1>
      </header>

      <hr className="app-divider" />

      <main className="app-main">
        <Counter />
      </main>
    </div>
  );
}

export default App;
