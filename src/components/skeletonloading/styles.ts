import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 1100px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px 10px;
  margin-top: 33px;
`;

export const SkeletonParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;