import styled, { css } from 'styled-components'


const flexRules = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
`

export const ContactContainer = styled.div`
  ${flexRules}
`;

export const ContactItem = styled.div`
  margin-bottom: 10px;
  ${flexRules}
`;

export const ContactLabel = styled.span`
  font-weight: bold;
`;

export const ContactValue = styled.span`
  margin-left: 5px;
`;