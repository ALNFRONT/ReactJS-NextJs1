
import './App.css';
import P from 'prop-types'
import React, { useCallback, useState } from 'react';



const Button = React.memo(function Button({incrementButton}) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
};


function App() {
  const [counter, setCounter] = useState(0);

  // useCallback (função, [dependencia]) //sintaxe

  // useCallback (
  //   setCounter (counter + num)
  //   [counter]) // ao usar o state counter dentro do usecallback, necessariamente devemos coloca-lo como dependencia
  // fazendo com que o componente reenderize novamente, para que possamos otimizar e não necessitar de reenderizção
  // usamos uma função callback para setarmos nosso state

  const incrementCounter = useCallback ((num) => {
    setCounter((c) => c + num);
  }, []);

  // //quando utilizamos  uma arrow function de callback dentro do setCounter isto faz com que não necessitamos
  // da dependencia de counter, pois o parametro já está contido no arrow function de callback

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <h1>C: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;


// quando usamos react.memo memoriza o componentes esse hook faz com que verifique se o componente mudou ou não,
//se mudou ele gera um novo componente, se não mudou ele deixa salvo em um chache para poupar renderização fazendo assim
//otimizações.

//pelo componente está memorizado e a nossa função está com o hook de callback,
// isto faz com que fique setado em cache ambos e não necessitando a renderização do componente filho que neste caso e o 
// componente button

// //diferentemente dos componentes de class, que quando e montado só o que está dentro do render se refaz
// nos componentes de função tudo se refaz novamente, necessitando quase sempre de otimizações com callback

