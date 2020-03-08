import React from 'react';
import styled from 'styled-components';
import { Redirect, Link, useLocation } from 'react-router-dom';
import { PROJECTS, NAVIGATIONS } from '../constants';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  grid-template-rows: 18% 1fr 15%;
  width: 100vw;
  height: 100vh;
`;
const StyledHeader = styled.header`
  text-align: center;
  grid-column: 2;
  grid-row: 1;
  h1 {
    font-family: 'IBM Plex Serif', serif;
    font-weight: 600;
    font-size: 2.5rem;
  }
  margin-bottom: 24px;
  margin-top: auto;
`;

const StyledHGroup = styled.hgroup`
  position: relative;
`;

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  margin: 0 auto;
  max-width: 100%;
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  position: relative;
  text-align: center;
`;

const ProjectList = styled.ul`
  width: 100%;
  list-style: none;
`;

const ProjectListItem = styled.ul`
  font-size: 2rem;
  color: black;
  padding: 5px;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterWrapper = styled.div`
  grid-row: 3;
  grid-column: 2;
  margin-top: 36px;
`;

const FooterList = styled.ul`
  width: 75%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

const FooterListItem = styled.li`
  color: black;
  text-decoration: none;
  padding-inline-start: 0px;
  &:hover {
    text-decoration: underline;
  }
  margin: 0px 10px 0px 10px;
`;

const BoldFooterListItem = styled(FooterListItem)`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  text-decoration: none;
`;

const navigation = (n, pageUrl) => {
  if (pageUrl.slice(1) === n.url) {
    return (
      <StyledLink key={`${n.name}`} to={`/${n.url}`}>
        <BoldFooterListItem>{n.name}</BoldFooterListItem>
      </StyledLink>
    );
  }
  return (
    <StyledLink key={`${n.name}`} to={`/${n.url}`}>
      <FooterListItem>{n.name}</FooterListItem>
    </StyledLink>
  );
};

const project = p => (
  <StyledExternalLink href={`${p.url}`}>
    <ProjectListItem>{p.name}</ProjectListItem>
  </StyledExternalLink>
);

function Home() {
  const locationObj = useLocation();
  const pageUrl = locationObj.pathname;

  return (
    <AppLayout>
      <StyledHeader>
        <StyledHGroup>
          <h1>panopticon</h1>
          <p>{new Date().toLocaleString()}</p>
        </StyledHGroup>
      </StyledHeader>
      {pageUrl === '/' || pageUrl === '/home' ? (
        <Wrapper>
          <ProjectList>{PROJECTS.map(p => project(p))}</ProjectList>
        </Wrapper>
      ) : null}
      {pageUrl === '/about' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      {pageUrl === '/manifesto' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      {pageUrl === '/writing' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      {pageUrl === '/contact' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      {pageUrl === '/privacy+policy' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      {pageUrl === '/production' ? (
        <Wrapper>
          <p> sup bru</p>
        </Wrapper>
      ) : null}
      <FooterWrapper>
        <FooterList>{NAVIGATIONS.map(n => navigation(n, pageUrl))}</FooterList>
      </FooterWrapper>
    </AppLayout>
  );
}

export default Home;
