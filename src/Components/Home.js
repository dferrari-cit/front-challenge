import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  useEffect(() => {
    document.title = "Time dos legais - Front | Home";
  }, []);

  const [response, setResponse] = useState("");
  const [user, setUser] = useState("");

  return <div><h1>Projeto Api GitHub - By Time dos Legais</h1>
  <div className='MarginLeft50'>
  <form
    onSubmit={async (e) => {
        e.preventDefault()
        await axios.get(`http://localhost:4000/searchProfile/${user}`)
              .then((res) => setResponse(res.data))
              .catch((err) => {
                if(err.message.includes("404")) {
                  setResponse("Usuário não encontrado!");
                } else if(err.message.includes("403")) {
                  setResponse("O limite de requisições foi atingido!");
                } else {
                  setResponse("Erro no servidor!");
                }
              });
    }} 
  >
    <input
        type="text" 
        value={user}
        onChange={(e) => {
            setUser(e.target.value);
        }}
        className='Input' 
        name="usr"
        placeholder="Digite um nome de usúario: "
    />
    <button 
        type="submit"
        className='ButtonAvancar'
    >
        <img className='ButtonAvancar ImgAvancar MarginLeft20' src={require('.././Imagens/avancar.png')}></img>
    </button>
  </form>
  </div>
  <button 
        type="button"
        className='ButtonUtil  MarginTop30 '
        onClick={swagger}
    >
      Swagger
    </button>
    <button 
        type="button"
        className='ButtonUtil'
        onClick={health}
    >
      Health-Check
    </button>
    
  {response ?
    <pre className='Result'>{JSON.stringify(response,null, 4)}</pre>
    :
    <pre className='Result'>Digite um usuário primeiro</pre>
  }
  </div>

  function health() {
    window.open('http://localhost:4000/status', '_blank');
  };
  function swagger() {
    window.open('http://localhost:4000/api-docs', '_blank');
  };

}

export default Overview;