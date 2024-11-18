import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background: white;
`;
export const ProductInfo = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;
