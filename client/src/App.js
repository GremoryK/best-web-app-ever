import MyHeader from "./components/MyNavbar"
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
