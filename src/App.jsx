import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

console.log("BrowserRouter is wrapping App");

function App() {
  const navigate= useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))

  }, [])

  return (
    <>
      <h1 className="border-t-[50px] border-t-[red] 
      bg-black text-white text-4xl font-bold text-center text-blue-500">포켓몬 도감</h1>

      <nav className="py-[10px] border-b-[3px] border-b-balck 
      flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <span>👀</span>
        <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
        className='w-[120px] border-b border-[darkgray] px-2' />

      </nav>

      <main className='bg-[gray] flex flex-wrap gap-[20px] 
      justify-center pt-[20px] pb-[20px]'>
      {console.log("✅ Rendering Routes")}
        <Routes>
          <Route path={"/"} element={ <Main />} />
          <Route path={"/detail/:pokemonId"} element={ <Detail />} />
          <Route path={"/search"} element={ <Search />} />
          <Route path={"/favorite"} element={ <Favorite />} />
        </Routes>
      </main>

    </>
  )

}

export default App
