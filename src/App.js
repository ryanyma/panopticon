import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

const NAVIGATION = [
  'about',
  'manifesto',
  'writing',
  'contact',
  'privacy policy',
  'a ryan + ryan prod',
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
`;

const paddingLeft = 'padding-left: 10px';

const SideBarListItem = styled.li`
  padding: 2px;
  text-decoration: none;
  ${paddingLeft};
  &:hover {
    background: #3e313c;
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
    <SideBarListItem># {name}</SideBarListItem>
  </StyledLink>
);

function App() {
  return (
    <AppLayout>
      <StyledHeader>
        <StyledHGroup>
          <h1>panoticon</h1>
          <p>{new Date().toLocaleString()}</p>
        </StyledHGroup>
      </StyledHeader>
      {/* <ProjectWrapper>
        <p>yo</p>
      </ProjectWrapper> */}
      <FooterWrapper>
        <FooterList>{NAVIGATION.map(n => navigation(n))}</FooterList>
      </FooterWrapper>
    </AppLayout>
  );
}

export default App;
