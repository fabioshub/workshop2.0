import React from "react";
import Tekst from "./Tekst";
import Lijn from "./Lijn";

/**
 *
 * @prop titel - tekstwaarde
 * @prop tekst - tekstwaarde
 *
 */
export default function TekstMetTitel(props) {
  return (
    <div
      style={{
        margin: props.margin || '40px',
        color: props.tekstKleur,
        fontSize: props.tekstGrootte,
        fontWeight: props.tekstDikte,
        textAlign: props.tekstUitlijnen || 'center'
      }}
    >
            <Tekst tekstKleur="grey">{props.titel}</Tekst>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Lijn breedte="40px" margin="20px 0" align='center' kleur="#F39074" />
            </div>
            <Tekst
              tekstGrootte="12px"
              tekstUitlijnen="center"
              tekstKleur="grey"
            >
              {props.tekst}
            </Tekst>
    </div>
  );
}
