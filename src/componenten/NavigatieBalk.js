import React from "react";

/**
 *
 * @prop achtergrondKleur - rgb, hex of Engelse naam
 * @prop padding - px
 * @prop margin - px
 * @prop hoogte - px
 * @prop breedte - px
 * @description hiermee roep je een navigatiebalk op.
 * Gebruik 'achtergrondkleur' om de achtergrond te veranderen. Voorbeeld achtergrondKleur='wit'
 *
 */
export default function NavigatieBalk(props) {
  return (
    <div
      style={{
        width: props.breedte || "100%",
        height: props.hoogte,
        padding: props.padding,
        margin: props.margin,
        backgroundColor: props.achtergrondKleur
      }}
    >
      {props.children}
    </div>
  );
}
