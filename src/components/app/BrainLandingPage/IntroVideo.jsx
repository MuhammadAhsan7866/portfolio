import React from 'react';
import { Box, AspectRatio, Flex, Text } from '@chakra-ui/react';

const VideoSection = () => {
  return (
    <Flex justifyContent="center" alignItems="center" padding="20px">
      <Box
        boxShadow="xl"
        borderRadius="md"
        overflow="hidden"
        maxWidth={{ base: "100%", sm: "100%", md: "100%",lg:'100%',xxl:'70%' }}
        width="100%"
      >
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          />
        </AspectRatio>
        
      </Box>
    </Flex>
  );
};

export default VideoSection;
