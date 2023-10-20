import { configureStore, createSlice } from "@reduxjs/toolkit";

let dark = createSlice({
    name : "theme",
    initialState : localStorage.getItem('theme') || 'light' ,
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

let language = createSlice({
    name: "language",
    initialState: localStorage.getItem('language') || 'kr',
    reducers: {
      setLanguage: (state, action) => action.payload,
    }
});


export const {toggleTheme} = dark.actions;
export const {setLanguage} = language.actions;

export default configureStore({
    reducer : {
        dark : dark.reducer,
        language: language.reducer
    }
});