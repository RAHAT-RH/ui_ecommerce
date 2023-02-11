import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from './actionTypes';
import { initialState, productReducer } from './ProductReducer';

const PRODUCT_CONTEXT = createContext()




const ProductProvider = ({ children }) => {

    let savedCart = localStorage.getItem("cart");
    savedCart = savedCart ? JSON.parse(savedCart) : [];

    const [state, dispatch] = useReducer(productReducer, {
        ...initialState,
        cart: savedCart
    });
    console.log("product provider: ", state)



    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch("https://wehatbazar.thecell.tech/api/product?include=media", {
            method: "GET",
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data })
            ).catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            })
    }, [])

    const value = {
        state,
        dispatch
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])
    return <PRODUCT_CONTEXT.Provider value={value}>
        {children}
    </PRODUCT_CONTEXT.Provider>
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}
export default ProductProvider;