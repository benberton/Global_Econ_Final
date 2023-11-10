// import logo from './logo.svg';
import './App.css';
import { Typography, Button } from '@mui/material';

function MyButton() {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data');
      const data = await response.json();
      console.log('Data from the backend:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <Button variant="contained" onClick={fetchData}>My Button</Button>
  );
}

function App() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <MyButton/>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
