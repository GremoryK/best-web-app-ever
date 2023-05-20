import MyHeader from "./components/UI/Header/MyHeader"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
        <MyHeader/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
