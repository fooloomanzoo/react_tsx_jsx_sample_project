import React from 'react';
import styled from 'styled-components';

import Button from '../shared/Button';
import Box from '../shared/Box';

const Page = styled.section`
  display: flex;
  flex-diraction: column;
  align-items: center;
  justifiy-content: center;

  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.background.special};
  padding: ${({ theme }) => theme.spacing.medium}px;
`;

const Home = () => {
  return (
    <Page>
      <Box>
        <Button iconSize={24}>Here we go smaller!</Button>
      </Box>
      <Box>
        <Button iconSize={16}>Here we go even smaller!</Button>
      </Box>
    </Page>
  );
};

export default Home;
