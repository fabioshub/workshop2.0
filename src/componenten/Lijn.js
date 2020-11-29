import React from "react";
/**
 *
 * @prop kleur - rgb, {hex of Engelse naam}
 * @prop breedte - px
 * @prop margin - px
 * @description hiermee roep je een lijn op.
 *
 */
export default function Line(props) {
  return (
    <hr
      width={props.breedte}
      style={{ margin: props.margin}}
      color={props.kleur}
      
    />
  );
}
