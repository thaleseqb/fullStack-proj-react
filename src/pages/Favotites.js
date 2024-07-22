import styled from 'styled-components';
import Search from '../Components/Search';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favorites() {
  return (
    <AppContainer>
      
      <Search
        type={"text"}
        placeholder={"Escreva sua primeira leitura"}
      />
    </AppContainer>
  );
}

export default Favorites;
