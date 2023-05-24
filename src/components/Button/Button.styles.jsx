import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  text-decoration: none;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1rem 0 1rem;
  font-size: 1rem;
  color: #070606;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color:#fff;
  text-decoration: none; 
  display: inline-block; 
  font-size: .5rem;
  border: 1px solid black;
  border-radius: 8px; 
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  
  &:hover {
    background-color: #070606;
    color:#fff;
    border: 1px solid black;
  }
  
  &:link {
    color: #fafafa;
  }
  
  &:visited {
    color: #0000ff;
  }
`
export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: #070606;
  color: #fefefe;
  border: none;
  
  &:hover {
    background-color: #fefefe;
    color: #070606;
    border: 1px solid black;
  }
`