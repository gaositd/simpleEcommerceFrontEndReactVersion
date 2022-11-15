import "./App.css";
import { useSelector } from "react-redux";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

function App() {
  const getState = useSelector((state) => state.getData);
  console.log(getState);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
