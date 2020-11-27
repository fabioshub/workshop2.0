import React from "react"; // Niet aanzitten
import NavigatieBalk from "./componenten/NavigatieBalk";
import Footer from "./componenten/Footer";
import Tekst from "./componenten/Tekst";
import Grid from "./componenten/Grid";
import GridVlak from "./componenten/GridVlak";
import Sectie from "./componenten/Sectie";
import Banner from "./componenten/Hero";
import Lijn from "./componenten/Lijn";
import Kaart from "./componenten/Kaart";
import Icoon from "./componenten/Icoon";
import Knop, { FotoKnop } from "./componenten/Knop";

export default () => {
  return (
    <>
      {/* begin HTML  */}
      <NavigatieBalk>
        <Tekst tekstKleur="rgb(10, 10, 10)" tekstGrootte="13px" margin="20px">
          Workshop
        </Tekst>
      </NavigatieBalk>
      <Banner
        randRadius="7px"
        hoogte="60vh"
        padding="40px"
        achtergrondAfbeelding="https://images.unsplash.com/photo-1586944216110-a6a4a085b91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        wisselAssen={true}
        xAsUitlijnen="midden"
      >
        <Tekst
          tekstDikte="700"
          tekstKleur="white"
          tekstGrootte="30px"
          margin="-60px 0 5px 0"
        >
          Dit is goede content.
        </Tekst>
        <Tekst tekstKleur="white">Super goed</Tekst>
        <Tekst tekstKleur="white" margin="30px 0 0 0">
          <Knop
            achtergrondKleur="#f39074"
            tekstKleur="white"
            link="https://github.com/fabioshub"
          >
            Github
          </Knop>
        </Tekst>
      </Banner>
      <Sectie>
        <Grid>
          <GridVlak
            standaardBreedte={12}
            xAsUitlijnen="midden"
            yAsUitlijnen="midden"
            wisselAssen={true}
          >
            <Tekst tekstKleur="grey">WELKOM BIJ DEZE WORKSHOP</Tekst>
            <Lijn breedte="40px" margin="20px 0" kleur="#F39074" />
          </GridVlak>
          <GridVlak standaardBreedte={12} padding="10px">
            <Tekst
              tekstGrootte="12px"
              tekstUitlijnen="center"
              tekstKleur="grey"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Tekst>
          </GridVlak>
        </Grid>
      </Sectie>
      <Sectie>
        <Grid>
          <GridVlak
            standaardBreedte={4}
            breedteKleinBeeld={6}
            xAsUitlijnen="midden"
          >
            <Kaart
              elevatie={0}
              icoon={<Icoon kleur="#F39074" soort="star" grootte="30px" />}
              titel="Simpel"
              tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </GridVlak>
          <GridVlak
            standaardBreedte={4}
            breedteKleinBeeld={6}
            xAsUitlijnen="midden"
          >
            <Kaart
              elevatie={0}
              icoon={<Icoon kleur="#F39074" soort="work" grootte="30px" />}
              titel="Mooi"
              tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </GridVlak>
          <GridVlak
            standaardBreedte={4}
            breedteKleinBeeld={12}
            xAsUitlijnen="midden"
          >
            <Kaart
              elevatie={0}
              icoon={<Icoon kleur="#F39074" soort="person" grootte="30px" />}
              titel="Snel"
              tekst="is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </GridVlak>
        </Grid>
      </Sectie>
      <Sectie xAsUitlijnen="midden" yAsUitlijnen="midden">
        <FotoKnop
          breedte="50vw"
          titel="Meer zien"
          link="https://github.com/fabioshub"
          url="https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        />
      </Sectie>
      <Footer
        hoogte="20px"
        margin="20px 0 0 0"
        padding="15px"
        randRadius="10px"
      >
        <Tekst tekstKleur="grey" tekstGrootte="13px" tekstDikte="500">
          Trademark Setship vof
        </Tekst>
      </Footer>
      {/* eindig HTML */}
    </>
  );
};
