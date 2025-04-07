import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap:32px;
  width: 50.25rem;
  min-height:16.0625rem ;
  border-radius: 25px;
  padding: 19px 71px 19px 33px;
  margin-top: 33px;
  background-color: #D9D9D9;
  box-shadow: 0px 4px 4px rgba(155, 152, 152, 0.25);
`
export const UserImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid #005CFF;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    color:#005CFF;
  }

  p {
    font-weight: 300;
    font-size: .9375rem;
    color: #000;
  }

`;