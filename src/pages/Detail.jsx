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
      <div className="bg-white flex flex-col justify-center items-center
    py-[20px] px-[30px] rounded-[15px]
    border-b-[5px] border-r-[5px] border-black">
        <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
        <FavoriteButton pokemonId={Number(pokemonId)} />
        <div className="whitespace-pre-wrap text-center">
            {pokemon.description}</div>
        <FlipCard front={pokemon.front} back={pokemon.back}></FlipCard>
      </div>
      )
  }