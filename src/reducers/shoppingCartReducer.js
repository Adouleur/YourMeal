import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: [],
    reducers: {
        addProductsToCart(state, action) {
            let id = action.payload.product.id
            const checkSimilarProduct = state.some(elem => elem.product.id === id);

            if (state.length === 0 || !checkSimilarProduct) {

                return [...state, {
                    product: {
                        ...action.payload.product,
                        count: 1
                    }
                }]
            } else if (checkSimilarProduct) {

                return (
                    state.map(item =>
                        item.product.id === id
                            ? {
                                ...item, product: {
                                    ...item.product,
                                    count: item.product.count + 1
                                }
                            }
                            : item
                    )
                )
            }
        },
        increaseNumberOfProduct(state, action) {
            let id = action.payload

            return (
                state.map(item =>
                    item.product.id === id
                        ? {
                            ...item, product: {
                                ...item.product,
                                count: item.product.count + 1
                            }
                        } : item
                )
            )
        },
        decreaseNumberOfProducts(state, action) {

            return (
                state.map(item =>
                    item.product.id === action.payload.id
                        ? {
                            ...item, product: {
                                ...item.product,
                                count: item.product.count > 1 ? item.product.count - 1 : item.product.count
                            }
                        } : item
                )
            )
        },
        deleteProductFromCart(state, action) {

            return (
                state.filter(item => item.product.id !== action.payload)
            )
        },
        addProductsToCartFromProductInfo(state, action) {
            console.log(action.payload)
            const checkSimilarProduct = state.some(elem => elem.product.id === action.payload.product.id);

            if (state.length === 0 || !checkSimilarProduct) {

                return [...state, {
                    product: {
                        ...action.payload.product,
                        count: action.payload.productAmount
                    }
                }]
            } else if (checkSimilarProduct) {

                return (
                    state.map(item =>
                        item.product.id === action.payload.product.id
                            ? {
                                ...item, product: {
                                    ...item.product,
                                    count: item.product.count + action.payload.productAmount
                                }
                            }
                            : item
                    )
                )
            }
        }
    }
})
export const {
    addProductsToCart,
    increaseNumberOfProduct,
    decreaseNumberOfProducts,
    deleteProductFromCart,
    addProductsToCartFromProductInfo
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;