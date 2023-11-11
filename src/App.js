// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Typography, Button, Container, ButtonGroup} from '@mui/material';
import ChatUI from './chat';


// function MyButton() {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api');
  //     const data = await response.json();
  //     console.log('Data from the backend:', data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
//   };
//   return (
//     <Button variant="contained" onClick={fetchData}>My Button</Button>
//   );
// }

function ProblemContent() {
  return(
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Challenges to Education in the MENA Region
      </Typography>
      
      <img
        src="https://setav.org/en/assets/uploads/2019/12/mena-region.jpg"
        alt="MENA Region"
        style={{ maxWidth: '100%', marginBottom: '20px' }}
      />

      <Typography variant="body1">
        The MENA region has faced numerous challenges in ensuring access to quality education for all its residents.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Conflict and Instability
      </Typography>
      <Typography variant="body1">
        Ongoing conflicts and political instability in several countries have disrupted educational systems,
        leaving a significant number of children out of school.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Gender Inequality in Education
      </Typography>
      <Typography variant="body1">
        Gender disparities persist in education, with adolescent girls being 1.5 times more likely to be out of
        school in lower secondary education. Early marriages also contribute to hindering girls' education in the region.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Quality of Education
      </Typography>
      <Typography variant="body1">
        A notable concern is the perceived inadequacy of the education system in preparing youth for their future.
        Two-thirds of youth in the Levant feel that the education system is not adequately equipping them with the necessary skills.
      </Typography>

      {/* Add more sections about specific challenges and potential solutions as needed */}
    </Container>
  );
}



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
      <Container align="center">
        <ButtonGroup size='large'>
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
      </Container>
      

      {isProblemVisible && (
        <ProblemContent/>
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
      <RevealingContent/>
      <Container 
      style={
        { 
         width: '90%',
         height: '100px',
         }}>
        <ChatUI/>
      </Container>
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
