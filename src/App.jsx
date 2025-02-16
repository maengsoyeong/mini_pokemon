import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import { Link, Route, Routes } from 'react-router-dom'

console.log("BrowserRouter is wrapping App");

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))

  }, [])

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500">포켓몬 도감</h1>

      <nav className="flex gap-[10px] justify-center">
        <Link to={"/main"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>

      <main className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
      {console.log("✅ Rendering Routes")}
        <Routes>
          <Route path={"/main"} element={ <Main />} />
          <Route path={"/detail/:pokemonId"} element={ <Detail />} />
          <Route path={"/search"} element={ <Search />} />
          <Route path={"/favorite"} element={ <Favorite />} />
        </Routes>
      </main>

    </>
  )

}

export default App
