
import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import BrandLogo from "../public/assets/EtherLogo.png";
  import Image from "next/image";
  
  interface EtherEdgeEmailProps {
    userFirstname: string;
    // message: string; 
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const EmailTemplate = ({
    userFirstname,
  }: EtherEdgeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Navigating the Future of Web3.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
          src={"https://i.postimg.cc/zG5TGZqq/Ether-Logo.png"}
            width="150"
            height="50"
            alt="Etheredge"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Welcome to Etheredge Media, we got your message and are eager to jump in.
            Click link below to schedule a call with us!
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://calendly.com">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Etheredge team
          </Text>
          {/* <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text> */}
        </Container>
      </Body>
    </Html>
  );
  
  EmailTemplate.PreviewProps = {
    userFirstname: "Alan",
  } as EtherEdgeEmailProps;
  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: '#010506',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    color:'#ffff',  
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 20px 48px 20px",
  };
  
  const logo = {
    margin: "0 auto",
    width: '40%',
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#9747ff",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  