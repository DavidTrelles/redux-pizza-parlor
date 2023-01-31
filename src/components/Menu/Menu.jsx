import MenuItem from "../MenuItem/MenuItem";
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Menu ({pizzaMenu}) {

    const history = useHistory();

    const total = useSelector(store => store.totalR);

    const routeToDetails = () => {
        history.push('/details');
    }

    return(
        <>
        <h2>MENU</h2>
        <p>Current Order Total: {total}</p>
        <button onClick={routeToDetails}>NEXT</button>
        <div>
            {pizzaMenu.map(pizza =>
                (<MenuItem key={pizza.id} pizza={pizza} />)
                )}
        </div>
        </>
        )
    }
    
export default Menu;
// get all pizzas from database
// loop through 'em
// put on DOM like gallery css

