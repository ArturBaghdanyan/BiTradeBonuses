

import { useState } from "react";
import styles from "./styles.module.scss";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { accordionData } from '../../../data/acccordion';

export default function HomeFreeAcc() {
  const [expandedIndexFirst, setExpandedIndexFirst] = useState(-1);
  const [expandedIndexSecond, setExpandedIndexSecond] = useState(-1);

  const expandContainer = (index, containerType) => {
    if (containerType === "first") {
      setExpandedIndexFirst(index === expandedIndexFirst ? -1 : index);
      if (index !== expandedIndexFirst && expandedIndexSecond !== -1) {
        setExpandedIndexSecond(-1);
      }
    } else if (containerType === "second") {
      setExpandedIndexSecond(index === expandedIndexSecond ? -1 : index);
      if (index !== expandedIndexSecond && expandedIndexFirst !== -1) {
        setExpandedIndexFirst(-1);
      }
    }
  };

  const middleIndex = Math.floor(accordionData.length / 2);
  const firstHalf = accordionData.slice(0, middleIndex);
  const secondHalf = accordionData.slice(middleIndex);

  const renderIcon = (index, containerType) => {
    if (
      (containerType === "first" && index === expandedIndexFirst) ||
      (containerType === "second" && index === expandedIndexSecond)
    ) {
      return <CiCircleMinus style={{ color: "#00A676", fontSize: "1.5vw" }} />;
    } else {
      return <CiCirclePlus style={{ color: "white", fontSize: "1.5vw" }} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          Most Common <span style={{ color: "#00D094" }}>FAQ</span>
        </p>
        <div className={styles.itemContainer}>
          <div className={styles.itemContainer_firstContainer}>
            {firstHalf.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.itemWrapper} ${
                  index === expandedIndexFirst ? styles.expanded : ""
                }`}
                style={{
                  height: 'auto',
                  padding: "20px",
                  backgroundColor: `${
                    index === expandedIndexFirst ? "#21342F" : "#0F231D"
                  }`,
                  border: `0.1px solid ${
                    index === expandedIndexFirst ? "#00D094" : "#0F231D"
                  }`,
                  borderRadius: '8px'
                }}
                onClick={() => expandContainer(index, "first")}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center'
                  }}
                  className={styles.itemWrapper_head}
                >
                  <p
                    style={{ color: index === expandedIndexFirst ? "#00A676" : "white" }}
                    className={styles.text}
                  >
                    {item.title}
                  </p>
                  <div
                    className={styles.icon}
                    onClick={() => expandContainer(index, "first")}
                  >
                    {renderIcon(index, "first")}
                  </div>
                </div>
                {index === expandedIndexFirst && (
                  <div style={{ width: "80%" }} className={styles.itemWrapper_content}>
                    <p
                      style={{
                        fontSize: "1vw",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.itemContainer_secondContainer}>
            {secondHalf.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.itemWrapper} ${
                  index === expandedIndexSecond ? styles.expanded : ""
                }`}
                style={{
                  height: 'auto',
                  padding: "20px",
                  backgroundColor: `${
                    index === expandedIndexSecond ? "#21342F" : "#0F231D"
                  }`,
                  border: `0.1px solid ${
                    index === expandedIndexSecond ? "#00D094" : "#0F231D"
                  }`,
                  borderRadius: '8px'
                }}
                onClick={() => expandContainer(index, "second")}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{ color: index === expandedIndexSecond ? "#00A676" : "white" }}
                  >
                    {item.title}
                  </p>
                  <div
                    className={styles.icon}
                    onClick={() => expandContainer(index, "second")}
                  >
                    {renderIcon(index, "second")}
                  </div>
                </div>
                {index === expandedIndexSecond && (
                  <div style={{ width: "80%" }} className={styles.itemWrapper_content}>
                    <p
                      style={{
                        fontSize: "1vw",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.sub}></div>
    </div>
  );
}
