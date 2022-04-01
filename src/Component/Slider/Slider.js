import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import SliderItem from "../SliderItem/SliderItem";

const Slider = React.memo(() => {
  const [users, setUsers] = useState([]);

  const sliderListRef = useRef();

  let position = 0;
  let positionGap = 0;
  let positionPercent = 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((result) => setUsers(result));
  }, []);

  const prevHandle = () => {
    if (position === 0) {
      return;
    }
    position += 1;
    positionGap += 30;
    positionPercent += 100;

    sliderListRef.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(calc(${positionPercent}% + ${positionGap}px))`;
    });
  };

  const nextHandle = () => {
    if (position === -6) {
      return;
    }

    position -= 1;
    positionGap -= 30;
    positionPercent -= 100;

    sliderListRef.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(calc(${positionPercent}% + ${positionGap}px))`;
    });
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.prevBtn} onClick={prevHandle}>
        {"<"}
      </button>
      <div className={styles.sliderTrack}>
        <ul className={styles.list} ref={sliderListRef}>
          {users.map((item) => (
            <SliderItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
      <button className={styles.nextBtn} onClick={nextHandle}>
        {">"}
      </button>
    </div>
  );
});

export default Slider;
