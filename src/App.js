// components
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
// import Contact from "./components/contact/Contact";
import Nav from "./components/nav/NavLinks";
import Footer from "./components/footer/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ChakraProvider } from '@chakra-ui/react';

// Libraries
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { AnimationProvider } from "./context/TypeAnimationContext";
import { NavProvider } from "./context/NavContext";
import { ProjectProvider } from "./context/ProjectContext";

export default function App() {
  return (
    <ChakraProvider>
      <NavProvider>
        <AnimationProvider>
          <ProjectProvider>
            <Nav />
            <Header />
            <Info />
            <Projects />
            {/* <Contact /> */}
            <Footer />
          </ProjectProvider>
        </AnimationProvider>
      </NavProvider>
    </ChakraProvider>
  );
}