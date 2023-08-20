import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products: [],
        productInfo: ""
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: {...action.payload}}
        },
    }
})

export const {setProducts} = shopSlice.actions
export default shopSlice.reducer