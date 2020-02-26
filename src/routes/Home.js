import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NAVIGATIONS = [
  'home',
  'about',
  'manifesto',
  'writing',
  'contact',
  'privacy policy',
  'a ryan + ryan prod',
];

const PROJECTS = [
  "NETFLIX, BUT IT'S A DATING APP",
  'SPOTIFY OPPOSITE RECOMMENDATIONS',
  'FACEBOOK BEFORE THE BAD SHIT',
  'HOW BAD IS CORONAVIRUS, REALLY?',
  'MAKE MY PAPERS LONGER',
  'EDIT WIKIPEDIA TO SAY WHATEVER I WANT',
  'GET A STRANGER TO CALL ME AND WAKE ME UP',
];

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  grid-template-rows: 15% 1fr 15%;
  width: 100vw;
  height: 100vh;
`;
const StyledHeader = styled.header`
  text-align: center;
  grid-column: 2;
  grid-row: 1;
`;

const StyledHGroup = styled.hgroup`
  position: relative;
`;

const FooterList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0px;
  display: inline;
`;

const ProjectList = styled.ul`
  width: 100%;
  list-style: none;
`;

const FooterListItem = styled.li`
  padding: 10px;
  margin: 25px;
  color: black;
  text-decoration: none;
  display: inline;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectListItem = styled.ul`
  padding: 10px;
  margin: 25px;
  color: black;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const FooterWrapper = styled.div`
  grid-row: 3;
  grid-column: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const navigation = name => (
  <StyledLink key={`names-${name}`} to={`/${name}`}>
    <FooterListItem>{name}</FooterListItem>
  </StyledLink>
);

const project = name => (
  <StyledLink key={`names-${name}`} to={`/${name}`}>
    <ProjectListItem>{name}</ProjectListItem>
  </StyledLink>
);

function Home() {
  return (
    <AppLayout>
      <StyledHeader>
        <StyledHGroup>
          <h1>panoticon</h1>
          <p>{new Date().toLocaleString()}</p>
        </StyledHGroup>
      </StyledHeader>
      <ProjectWrapper>
        <ProjectList>{PROJECTS.map(p => project(p))}</ProjectList>
      </ProjectWrapper>
      <FooterWrapper>
        <FooterList>{NAVIGATIONS.map(n => navigation(n))}</FooterList>
      </FooterWrapper>
    </AppLayout>
  );
}

export default Home;
