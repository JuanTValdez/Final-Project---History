import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/users').then((res) => {
      setApidata(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      {apiData.map((data, index) => {
        return (
          <div key={index}>
            <h5>
              {'Id: ' +
                `${data.id}` +
                ', Email: ' +
                `${data.email}` +
                ', Password: ' +
                `${data.password}`}
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
