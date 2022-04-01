import Slider from "./Component/Slider/Slider";
import styles from "./App.module.css";

function App() {
  return (
    <div className="container py-3 px-3">
      <div className={styles.sliderTitle + " text-center py-3"}>Photos</div>
      <Slider />
    </div>
  );
}

export default App;
