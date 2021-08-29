import React from "react";
import { FooterContainer, FooterText, SocialIconLink } from "./FooterElements";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        We are in Columbus! 5th Road 376. Contact us in Facebook.
      </FooterText>
      <SocialIconLink
        href="https://www.facebook.com/marcos.muller.906/"
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebook />
      </SocialIconLink>
    </FooterContainer>
  );
};

export default Footer;
