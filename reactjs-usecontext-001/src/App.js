import logo from './logo.svg';
import './App.css';
import React from 'react';

const globalState = {
  title: 'Titulo do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

const Div = ({children}) => {
  return <H1>Oi</H1>
}

const H1 = ({children}) => {
  return <H1>{children}</H1>
}

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Div>
        <H1>
          Oi
        </H1>
      </Div>
    </GlobalContext.Provider>
  );
}

export default App;
