import { createSelector } from "@reduxjs/toolkit";

createSelector(
    state => state.pokemon.data,
    () => {

    }
)