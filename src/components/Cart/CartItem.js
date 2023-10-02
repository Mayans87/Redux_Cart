import classes from './CartItem.module.css';
import { cartActions } from '../../Store';
import { useDispatch, useSelector } from 'react-redux';


const CartItem = (props) => {
  const verifyhandler=()=>{
    if(quantity1<=0 || quantity1>=10) {console.log('inside disable');return true;}
    else return false;

  }
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const quantity1 = useSelector(state=>state.quantity);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity1}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(cartActions.decrementhandler())} disabled={verifyhandler()}>-</button>
          <button onClick={()=>dispatch(cartActions.quantityIncreaser())} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
