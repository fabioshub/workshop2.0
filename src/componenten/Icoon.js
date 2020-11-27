import React from "react";
import Icon from "@material-ui/core/Icon";

/**
 *
 * @prop kleur - rgb, {hex of Engelse naam}
 * @prop soort - engelse tekstwaarde {star, add, etc.}
 * @prop grootte - px
 * @description hiermee roep je een lijn op.
 *
 * Voor alle iconen: https://material-ui.com/components/material-icons/
 */
export default function Icoon(props) {
  return (
    <Icon
      style={{
        color: props.kleur,
        fontSize: props.grootte
      }}
    >
      {props.soort}
    </Icon>
  );
}
