import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cardInfoContainer {
    flex: 0.8;
  }
  .cardInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    display: flex;
    flex: 0.2;
    width: 50px;
    object-fit: contain;
    padding-left: 20px;
  }
`;
