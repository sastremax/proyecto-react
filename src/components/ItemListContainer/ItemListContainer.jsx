import PropTypes from 'prop-types';
import Counter from "../Counter/counter";

const ItemListContainer = ({ greeting }) => {

    const stock = 20;
    const onAdd = (cantidad) => {
        console.log(`Cantidad agregada: ${cantidad}`);
    };

    return (
        <div
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                font: "Nunito",
                height: '100%',
                width: '90vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >          
            <h1>{greeting}</h1>  
            <Counter stock={stock} onAdd={onAdd} />
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;