
const getStoredCart = ()=>{
     const items = localStorage.getItem('cart')
     if(items){
        return JSON.parse(items)
     }
     else{
        return []
     }
}

const saveCart = (cart) =>{
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

const addTols = id =>{
    const cart = getStoredCart();
    cart.push(id)

    saveCart(cart)
}

export {addTols,getStoredCart}