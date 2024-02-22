import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


export const getAllProduct = createAsyncThunk ("fetchproducts", async (args , {rejectWithValue }) => {
        const response = await fetch('https://dummyjson.com/products')    
        try {
            const result = await response.json()
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
})

export const createuser = createAsyncThunk ("createusers" , async (data, {rejectWithValue}) => {
        const response = await fetch('http://localhost:4000/api/signup/signup', {
            method : "POST", 
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(data)
        })
        try {
            const result = await response.json()
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
})

export const loginuser = createAsyncThunk ('loginuser' , async (data, {rejectWithValue}) => {
        const response = await fetch('http://localhost:4000/api/signup/login' , {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        try {
            const loginData = await response.json()
            if(loginData.error){
                console.log(loginData.error)
            }else{
                localStorage.setItem('token' , loginData.token)
                console.log(loginData.token)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
})


export const MainReducer = createSlice({
    name : "items",
    initialState : {
        products : [],
        loading : false,
        error : null,
        searchData : [],
        cart : [],
        users : [],
    },
    reducers : {
        searchProducts : (state, action) => {
            state.searchData = action.payload;
        },
        addToCart : (state, action) => {
            const {image , title, price, description } = action.payload;
            const obj = {
                image,
                title,
                price,
                description
            }
            state.cart.push(obj)
        }
    },
    extraReducers : builder => {
        builder 
        .addCase(getAllProduct.pending , (state) => {
            state.loading = true
        })
        .addCase(getAllProduct.fulfilled , (state , action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(getAllProduct.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(createuser.pending , (state) => {
            state.loading = true
        })
        .addCase(createuser.fulfilled , (state , action) => {
            state.loading = false;
            state.users.push(action.payload);
        })
        .addCase(createuser.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
        .addCase(loginuser.pending , (state) => {
            state.users = true
        })
        .addCase(loginuser.fulfilled , (state , action) => {
            state.loading = false;
            state.users.push(action.payload);
        })
        .addCase(loginuser.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
    }
})


export default MainReducer.reducer
export const {searchProducts, addToCart} = MainReducer.actions;