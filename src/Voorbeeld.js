import React from "react"; // Niet aanzitten
import Footer from "./componenten/Footer";
import Tekst from "./componenten/Tekst";
import Grid from "./componenten/Grid";
import GridVlak from "./componenten/GridVlak";
import Hero from "./componenten/Hero";
import Lijn from "./componenten/Lijn";
import Rij from "./componenten/Rij";
import IcoonMetTitelEnTekst from "./componenten/Kaart";
import Icoon from "./componenten/Icoon";
import Knop, { FotoKnop } from "./componenten/Knop";
import TekstMetTitel from "./componenten/TekstMetTitel";

export default () => {
  return (
    <>
      {/* begin HTML  */}
      <Hero
        achtergrondAfbeelding="https://images.unsplash.com/photo-1586944216110-a6a4a085b91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        navigatieBalkTitel='Een workshop!'
        titel='Dit is goede content'
        subTitel='Super goed'
        knopTekst='Github bekijken'
      />
      <TekstMetTitel
        titel='WELKOM BIJ DEZE WORKSHOP'
        tekst={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      />
      <Rij>
        <IcoonMetTitelEnTekst
          elevatie={0}
          icoon={<Icoon kleur="#F39074" soort="star" grootte="30px" />}
          titel="Simpel"
          tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <IcoonMetTitelEnTekst
          elevatie={0}
          icoon={<Icoon kleur="#F39074" soort="star" grootte="30px" />}
          titel="Simpel"
          tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <IcoonMetTitelEnTekst
          elevatie={0}
          icoon={<Icoon kleur="#F39074" soort="star" grootte="30px" />}
          titel="Simpel"
          tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </Rij>
      <FotoKnop
        titel="Meer zien"
        link="https://github.com/fabioshub"
        url="https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
      />
      <Footer
        tekst='Footer tekst'
      />
      {/* eindig HTML */}
    </>
  );
};
