import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>BoostingService Booster/Coach Signup</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ paddingBottom: "0" }}>
              <Column>
                <Heading
                  as="h1"
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Dear USER_NAME,
                </Heading>
                <Heading
                  as="h4"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for your interest in joining BoostingService as a
                  BOOSETER_COACH. We are excited to have you on board!
                </Heading>

                <Text style={paragraph}>
                  We have received following information from you:
                </Text>
                <Text style={paragraph}>
                  <b>Name: </b>
                  USER_NAME
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Age: </b>
                  USER_AGE
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Game: </b>
                  USER_GAME
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Discord: </b>
                  USER_DISCORD
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  USER_EMAIL
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Country: </b>
                  USER_COUNTRY
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>About: </b>
                  USER_ABOUT
                </Text>
                <Text style={paragraph}>
                  If you need to change any of the data please contact us @
                  support@boostingservice.com
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
  padding: "32px",
};
