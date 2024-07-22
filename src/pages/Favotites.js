import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFav, getFavorites } from '../Services/favoritos';
import bookImg from '../assets/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const NewTitle = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {fetchFavorites()}, []);

  async function fetchFavorites() {
    const fav = await getFavorites();
    setFavorites(fav);
  }

  async function deleteFavorite(id) {
    await deleteFav(id);
    await fetchFavorites();
    alert("livro deletado com sucesso");
  }

  return (
    <AppContainer>
     <div>
       <NewTitle>Aqui estão seus livros favoritos:</NewTitle>
       <ResultContainer>
         {
           favorites.length !== 0 ? favorites.map(favorite => (
             <Result onClick={() => deleteFavorite(Number(favorite.id))}>
               <p>{favorite.nome}</p>
               <img src={bookImg}/>
             </Result>
           )) : null
         }
       </ResultContainer>
     </div>
    </AppContainer>
  );
}

export default Favorites;
