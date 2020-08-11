import React, { useState, useEffect } from 'react';

import { Container, Circle, Log } from './styles';

import api from '../../services/api';

function Dashboard() {
  const [ status, setStatus ] = useState('carregando');
  const [ miliseconds, setMiliseconds ] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      tryToConnect();
    }, miliseconds);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function tryToConnect() {
    try {
      api.post('https://service.sitemercado.com.br/api/v1/oauth/token', {
        client_id: "",
        client_secret: ""
      }).then(response => {
        // console.log(response.data);
        console.log('conectado');
        setStatus('conectado');
      }, response => {
        // console.log(response.data);
        console.log('desconectado');
        setStatus('desconectado');
      });
    } catch(err) {
      // console.log(err)
      console.log('desconectado');
      setStatus('desconectado');
    } 
    
  }

  return (
    <Container>
      {status === 'conectado' && (
        <div>
          <h1>Conectado</h1>
          <Circle color={'green'} />
        </div>
      )}
      {status === 'desconectado' && (
        <div>
          <h1>Desconectado</h1>
          <Circle color={'red'} />
        </div>
      )}
      {status === 'carregando' && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
      <Log>
        <p>Verificando a cada {miliseconds/1000} segundos</p>
      </Log>

    </Container>
  );
}

export default Dashboard;