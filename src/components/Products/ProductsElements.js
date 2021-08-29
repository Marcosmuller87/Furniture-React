import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 4rem;
  background: var(--clr-secondary);
  color: var(--clr-primary);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: -8px -8px var(--clr-fourth);
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
export const ProductBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: var(--clr-third);
  color: var(--clr-secondary);
  transition: 0.2s ease-out;
  margin-bottom: 2rem;

  &:hover {
    background: var(--clr-fourth);
    color: var(--clr-primary);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`;
