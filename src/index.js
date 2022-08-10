import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardHtml from "./Components/Card";
import AreaTexto from "./Components/AreaTexto";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alerta from './Components/Alerta';
import Contenedor from './Components/Contenedor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contenedor></Contenedor>
    <CardHtml
      descripcion="Esto es una carta de bienvenida"></CardHtml>
    <CardHtml titulo="Presentaciòn de Proyecto"
      descripcion="Recuerden que el proyecto de tutorà es previo a la feria que es el 5 de agosto del 2022"></CardHtml>

    <Button as="a" variant="success">
      Prueba de boton
    </Button>
    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://w7.pngwing.com/pngs/34/882/png-transparent-white-and-gray-laptop-computer-illustration-laptop-computer-icons-laptop-icons-no-attribution-electronics-computer-laptop-thumbnail.png"></Card.Img>
      <Card.Body>
        <Card.Title>
          Card de ejemplo
        </Card.Title>
        <Card.Text>
          Mostramos un ejemplo del card
        </Card.Text>
      </Card.Body>
    </Card>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
