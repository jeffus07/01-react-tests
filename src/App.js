// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Navbar Links
import { navLinks } from './navLinks';

// Styles
// themeProvider
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme/theme';

// Global Styles
import GlobalStyles from './components/styles/Global';
import './App.css';

// Container
import { Container } from './components/shared/Container.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* Navbar/Header */}
        <Navbar navTitle={'AcmeDesigns'} navLinks={navLinks} />
        {/* TODO: Main content*/}
        <Container>
          <main
            style={{
              minHeight: '70vh',
            }}>
            <h2>Main content here!!!</h2>
          </main>
        </Container>

        {/* Footer */}
        <Footer companyName={'Tester'} />
      </>
    </ThemeProvider>
  );
}

export default App;
