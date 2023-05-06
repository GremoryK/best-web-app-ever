import MyHeader from "./components/UI/Header/MyHeader";
import MyCarousel from "./components/UI/Carousel/MyCarousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader />
          <MyCarousel />
      </header>
    </div>
  );
}

export default App;
