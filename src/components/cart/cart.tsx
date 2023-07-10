import { shoppingCart } from "@/context/cartContext";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";

export function CartShop() {

    const { cartItems } = shoppingCart();

    return (
        <>
            {cartItems.map((book, index) => (
                <div key={index}>
                    <div>Title: {book.title}</div>
                    <div>Author: {book.author}</div>
                    <Button> - </Button>
                    <div>{book.quantity}</div>
                    <Button> + </Button>
                    <div>Price: {book.price}</div>


                    <div>Total: {book.price * book.quantity}</div>
                </div>


            )
            )
            }



            {/* map -> lista de carti , display title price Quant si edit 
         
         total price at the end
            */}


        </>
    )
}