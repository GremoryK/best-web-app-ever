import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import {Container} from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
        <Container><MyFooter/></Container>

    </BrowserRouter>
  )
}

export default App;
