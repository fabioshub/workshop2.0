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

/* 
Changelog workshop 2.0

De componenten zijn geupdate, en er hoeft minder React code geschreven te worden om toch het zeflde resultaat te krijgen.
Een lijst van comps die zijn geupdate:

ff overal uitleg bij geven
Updated:
Banner = banner + navigatiebalk
componenten variabelen makkelijker gemaakt
fotoknop attributen aangepast
kaart is veranderd in icoonMetTitelEnTekst
footer neemt nu tekst attribuut

new:
TekstMetTitel
rij

weg:
secties

*/

/* 
Changelog voorbeelduitwerking

SUPER TIP: Je kan altijd in het bestand Voorbeeld.js als je er niet uit komt. 
Wees niet bang om ons om hulp te vragen :)

Opdracht 1: 
  Stel jezelf voor. Je naam neerzetten als <h1> tag. Vertel wat over je favoriete hobby in een <span> tag.

Opdracht 2:
  Beschrijf je favoriete film. Gebruik daarbij de <TekstMetTitel /> tag. Geef de titel van de film mee als 'titel' en geef een 
  beschrijving van de film mee als 'tekst' TIP: gebruik titel='' en tekst=''

Opdracht 3:
  Maak een knop en voeg een achtergrondafbeelding met tekst toe aan de knop. Geef de knoptekst mee met 'titel' en 
  geef de een achtergrondafbeelding mee met 'url'. TIP: gebruik titel='' en url=''


Opdracht 4:
  Pas het voorbeeld aan naar hoe jij hem wilt. Je mag tekst aanpassen, tags verwijderen en natuurlijk zelf ook tags toevoegen.

*/

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
