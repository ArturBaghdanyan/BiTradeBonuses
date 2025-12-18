import { useState, useEffect } from "react";
import computer from "../../../assets/computer.png";

import style from "./styles.module.scss";

type FeatureItem = {
  id: number;
  img: string;
  title: string;
  description: string;
};

const FeatureSection = () => {
  const [features, setFeatures] = useState<FeatureItem[]>([]);

  useEffect(() => {
    const apiList = async () => {
      try {
        const res = await fetch("/feature.json");
        const data = await res.json();
        setFeatures(data.features);
      } catch (err) {
        console.error("Failed to fetch features:", err);
      }
    };
    apiList();
  }, []);

  return (
    <div style={{ backgroundColor: "#011610FF" }} className="container-spacing">
      <div className={style.feature}>
        <img
          src={computer}
          alt="computer"
          draggable="false"
          style={{ userSelect: "none" }}
        />

        <div className={style.feature_texture}>
          <h3>
            Start learning on the demo version to avoid putting yourself at risk
          </h3>
          <div className={style.feature_columns}>
            {features.map((item: FeatureItem) => (
              <div className={style.feature_columns_row} key={item.id}>
                <img
                  src={item.img}
                  alt="benefit"
                  draggable="false"
                  style={{ userSelect: "none" }}
                />
                <div className={style.feature_columns_row_item}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            <div className={style.feature_columns_button}>
              <button>Try Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
