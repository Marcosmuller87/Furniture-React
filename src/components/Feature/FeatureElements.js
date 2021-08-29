import styled from "styled-components";
import FeatureImg from "../../images/feature.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${FeatureImg});
  height: 50vh;
  max-height: 500px;
  max-width: 100vw;
  background-position: center;
  background-size: contain;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--clr-secondary);
  text-align: center;
  padding: 0 1rem;

  @media screen and (min-width: 650px) {
    background-size: cover;
    height: 80vh;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    text-shadow: 0 0 5px var(--clr-primary), 0 0 10px var(--clr-primary),
      0 0 15px var(--clr-primary), 0 0 20px var(--clr-third),
      0 0 30px var(--clr-third), 0 0 55px var(--clr-third),
      0 0 75px var(--clr-third);
  }
`;
