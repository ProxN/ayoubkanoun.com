import styled from 'styled-components';
import media from '../../../styles/media.styles';

export const Bar = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  justify-content: space-evenly;
  z-index: 12;
  ${media.tablet`
   display:flex;
  `};
  ${Bar} {
    :nth-child(1) {
      align-self: end;
      transform: ${(props) => props.open && 'rotate(45deg) translate(5px, 6px)'};
    }
    :nth-child(3) {
      transform: ${(props) => props.open && 'rotate(-45deg) translate(5px, -6px)'};
    }
    :nth-child(2) {
      transition: transform 0.2s ease-in-out 0.2s;
      transform: ${(props) => (props.open ? 'scale(0)' : 'none')};
    }
    :nth-child(1),
    :nth-child(3) {
      width: ${(props) => (props.open ? '100%' : '50%')};
    }
  }
`;
