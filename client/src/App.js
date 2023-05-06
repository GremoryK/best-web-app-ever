import MyHeader from "./components/UI/Header/MyHeader";
import MyCarousel from "./components/UI/Carousel/MyCarousel";
import MyCard1 from "./components/UI/Card/MyCard1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader />
      </header>
        <MyCarousel />
        <MyCard1/>
    </div>
  );
}

export default App;
