import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import PropTypes from 'prop-types';


const MainLayout = ({ children }) => {

    

    
    return <Box>
        <NavBar />
        {children}
        
    </Box>
};

    MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default MainLayout;

/*
import { useRef } from "react";
<div>
            <footer ref={footerRef}>Este es mi footer</footer>
            <Button onClick={handleClick} marginBottom={'40px'}>Cambiar texto</Button>
        </div>

        const footerRef = useRef(null);
        const handleClick = () => {
        footerRef.current.innerHTML = "texto cambiado";
        footerRef.current.setAttribute("style", "color: red");
        
    };
        */