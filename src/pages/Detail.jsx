import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"

export default function Detail() {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById
        (Number(pokemonId)))

     if (!pokemon) {
         return <div>Loading...</div>;
         }

    return (
      <div className="flex flex-col justify-center items-center
      border-[gray] p-[30px] rounded-[10px]">
        <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
        <FavoriteButton pokemonId={Number(pokemonId)} />
        <div className="whitespace-pre-wrap text-center">
            {pokemon.description}</div>
        <FlipCard front={pokemon.front} back={pokemon.back}></FlipCard>
      </div>
      )
  }