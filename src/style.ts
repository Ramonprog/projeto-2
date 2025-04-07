import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem ;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  margin-bottom:27px ;

  svg {
    font-size: 3.625rem;
  }

  h1 {
    font-weight: 600;
    font-size: 3.75rem;
    margin: 0;
  }

  span {
    font-weight: bold;
    font-size: 3.75rem;
  }
`

export const InputArea = styled.div`
  width: 503px;

  .ant-input-group {
    display: flex;

    .ant-input {
      height: 3.75rem;
      font-size: 1rem;
    }

    .ant-input::placeholder{
      color: #000;
      font-size: 1.25rem;
    }

    .ant-btn {
      height: 3.75rem;
      font-size: 1.25rem;
    }
  }
`;

