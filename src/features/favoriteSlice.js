import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites : []
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites (state, action) {
            const foodIndex = state.favorites.findIndex(
                item=>item.id === action.payload.id
            );
            if(foodIndex >= 0) {
                state.favorites[foodIndex].foodQty += 1
            } else {
                const tempProduct = {...action.payload, foodQty: 1}
                state.favorites.push(tempProduct)
              
            }
        }, 
        removeFromFavorites (state, action) {
           const nextFavorites = state.favorites.filter(x => x.id !== action.payload.id)
            state.favorites = nextFavorites
            alert("removed from favorites")
            }    }
});

export const {addToFavorites, removeFromFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;