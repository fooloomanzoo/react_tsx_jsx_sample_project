import React from 'react';
import styled from 'styled-components';

import Button from '../shared/Button';
import Box from '../shared/Box';

const Page = styled.section`
  display: flex;
  flex-diraction: column;
  align-items: center;
  justifiy-content: center;

  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.background.primary};
  padding: ${({ theme }) => theme.spacing.large}px;
`;

const Home = () => (
  <Page>
    <Box>
      <Button>Here we go!</Button>
    </Box>
    <Box>
      <Button>Here we go again!</Button>
    </Box>
  </Page>
);

export default Home;
