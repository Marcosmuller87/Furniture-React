import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  justify-content: center;
  position: sticky;
  font-weight: 700;
`;

export const NavTitle = styled.h1`
  color: var(--clr-secondary);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
  @media screen and (min-width: 400px) {
    padding-top: 1rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.3rem;
  color: var(--clr-secondary);

  p {
    margin-right: 1rem;
    margin-top: 1rem;
    font-weight: bold;
  }
`;
