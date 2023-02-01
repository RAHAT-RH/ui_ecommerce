import { createContext, useEffect, useReducer } from 'react';



export const Cartcontext = createContext()

export const Context = (props) => {

   

    const reducer = (state, action) => {

        // console.log(state)

       

        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter((product) => action.payload.id === product.id)
                if (tempstate.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload]
                };
    
            case 'INCREASE':
                const tempstate1 = state.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, is_popular: (product.is_popular) + 1 };
                    } else {
                        return product
                    }
                });
                return tempstate1;

            case 'DECREASE':
                const tempstate2 = state.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, is_popular: (product.is_popular) - 1 };
                    } else {
                        return product
                    }
                });
                return tempstate2;

            case 'REMOVE':
                const tempstate3 = state.filter((product) => product.id !== action.payload.id )
                  
                return tempstate3;
            default:
                return state;
        }
    }
    const cart = localStorage.getItem("cart")
    const cartStorage = JSON.parse(cart)

    const [state, dispatch] = useReducer(reducer, cartStorage || [])
    const info = { state, dispatch }
    
    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(state))
    }, [state])
    
    return <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
}