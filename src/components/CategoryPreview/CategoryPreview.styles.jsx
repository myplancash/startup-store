import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryPreviewContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 1rem 2rem;

  &:hover {
    /* box-shadow: 0px 15px 20px rgba(7,6,6, 0.4);
    color: #fff;
    transform: translateY(-7px); */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`

export const Title = styled(Link)`
  font-size: 2rem;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`

  
 