import {createSlice} from "@reduxjs/toolkit";

const initialState = {name: 'product 1', age: 26};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            return {...state, name: action.payload};

        },
        
    }
});

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;
