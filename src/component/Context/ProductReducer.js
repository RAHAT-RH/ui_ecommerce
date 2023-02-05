import { actionTypes } from "./actionTypes";

const getLocalStorage = () => {
    let localStorageToCart = localStorage.getItem("cart");
    if (localStorageToCart === []) {
        return [];
    } else {
        return JSON.parse(localStorageToCart)
    }
    // const localStorageCart = JSON.parse(localStorageToCart)
};

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: getLocalStorage()
};



export const productReducer = (state, action) => {
    
    console.log("state of the",state);
   
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.map(product => ({ ...product, quantity: 1 })),
                error: false,
            };
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case actionTypes.ADD_TO_CARD:
           return {
            ...state,
            cart: [...state.cart, action.payload]
           }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
            };
        case actionTypes.INCREASE:
            const increase = state.cart.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: (product.quantity) + 1 };
                } else {
                    return product;
                }
            });
            return { ...state, cart: increase };
        case actionTypes.DECREASE:
            const decrease = state.cart.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: (product.quantity) - 1 };
                } else {
                    return product;
                }
            });
            return { ...state, cart: decrease };
        default:
            return state;
    }

    
}