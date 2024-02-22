import React from "react";
import { Container, Icon, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import "../public/styles/global.css";
import Navbar from "../components/Navbar";

export default function Document({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>SafeZone</title>
      </Head>
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
      <footer>
        <div id='contact'>
          <h5>Свяжитесь с нами</h5>
          <p>+7 777 777 7777   -   us@gmail.com   -   XX:00-XX:00</p>
          <Icon size="big" link name="telegram" />
          <Icon size="big" link name="whatsapp" />
          <Icon size="big" link name="facebook" />
          <h5>Следите за нами в социальных сетях </h5>

          <Button color="linkedin">
            <Icon name="linkedin" /> LinkedIn
          </Button>
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
          <Button color="youtube">
            <Icon name="youtube" /> YouTube
          </Button>

          <Divider /> 
          <p>© Copyright 2024 (arsencorp) - Все права защищены. </p>
          <p>
          </p>
        </div>
      </footer>
    </div>
  );
}
