import Cart from "../components/Cart/Cart";

function CartPage(props){
    return(
        <>
        {props.cartIsShown && <Cart hideCart = {props.hideCartHandler}/>}
        </>
    )
}

export default CartPage