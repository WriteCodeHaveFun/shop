'use client';

// this functionality needs modification. 
// Now if want to add another item to cart, 
// i'll just add number of it to number of previosly bought item

export default function AddToCart({itemId, number, fullData}) {
    const addValueTOLocalStorage = () => {
        const curItemIdInfo = localStorage.getItem('cart');

        if (curItemIdInfo) {
            const obj = JSON.parse(curItemIdInfo);
            obj.number = obj.number + number;
            localStorage.setItem('cart', JSON.stringify(obj))
        } else {
            const infoObj = {
                number: number,
                data: fullData
            };
            localStorage.setItem('cart', JSON.stringify(infoObj))
        }
    }
    return(
        <>
            <div className="my-4">
                <p>number of items: {number}</p>
                <button
                    onClick={() => addValueTOLocalStorage()}
                >
                    add to cart
                </button>
            </div>
        </>
    )
}