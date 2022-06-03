import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import GameDetails from "./components/gameDetails/GameDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/games/:id" element={<GameDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
