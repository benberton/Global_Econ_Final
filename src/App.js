// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Typography, Button, Container, ButtonGroup} from '@mui/material';



// function MyButton() {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api');
//       const data = await response.json();
//       console.log('Data from the backend:', data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return (
//     <Button variant="contained" onClick={fetchData}>My Button</Button>
//   );
// }



function RevealingContent() {
  const [isProblemVisible, setProblemVisibility] = useState(true);
  const [areSolutionsVisible, setSolutionsVisibility] = useState(false);

  
  function handleProblemButtonClick() {
    setProblemVisibility(true);
    setSolutionsVisibility(false);
  }

  function handleSolutionsButtonClick() {
    setSolutionsVisibility(true);
    setProblemVisibility(false);
  }

  return (
    <div>
      <ButtonGroup>
        <Button
          variant={isProblemVisible ? 'contained' : 'outlined'}
          onClick={handleProblemButtonClick}
        >
          The Problem
        </Button>

        <Button
          variant={areSolutionsVisible ? 'contained' : 'outlined'}
          onClick={handleSolutionsButtonClick}
        >
          Proposed Solutions
        </Button>
      </ButtonGroup>

      {isProblemVisible && (
        <div>
          <Typography variant="h4" gutterBottom>
            Revealed Content for The Problem
          </Typography>
          <Typography variant="body1">
            This is the content that is revealed when "The Problem" button is clicked.
          </Typography>
          {/* Add more content as needed */}
        </div>
      )}

      {areSolutionsVisible && (
        <div>
          <Typography variant="h4" gutterBottom>
            Revealed Content for Proposed Solutions
          </Typography>
          <Typography variant="body1">
            This is the content that is revealed when "Proposed Solutions" button is clicked.
          </Typography>
          {/* Add more content as needed */}
        </div>
      )}
    </div>
  );
}


function App() {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        MENA EDUCATION
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam.
      </Typography>
      <RevealingContent/>
    </Container>

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
