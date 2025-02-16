import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, pokemonSlice } from "./slice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        favorite: favoritesSlice.reducer
    }
})