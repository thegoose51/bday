import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Surprise from './Surprise';

export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Surprise />
      </Box>
    </Container>
  );
}