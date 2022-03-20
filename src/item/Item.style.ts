import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 5px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }
  button {
    cursor: pointer;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
