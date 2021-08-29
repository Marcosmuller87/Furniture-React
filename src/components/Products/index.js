import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductHeading,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductBtn,
  ProductPrice,
} from "./ProductsElements";
// Se realiza un mapeo de los productos en el archivo data para rendierzar sus prpiedades
const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductBtn>{product.btn}</ProductBtn>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
