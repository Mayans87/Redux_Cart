import { useDispatch} from 'react-redux';
import classes from './CartButton.module.css';
import {cartActions} from '../../Store/index.jsx'


const CartButton = (props) => {
  // const toggle=useSelector(state=>state.toggle);
  const dispatch=useDispatch();
  
  return (
    <button className={classes.button} onClick={()=>dispatch(cartActions.cartToggler())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
