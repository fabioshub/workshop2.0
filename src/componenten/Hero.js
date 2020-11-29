import React from "react";
import NavigatieBalk from "./NavigatieBalk";
import Tekst from "./Tekst";
import Knop from "./Knop";


/**
 * @prop navigatieBalkTitel - tekstwaarde
 * @prop titel - tekstwaarde
 * @prop subTitel - tekstwaarde
 * @prop knopTekst - tekstwaarde
 * @prop hoogte - hoogte
 * @prop achtergrondAfbeelding - url
 */
export default function Hero(props) {
  let xAsUitlijnen;
  let yAsUitlijnen;
  let wisselAssen;

  if (props.wisselAssen === true) wisselAssen = "column";
  if (props.xAsUitlijnen === "begin") xAsUitlijnen = "flex-start";
  if (props.xAsUitlijnen === "midden") xAsUitlijnen = "center";
  if (props.xAsUitlijnen === "eind") xAsUitlijnen = "flex-end";
  if (props.yAsUitlijnen === "begin") yAsUitlijnen = "flex-start";
  if (props.yAsUitlijnen === "midden") yAsUitlijnen = "center";
  if (props.yAsUitlijnen === "eind") yAsUitlijnen = "flex-end";
  return (
    <>
      <NavigatieBalk>
        <Tekst tekstKleur="rgb(10, 10, 10)" tekstGrootte="13px" margin="20px">
          {props.navigatieBalkTitel}
        </Tekst>
      </NavigatieBalk>
      <div
        style={{
          display: "flex",
          flexDirection: wisselAssen || "column",
          justifyContent: xAsUitlijnen || 'center',
          alignItems: yAsUitlijnen,
          margin: props.margin,
          padding: props.padding || '40px',
          borderRadius: props.randRadius || '7px',
          height: props.hoogte || '60vh',
          backgroundColor: props.achtergrondKleur,
          backgroundPosition: "center" /* Center the image */,
          backgroundRepeat: "no-repeat" /* Do not repeat the image */,
          backgroundSize: "cover",
          backgroundImage: props.achtergrondAfbeelding
            ? `url(${props.achtergrondAfbeelding})`
            : undefined
        }}
      >
<Tekst
          tekstDikte="700"
          tekstKleur="white"
          tekstGrootte="30px"
          margin="-60px 0 5px 0"
        >
          {props.titel}
        </Tekst>
        <Tekst tekstKleur="white">{props.subTitel}</Tekst>
        <Tekst tekstKleur="white" margin="30px 0 0 0">
          {
            props.knopTekst && 
<Knop
            achtergrondKleur="#f39074"
            tekstKleur="white"
            link="https://github.com/fabioshub"
          >
            {props.knopTekst}
          </Knop>
          }
          
        </Tekst>
      </div>
    </>
  );
}
