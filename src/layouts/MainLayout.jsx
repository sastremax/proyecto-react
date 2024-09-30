import { Box } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export const MainLayout = ({ children }) => {
    return <Box>        
        {children}        
    </Box>
};

    MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    };