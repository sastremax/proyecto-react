import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
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