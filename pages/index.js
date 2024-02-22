import React from "react";
import { Grid, Button, Divider, Image } from "semantic-ui-react";
import ContactForm from "../components/ContactForm.jsx";
export default function Home() {
  return (
    <>
      <Image size="small" circular centered src="https://static.vecteezy.com/system/resources/previews/001/191/986/original/circle-logo-png.png" style={{marginTop: "50px"}} />
      <section id="header">
        <Grid stackable columns={2}>
              <Grid.Column>
              <div style={{ margin: '16rem 1rem 16rem 5rem' }} id='home'>

                <h1>Безопасно от страха, защищено от насилия.</h1>
                <h5>Если вы или ваш знакомый в настоящее время переживаете горе, вы можете принять участие в наших общественных мероприятиях или связаться с нашей дружной командой для получения бесплатной консультации.</h5>
                <a href="#contact">
                  <Button secondary>Связаться с нами</Button>
                </a>
              </div>
              </Grid.Column>
              <Grid.Column> 
              <div style={{ margin: '16rem 1rem 8rem 5rem' }}>
                <ContactForm />
              </div>
              </Grid.Column>
        </Grid>
      </section>

      <Divider horizontal>О нас</Divider>

      <section id="about">
      <Image className="ui centered medium image" src="https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg" />
      <div style={{margin:'30px'}}>
      <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
      <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
      <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
      <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
      </div>
      </section>
    </>
  );
}
