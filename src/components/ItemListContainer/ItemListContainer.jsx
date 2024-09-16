import PropTypes from 'prop-types';
import Counter from "../Counter/counter";

const ItemListContainer = ({ greeting }) => {
    return (
        <div
            style={{
                fontSize: "2 rem",
                fontWeight: "bold",
                font: "Nunito",
                height: '100%',
                width: '90vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* greeting */}
            <Counter />
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;