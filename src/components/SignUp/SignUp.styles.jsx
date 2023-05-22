import styled from 'styled-components';
import { BaseButton, GoogleButton, InvertedButton } from '../Button/Button.styles';


export const SignUpContainer = styled.div`
  display: flex; 
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  ${BaseButton}, 
  ${GoogleButton}, 
  ${InvertedButton} {
    display: flex;
    text-align: center;
    width: 100%;
  }
`