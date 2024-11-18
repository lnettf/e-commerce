import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-around;
`;

export const Info = styled.div`
  display: flex;
  width: 50%;
  gap: 16px;
  flex-direction: column;
`;

export const Category = styled.span``;
export const Price = styled.h3``;
export const AddToCart = styled.button`
  padding: 10px 5px;
  background: black;
  color: white;
`;

export const Image = styled.img`
  width: 50%;
  max-width: 200px;
  height: auto;
`;
