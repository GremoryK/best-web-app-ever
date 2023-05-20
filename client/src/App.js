import MyHeader from "./components/UI/Header/MyHeader"
import MyCarousel from "./components/UI/Carousel/MyCarousel"
import MyCard1 from "./components/UI/Card/MyCard1"
import Editor from "./components/UI/Editor/Editor";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter className="App">
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
