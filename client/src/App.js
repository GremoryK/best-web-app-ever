import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <MyNavbar/>
        <Home/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
