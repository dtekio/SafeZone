import React from "react";
import { Grid, Button, Divider } from "semantic-ui-react";
import ContactForm from "../components/ContactForm.jsx";
export default function Home() {
  return (
    <>
      <section id="header">
        <Grid stackable columns={2}>
              <Grid.Column>
              <div style={{ margin: '16rem 1rem 16rem 5rem' }}>
                <h1>Безопасно от страха, защищено от насилия.</h1>
                <h5>Если вы или ваш знакомый в настоящее время переживаете горе, вы можете принять участие в наших общественных мероприятиях или связаться с нашей дружной командой для получения бесплатной консультации.</h5>
                <a href="#prices">
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

      <Divider horizontal>Доп. Секция (скоро) </Divider>

      <section id="prices">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ornare ante, vitae molestie erat. Quisque consectetur lacinia lacus. Nullam neque nibh, tincidunt nec nisl nec, iaculis feugiat arcu. Donec vel augue nec velit euismod luctus id et ligula. Vestibulum vitae mauris ullamcorper, porta ligula sed, hendrerit augue. Curabitur felis lorem, egestas ut tortor id, suscipit vestibulum ante. Cras sed diam congue, condimentum lacus at, consectetur sem. Suspendisse condimentum odio sed leo porttitor cursus. Aenean a volutpat libero. Quisque ipsum eros, convallis in suscipit euismod, egestas id orci. Sed non diam fermentum quam varius eleifend bibendum et erat. Duis diam metus, mattis a lobortis et, maximus vel quam. Proin interdum magna eu nulla posuere facilisis. Nulla in nunc non quam sagittis imperdiet sed eget lorem.

Nulla maximus tincidunt dui et auctor. Vivamus quis hendrerit nunc. Nullam lobortis consequat nisi, a finibus mi ultrices suscipit. Pellentesque erat sapien, facilisis sed lacus quis, commodo mattis ex. Aenean id magna id turpis volutpat ornare. Integer turpis neque, blandit sed vestibulum eu, eleifend sit amet massa. Quisque mollis ex quis ullamcorper congue. Vestibulum eget sodales enim, eu feugiat nulla. Donec luctus tempor ligula.
      </section>
    </>
  );
}
