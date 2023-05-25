import MyHeader from "./components/UI/Header/MyHeader"
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <MyHeader/>
        <Home/>
    </BrowserRouter>
  )
}

export default App;
