import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../RTK/slice";

export default function FavoriteButton({pokemonId}) {
    const isFavorite = useSelector(state => 
        state.favorite.some((item => item === pokemonId)))
        const dispatch = useDispatch()
 

    return (
        <button
            onClick={(e) => {
              e.stopPropagation()
              dispatch(isFavorite ? favoritesSlice.actions.
              removeFromFavorite({pokemonId}) : favoritesSlice.
              actions.addToFavorite({pokemonId}))
              action.payload.pokemonId = {pokemonId}
            }}
            className={isFavorite ? "text-[red]" : ''}>
                {isFavorite ?'❤️' : '🤍'}
        </button>
    );


}