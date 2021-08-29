import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--clr-primary);
  color: var(--clr-third);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const FooterText = styled.div`
  font-weight: bold;
  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SocialIconLink = styled(Link)`
  color: #3b5998;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem auto;
  cursor: pointer;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
