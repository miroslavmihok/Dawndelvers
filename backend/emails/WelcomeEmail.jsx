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

export default function WelcomeEmail({
  name,
  jobType,
  age,
  game,
  discord,
  email,
  country,
  about,
}) {
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
                  {`Dear ${name},`}
                </Heading>
                <Heading
                  as="h4"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {`Thank you for your interest in joining BoostingService as a
                  ${jobType}. We are excited to have you on board!`}
                </Heading>

                <Text style={paragraph}>
                  We have received following information from you:
                </Text>
                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Age: </b>
                  {age}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Game: </b>
                  {game}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Discord: </b>
                  {discord}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Country: </b>
                  {country}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>About: </b>
                  {about}
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
