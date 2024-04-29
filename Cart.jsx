import React, { useContext } from 'react'
import './Cart.css';
const cart = () => {
    const{caritems,food_list,removefromcart,getTotalcartamount}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
    <div className='cart-items'>
    <div className='cart-items-title'>
     <p>Items</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
    </div>
    <br />
    <hr />
    {food_list.map((items,index)=>{
        if(Cartitems[items._id]>0){
            return (
                <div className='cart-item-title cart-items-item'>
                <img src={items.image} alt='' />
                <p>{items.name}</p>
                <p>${items.price}</p>
                <p>{Cartitems[items._id]}</p>
                <p>${items.price*Cartitems[items._id]}</p>
                <p onClick={()=> removefromcart(items._id)}   className='cross'>x</p>
                </div>
            )
        }
     } )}
    </div>
    <div className='cart-bottom'>
    <div className='cart-total'>
    <h2>Cart Totals</h2>
    <div>
    <div className='cart-total-details'>
    <p>Subtotal</p>
    <p>${getTotalcartamount()}</p>
    </div>
    <hr />
    <div className='cart-total-details'>
    <p>Delivery Fee</p>
    <p>${2}</p>
     </div>
     <hr />
     <div className='cart-total-details'>
     <p>Total</p>
     <p>${getTotalcartamount()+2}</p>
     </div>
     </div>
     <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
    <div className='cart-promocode'>
    <div>
    <p> if you have a promo code ,enter it here</p>
    <div className='cart-promocode-input'>
    <input type='text'  placeholder='promo-code' />
    <button> Submit</button>
    </div>
    </div>
    
    </div>
     </div>
    </div>
  )
}

export default cart
cart.jsx