import React from 'react';

const Autores = () => {
  React.useEffect(() => {
    document.title = "Time dos legais - Front | Autores";
  }, []);

  return (
  <div>
    <h1>Autores</h1>
    <div className="autores">
      <div className="autorWrapper">
        <img className='ImgAutores' src='https://user-images.githubusercontent.com/100810006/162437438-990b57f6-bc42-4858-adae-dca940c4c82a.jpg'/> 
        Caio Henrique
      </div>
      <div className="autorWrapper">
        <img className='ImgAutores' src='https://user-images.githubusercontent.com/100810006/162437486-66b4dc5b-38ab-40f2-a31b-6c1d5dc11be5.jpg'/> 
        Bruno Moretti 
      </div>
      <div className="autorWrapper">
        <img className='ImgAutores' src='https://user-images.githubusercontent.com/100810006/162437504-b4079c6c-31ae-4b41-96c6-d8084d7d9c1a.jpg'/>
        Antonio Dias
      </div>
      <div className="autorWrapper">
        <img className='ImgAutores' src='https://user-images.githubusercontent.com/100810006/162437515-a3d98e59-1ee2-4e21-b312-609ef15915cd.jpg'/> 
        Arthur Henrique
      </div>
    </div>
  </div>)
}

export default Autores;