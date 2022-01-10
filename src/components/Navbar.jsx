import styled from 'styled-components';
import { Container } from './shared/Container.styled';

const Navbar = ({ navTitle, navLinks }) => {
  return (
    <Navbar>
      <Container>
        <NavItems>
          <Title>
            <h1>{navTitle ? navTitle : 'Navbar'}</h1>
          </Title>
          <Nav>
            <ul>
              {navLinks.map((link) => (
                <li>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </Nav>
        </NavItems>
      </Container>
    </Navbar>
  );
};

export default Navbar;

/* Styled Components */
const Navbar = styled.div`
  background-color: var(--bg-color);
  height: 75px;
  display: flex;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

const Title = styled.div`
  /* Nav title */
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;

    a {
      color: #fff;
      padding-bottom: 5px;
      margin: 0 7px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    a:hover {
      border-bottom: 2px solid white;
      border-color: pink;
    }
  }
`;
