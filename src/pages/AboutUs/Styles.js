import styled from 'styled-components';

import { breakpoints, colors } from '../../styles/stylesVariables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
  p {
    font-size: 1.5rem;
    width: 75%;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;
export const Title = styled.h1`
  padding-top: 2.5rem;
  color: ${colors.font.title};
  border-bottom: 2px solid ${colors.font.title};
  margin: 0;
`;

export const Image = styled.div`
  display: flex;
  > img {
    width: 18rem;
    @media (max-width: ${breakpoints.mobile}) {
      width: 12rem;
    }
  }
`;
