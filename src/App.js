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

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        The MENA region has faced numerous challenges in ensuring access to quality education for all its residents. Nearly 
        half the population of the region is under the age of 24. One in every five children in the region is out of school, 
        and the literacy rate is the lowest in the world <i>(Unicef)</i>. These challenges have had profound effects on the development and 
        well-being of the region's youth, impacting their opportunities for personal growth and future success.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Conflict and Political Instability
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Ongoing conflicts and political instability in several countries have disrupted educational systems,
        leaving a significant number of children out of school. Armed conflicts in Syria, Iraq, and Yemen have left 
        over 14 million students without any education <i>(Bonatto)</i>. This disruption not only hampers the immediate
        educational prospects of the affected children but also contributes to a cycle of poverty and
        social instability.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Insufficient Infrastructure and Internet Connectivity
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Many areas in the MENA region suffer from a lack of educational infrastructure, including schools, libraries,
        and technology. This insufficient infrastructure makes it challenging for students, especially those in
        remote areas, to access quality education. The digital divide further exacerbates this issue, with the widespread 
        lack of digital literacy limiting opportunities for those without access to modern educational tools <i>(Hall)</i>.
        Only 280 million people in the region, 45% of the population, are connected to mobile internet. For countries like Sudan and Yemen, 
        internet penetration is lower than 30%. Internet connectivity also remains a challenge in rural and conflict-hit areas, as well as in urban areas <i>(Bonatto)</i>.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Socioeconomic Disparities
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
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
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
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

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Implementing effective solutions is crucial to overcome the challenges faced by the education sector in the MENA region.
        Addressing these issues requires a comprehensive approach that involves various stakeholders, including governments,
        NGOs, and communities.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        The Role of Technology
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Technology is a crucial catalyst for addressing education challenges in the MENA region. Existing platforms, combining instruction, 
        assessment, and real-time feedback, offer innovative solutions. Ministries of education in the MENAP region have actively utilized 
        platforms like MS Teams, Edraak, Telmid TICE, and Mzeed to ensure continuity in learning during the pandemic. 
        Focusing on teacher-centric technologies, such as data projection, alongside student-centric approaches, 
        like providing computers with internet access, has proven most effective. This blended approach enhances 
        engagement and empowers students to work independently. Improving teacher-focused technologies is essential, 
        with a 75 percent increase in digital tools anticipated to meet future personalized learning needs <i>(Hall)</i>. 
        Beyond academics, adopting a whole-child education approach is emphasized. A motivated mindset is identified 
        as a significant predictor of success, surpassing an orientation to subject matter. The 2018 PISA survey highlights 
        dimensions like motivation, instrumental motivation, a sense of belonging, and test anxiety as crucial components contributing 
        to a holistic educational experience <i>(Hall)</i>.
      </Typography>


      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Investing in Education Infrastructure
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Womens' empowerment is key to education in the MENA region. The solution revolves around strategic educational interventions, 
        with a particular focus on initiatives like Education For Employment. These programs aim to equip women with crucial skills, offering pathways for 
        self-employment in regions facing challenges such as limited job opportunities. Education This not only addresses 
        immediate skills gaps but also challenges societal norms, fostering a supportive environment for women. By providing targeted education 
        and training, these initiatives contribute to breaking down barriers to women's participation in the workforce <i>(Abdallah)</i>.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Promoting Inclusive Policies
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        Governments and policymakers can play a crucial role in promoting inclusive policies that address socioeconomic
        disparities. This includes implementing financial aid programs, scholarships, and initiatives to support families
        with lower incomes. Additionally, promoting equal opportunities for girls and women in education is vital for
        achieving sustainable development.
      </Typography>

      <Typography variant="h5" fontWeight='bold' gutterBottom>
        Aligning Education with Labor Market Needs
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
        To reduce the mismatch between skills and labor market requirements, there is a need for closer collaboration
        between educational institutions and industries. Vocational training programs, internships, and apprenticeships
        can provide students with practical skills and work experience, better preparing them for the workforce.
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

      <Typography variant="body1" style={{ marginBottom: '2vh', lineHeight: '2', fontSize: '20px' }}>
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
