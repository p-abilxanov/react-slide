import styles from "./SliderItem.module.css";
import ReactStars from "react-rating-stars-component";
import React from "react";

const SliderItem = React.memo(({ item }) => {
  return (
    <li className="border">
      <div className={styles.itemImg}>
        <img src={item.url} alt={item.name} />
      </div>
      <div className={styles.itemRate}>
        <ReactStars count={5} size={24} activeColor="#ffd700" />
      </div>
      <div className={styles.itemTitle}>
        {item.id} - {item.title}
      </div>
    </li>
  );
});

export default SliderItem;
