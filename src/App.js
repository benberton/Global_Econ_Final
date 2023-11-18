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
        The MENA region has faced numerous challenges in ensuring access to quality education for all its residents. Nearly 
        half the population of the region is under the age of 24. One in every five children in the region is out of school, 
        and the literacy rate is the lowest in the world <i>(Unicef)</i>. These challenges have had profound effects on the development and 
        well-being of the region's youth, impacting their opportunities for personal growth and future success.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Conflict and Political Instability
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Ongoing conflicts and political instability in several countries have disrupted educational systems,
        leaving a significant number of children out of school. Armed conflicts in Syria, Iraq, and Yemen have left 
        over 14 million students without any education <i>(Bonatto)</i>. This disruption not only hampers the immediate
        educational prospects of the affected children but also contributes to a cycle of poverty and
        social instability.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Insufficient Infrastructure
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Many areas in the MENA region suffer from a lack of educational infrastructure, including schools, libraries,
        and technology. This insufficient infrastructure makes it challenging for students, especially those in
        remote areas, to access quality education. The digital divide further exacerbates this issue, with the widespread 
        lack of digital literacy limiting opportunities for those without access to modern educational tools <i>(Hall)</i>.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Socioeconomic Disparities
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Socioeconomic disparities play a significant role in limiting access to education in the MENA region.
        Families with lower incomes often struggle to afford educational expenses, including books, uniforms,
        and transportation, perpetuating cycles of poverty. Addressing these disparities is crucial for empowering
        women, as education is a key factor in fostering women's empowerment. Adolescent girls are 1.5 times more likely 
        to be out of school in lower secondary education in the region and one in five girls in the region are married before 
        the age of 18 <i>(Unicef)</i>. Despite higher education levels among women in MENA, barriers such as patriarchal norms and unfavorable 
        legal environments hinder their full participation in the workforce. In the MENA region, only 19.77 percent of women 
        participate in the labor force, with a high unemployment rate among young women, reaching 42 percent <i>(Abdallah)</i>.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Mismatch Between Skills and Labor Market Requirements
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        There exists a significant mismatch between the skills acquired by individuals in the MENA region and the requirements
        of the labor market. This gap can be attributed, in part, to the limited opportunities for gaining work experience before
         leaving school. Notably, every additional year of schooling in the region adds only around 5.4 percent to earnings, compared to the 
        world average of 7 percent. Education systems are struggling to prepare the youth for the workplace, and labor markets are not generating
         the needed jobs. Youth unemployment rates (15-24 years) in MENA are the highest globally, with close to one-third of youth in North Africa
          and more than one out of five youth in the Arab States estimated to be unemployed as of 2018 <i>(Unicef)</i>
      </Typography>
  </Container>
  );
}



function ProposedSolutionsContent() {
  return (
    <Container>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Proposed Solutions for Education in the MENA Region
      </Typography>

      <img
        src="https://setav.org/en/assets/uploads/2019/12/mena-region.jpg"
        alt="Map of MENA Region depicting the challenges in education"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '1vh', marginBottom: '1vh' }}
      />
    <Typography fontStyle="italic" variant="body1" textAlign='center' style={{ marginBottom: '2vh'}}>
        Map of the MENA Region (Middle East & North Africa)
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Investment in Infrastructure
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        Allocating resources to improve and build educational infrastructure, including schools, libraries, and technology, to enhance accessibility.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        In addressing the challenges to education in the MENA region, several proposed solutions and initiatives have been put forward.

        <strong>Investment in Infrastructure:</strong> Allocating resources to improve and build educational infrastructure, including schools, libraries, and technology, to enhance accessibility.

        <strong>Teacher Training Programs:</strong> Implementing comprehensive training programs for educators to ensure they are well-equipped to provide quality education.

        <strong>Community Engagement:</strong> Fostering community involvement and awareness to promote the importance of education and encourage enrollment.

        <strong>Curriculum Enhancement:</strong> Reviewing and enhancing educational curricula to better align with the needs of the job market and equip students with relevant skills.

        <strong>Gender Equality Initiatives:</strong> Implementing programs to address gender disparities, such as promoting girls' education and combating early marriages.

        <strong>Government Policies:</strong> Formulating and implementing effective education policies to ensure inclusivity and address the specific needs of diverse communities.
      </Typography>
    </Container>
  );
}

function SourcesSection() {
  return (
    <>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Sources
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '2.5vh' }}>
        The information presented is based on a combination of research studies, reports, and articles. Some key sources include:

        <ul>
          <li>
            Feierstein, G. M., Salem, P., & Moneer, Z. (2023, October 25). <i>A revolution in education: What Lies ahead for MENA</i>. Middle East Institute. Retrieved from <a href="https://www.mei.edu/publications/revolution-education-what-lies-ahead-mena" target="_blank" rel="noopener noreferrer">https://www.mei.edu/publications/revolution-education-what-lies-ahead-mena</a>
          </li>
          <li>
            Akkari, A. (2004). <i>Education in the Middle East and North Africa: The Current Situation and Future Challenges</i>. International Education Journal, 5(02), 144–153.
          </li>
          <li>
            Abdallah, A. (2022, May 26). <i>Education is not enough to unlock women’s potential in MENA</i>. Wilson Center. Retrieved from <a href="https://www.wilsoncenter.org/blog-post/education-not-enough-unlock-womens-potential-mena" target="_blank" rel="noopener noreferrer">https://www.wilsoncenter.org/blog-post/education-not-enough-unlock-womens-potential-mena</a>
          </li>
          <li>
            Moustafa, N., & Brad Olsen, M. E. (2018, April 25). <i>Education in Africa: Key challenges and solutions for developing human capital</i>. Brookings. Retrieved from <a href="https://www.brookings.edu/events/education-in-africa-key-challenges-and-solutions-for-developing-new-capital/" target="_blank" rel="noopener noreferrer">https://www.brookings.edu/events/education-in-africa-key-challenges-and-solutions-for-developing-new-capital/</a>
          </li>
          <li>
            Chapman, D. W., & Miric, S. L. (2009). <i>Education quality in the Middle East</i>. International Review of Education, 55(4), 311–344. DOI: <a href="https://doi.org/10.1007/s11159-009-9132-5" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s11159-009-9132-5</a>
          </li>
          <li>
            Hall, Stephen, et al. <i>Reimagining Education in Menap.</i> McKinsey &amp; Company, McKinsey &amp; Company, 26 July 2022. Retrieved from: <a href='www.mckinsey.com/industries/education/our-insights/reimagining-education-in-menap' target="_blank" rel="noopener noreferrer">www.mckinsey.com/industries/education/our-insights/reimagining-education-in-menap</a>
          </li>
          <li>
          Education. (n.d.). <i>Education</i> UNICEF Middle East and North Africa. Retrieved from: <a href='https://www.unicef.org/mena/education' target="_blank" rel="noopener noreferrer">https://www.unicef.org/mena/education</a>

          </li>
        </ul>
      </Typography>
    </>
  );
}

function RevealingContent() {
  const [isProblemVisible, setProblemVisibility] = useState(true);
  const [areSolutionsVisible, setSolutionsVisibility] = useState(false);
  const [isChatVisible, setChatVisibility] = useState(false);
  const [areSourcesVisible, setSourcesVisibility] = useState(false);

  function handleProblemButtonClick() {
    setProblemVisibility(true);
    setSolutionsVisibility(false);
    setChatVisibility(false);
    setSourcesVisibility(false);
  }

  function handleSolutionsButtonClick() {
    setSolutionsVisibility(true);
    setProblemVisibility(false);
    setChatVisibility(false);
    setSourcesVisibility(false);
  }

  function handleChatButtonClick() {
    setChatVisibility(true);
    setProblemVisibility(false);
    setSolutionsVisibility(false);
    setSourcesVisibility(false);
  }

  function handleSourcesButtonClick() {
    setSourcesVisibility(true);
    setProblemVisibility(false);
    setSolutionsVisibility(false);
    setChatVisibility(false);
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

          <Button
            variant={areSourcesVisible ? 'contained' : 'outlined'}
            onClick={handleSourcesButtonClick}
          >
            Sources
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
          </Container>
        }
        {areSourcesVisible && <SourcesSection />}
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
