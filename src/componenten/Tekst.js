import React from "react";

/**
 *
 * @prop tekstKleur - rgb, {hex of Engelse naam}
 * @prop tekstGrootte - px
 * @prop tekstUitlijnen - {links, midden, rechts}
 * @prop tekstDikte - nummers {100, 200, 300 ... 900, 1000}
 * @prop margin - px
 * @description hiermee roep je tekst op.
 *
 */
export default function Tekst(props) {
  return (
    <div
      style={{
        margin: props.margin,
        color: props.tekstKleur,
        fontSize: props.tekstGrootte,
        fontWeight: props.tekstDikte,
        textAlign: props.tekstUitlijnen
      }}
    >
      {props.children}
    </div>
  );
}
