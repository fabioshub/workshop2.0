import React from "react";

/**
 * @prop margin - px
 */
export default function Rij(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      {props.children}
    </div>
  );
}
