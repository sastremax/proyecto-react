import { Button, Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import PropTypes from 'prop-types';
import { useRef } from "react";

const MainLayout = ({ children }) => {

    const footerRef = useRef(null);

    const handleClick = () => {
        footerRef.current.innerHTML = "texto cambiado";
        footerRef.current.setAttribute("style", "color: red");
        
    };
    return <Box>
        <NavBar />
        {children}
        <div>
            <footer ref={footerRef}>Este es mi footer</footer>
            <Button onClick={handleClick} marginBottom={'40px'}>Cambiar texto</Button>
        </div>
    </Box>
};

    MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default MainLayout;