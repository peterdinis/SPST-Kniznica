import React from 'react';
import { CircularProgress, Box, Text } from '@chakra-ui/react';

function CircularProgressWithLabel(props: { value: number}) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        value={props.value}
        size="120px"
        color="teal.500"
        thickness="8px"
      />
      <Box
        top="0"
        left="0"
        bottom="0"
        right="0"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="sm" color="gray.500">
          {`${Math.round(props.value)}%`}
        </Text>
      </Box>
    </Box>
  );
}

export default function FallbackLoader() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}