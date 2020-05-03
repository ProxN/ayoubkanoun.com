import styled from 'styled-components';
import media from '../../../styles/media.styles';

export default styled.div`
  padding: 0 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));

  ${media.thone`
    padding:0 10px;
  `};

  ${media.phablet`
    width:100%;
    padding:0;
  `};

  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  `};
`;
