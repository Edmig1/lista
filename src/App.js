import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
      <div>
        <Header></Header>
          <div className={'main'}>
              <Content></Content>
          </div>
      </div>
  );
}

export default App;
