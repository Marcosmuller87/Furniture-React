import styled from "styled-components";
import BackImg from "../../images/hero.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${BackImg});
  height: 95vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  color: var(--clr-secondary);
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 3rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 5px var(--clr-primary), 0 0 10px var(--clr-primary),
    0 0 15px var(--clr-primary), 0 0 20px var(--clr-third),
    0 0 30px var(--clr-third), 0 0 55px var(--clr-third),
    0 0 75px var(--clr-third);
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 3rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: var(--clr-third);
  color: var(--clr-secondary);
  transition: 0.2s ease-out;

  &:hover {
    background: var(--clr-fourth);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: var(--clr-primary);
  }
`;
