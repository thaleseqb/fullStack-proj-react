import styled from 'styled-components';
import Header from './Components/Header';
import Search from './Components/Search';
import LastUpdates from './Components/LatestUpdates';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search
        type={"text"}
        placeholder={"Escreva sua primeira leitura"}
      />
      <LastUpdates/>
    </AppContainer>
  );
}

export default App;
