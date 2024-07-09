import styled from 'styled-components';

import { breakpoints } from '../../../../styles/stylesVariables';

export const VideoDivSmall = styled.div`
  display: flex;
  width: 40rem;
  height: 22.5rem;
  border-radius: 6px;
  padding-top: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 28rem;
    height: 16.875rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 18rem;
    height: 14.0625rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 15rem;
    height: 11.25rem;
  }
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
