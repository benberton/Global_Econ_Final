// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Typography, Button, Container, ButtonGroup} from '@mui/material';
import ChatUI from './chat';

function ProblemContent() {
  return (
    <Container>
      <Typography variant="h4" align="center" fontWeight='bold' gutterBottom>
        Challenges to Education in the MENA Region
      </Typography>
      <img
          src="https://muslimaid.storage.googleapis.com/upload/img_cache/file-22046-c368ce1e43873318969c8977d5b7462f.jpg"  // Replace with the actual path to your image
          alt="Education in MENA"
          style={{ maxWidth: '100%', height: 'auto', marginTop: '1vh', marginBottom: '1vh' }}
        />

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        The MENA region has faced numerous challenges in ensuring access to quality education for all its residents.
        These challenges have had profound effects on the development and well-being of the region's youth, impacting
        their opportunities for personal growth and future success.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Conflict and Political Instability
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Ongoing conflicts and political instability in several countries have disrupted educational systems,
        leaving a significant number of children out of school. This disruption not only hampers the immediate
        educational prospects of the affected children but also contributes to a cycle of poverty and
        social instability.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Insufficient Infrastructure
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Many areas in the MENA region suffer from a lack of educational infrastructure, including schools, libraries,
        and technology. This insufficient infrastructure makes it challenging for students, especially those in
        remote areas, to access quality education. The digital divide further exacerbates this issue, limiting
        opportunities for those without access to modern educational tools.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Socioeconomic Disparities
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Socioeconomic disparities play a significant role in limiting access to education in the MENA region.
        Families with lower incomes often struggle to afford educational expenses, including books, uniforms,
        and transportation. This economic barrier prevents many children from pursuing education beyond the
        primary level, perpetuating cycles of poverty.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Refugees and Displaced Populations
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        The MENA region hosts a substantial number of refugees and displaced populations due to conflicts and crises.
        Providing education for these vulnerable groups is a considerable challenge. Limited resources, language barriers,
        and the trauma experienced by displaced children further complicate efforts to ensure their access to quality education.
      </Typography>
  </Container>
  );
}

function ProposedSolutionsContent() {
  return (
    <Container>
      <Typography variant="h4" align="center" fontWeight='bold' gutterBottom>
        Proposed Solutions for Education in the MENA Region
      </Typography>

      <img
      src="https://setav.org/en/assets/uploads/2019/12/mena-region.jpg"
      alt="Map of MENA Region depicting the challenges in education"
      style={{ maxWidth: '100%', height: 'auto', marginTop: '1vh', marginBottom: '1vh' }}
      />
      <Typography fontStyle='italic' variant="body1">
      Map of the MENA Region (Middle East & North Africa)
      </Typography>

      <Typography variant="body1">
        In addressing the challenges to education in the MENA region, several proposed solutions and initiatives have been put forward:

        <ul>
          <li>
            <strong>Investment in Infrastructure:</strong> Allocating resources to improve and build educational infrastructure, including schools, libraries, and technology, to enhance accessibility.
          </li>
          <li>
            <strong>Teacher Training Programs:</strong> Implementing comprehensive training programs for educators to ensure they are well-equipped to provide quality education.
          </li>
          <li>
            <strong>Community Engagement:</strong> Fostering community involvement and awareness to promote the importance of education and encourage enrollment.
          </li>
          <li>
            <strong>Curriculum Enhancement:</strong> Reviewing and enhancing educational curricula to better align with the needs of the job market and equip students with relevant skills.
          </li>
          <li>
            <strong>Gender Equality Initiatives:</strong> Implementing programs to address gender disparities, such as promoting girls' education and combating early marriages.
          </li>
          <li>
            <strong>Government Policies:</strong> Formulating and implementing effective education policies to ensure inclusivity and address the specific needs of diverse communities.
          </li>
        </ul>
      </Typography>
    </Container>
  );
}



function RevealingContent() {
  const [isProblemVisible, setProblemVisibility] = useState(true);
  const [areSolutionsVisible, setSolutionsVisibility] = useState(false);
  const [isChatVisible, setChatVisibility] = useState(false);

  function handleProblemButtonClick() {
    setProblemVisibility(true);
    setSolutionsVisibility(false);
    setChatVisibility(false);
  }

  function handleSolutionsButtonClick() {
    setSolutionsVisibility(true);
    setProblemVisibility(false);
    setChatVisibility(false);
  }

  function handleChatButtonClick() {
    setChatVisibility(true);
    setProblemVisibility(false);
    setSolutionsVisibility(false);
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

          <Button
            variant={isChatVisible ? 'contained' : 'outlined'}
            onClick={handleChatButtonClick}
          >
            Discussion
          </Button>
        </ButtonGroup>
      </Container>
      <br/>
      <Container style={{width: '95%'}}>
        {isProblemVisible && <ProblemContent />}
        {areSolutionsVisible && <ProposedSolutionsContent />}
        {isChatVisible && 
        <Container>
          <Typography variant="h4" align="center" fontWeight='bold'>Discussion</Typography>
          <br></br>
          <ChatUI/>
        </Container>}
      </Container>
    </div>
  );
}


function App() {
  return (
    <Container>
      <br/>
      <Typography fontWeight='bold' variant="h2" align="center" gutterBottom>
        Eduction in the MENA Region
      </Typography>
      <Container align='center'>
        <br/>
      </Container>
      <RevealingContent/>
    </Container>
  );
}

export default App;
