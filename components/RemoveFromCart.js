'use client';

export default function RemoveFromCart({itemId, setCartData}) {
    function handleClick() {
        let cartData = JSON.parse(localStorage.getItem('cart'));
        delete cartData[itemId];
        cartData.data = cartData.data.filter(function(obj) {
            return obj.itemId !== itemId
        });
        localStorage.setItem('cart', JSON.stringify(cartData));
        setCartData(JSON.parse(localStorage.getItem('cart')));
    }
    return(
        <>
            <button
                onClick={handleClick}
            >
                remove item from cart
            </button>
        </>
    )
}