import styled from 'styled-components';
import { Container } from './shared/Container.styled';

const Footer = ({ companyName }) => {
  return (
    <footer>
      <FooterContainer>
        <Container>
          <h3>Footer</h3>

          <p>
            Copyright &copy; {companyName ? companyName : 'AcmeDesigns'}{' '}
            {new Date().getFullYear()}
          </p>
        </Container>
      </FooterContainer>
    </footer>
  );
};

export default Footer;

/* Styled Components*/
const FooterContainer = styled.footer`
  background-color: #2e2e2e;
  height: 100px;
`;
