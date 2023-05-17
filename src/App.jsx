import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Profile from './components/Profile';
import PeopleAssociated from './components/PeopleAssociated';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Profile />
        <PeopleAssociated />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 22px 32px;
  display: grid;
  grid-template-columns: 0.923fr 0.435fr;
  gap: 16px;
  min-height: 100%;
  border: 4px solid blue;
`;

export default App;
