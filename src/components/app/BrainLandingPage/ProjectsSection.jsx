import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ProjectsSection = () => {
  const RelatedProjects = [
    {
      heading: "100M Delivered Successful Projects",
      Description:
        "Elevating Success Through a Track Record of Successful Projects.",
    },
    {
      heading: "10+ Years of Mastery and Expertise",
      Description:
        "Over a decade of proven expertise, shaping quality with every project.",
    },
    {
      heading: "25+ Strong Team Members",
      Description:
        "Fueled by a vibrant team of experienced professionals, driving success.",
    },
    {
      heading: "Thriving with 100+ Happy Clients",
      Description: "Enriching Journeys with Our Satisfied Clients",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  return (
    <>
      <Box>
        <Box
          display={{ base: "none", sm: "block" }}
          h="1px"
          bg="#E4E4E4"
          w="100%"
        ></Box>
        <Box>
          <Grid
            mt="30px"
            px={{ base: "70px", md: "100px" }}
            mb="30px"
            gap={{base:'51px',sm:'51px',md:'51px',lg:'51px',xxl:'98px',xxxl:'98px'}}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            w="100%"
            position={"relative"}
          >
            <Box
              display={{ base: "block", sm: "none" }}
              position={"absolute"}
              top="0px"
              left="43px"
              h="659px"
              bg="#E4E4E4"
              w="1px"
            ></Box>
            {RelatedProjects?.map((product, index) => (
              <Box
                cursor={"pointer"}
                key={index}
                position="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Box
                  position="absolute"
                  top={{ base: "-8px", sm: "-46px" }}
                  left={{ base: "-42px", sm: "0px" }}
                  borderRadius="50%"
                  color="white"
                  h="30px"
                  w="30px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index === hoveredIndex ? (
                    <Image src="/secondimg.svg" alt="Second Image" />
                  ) : (
                    <Image src="/firstimg.svg" alt="First Image" />
                  )}
                </Box>
                <Text
                  fontWeight="500"
                  fontFamily={'Space Grotesk'}
                  fontSize={{
                    base: "18px",
                    md: "18px",
                    lg: "20px",
                    xl: "22px",
                  }}
                  lineHeight="150%"
                  sx={
                    index === hoveredIndex
                      ? {
                          background:
                            "linear-gradient(to right, #E97522 0%, #1EA3B1 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : {}
                  }
                  color={index === hoveredIndex ? "transparent" : "#000"}
                >
                  {product.heading}
                </Text>
                <Text
                mt={'17px'}
                  fontWeight="400"
                  fontFamily={'Inter'}
                  lineHeight='30px'
                  fontSize={{
                    base: "12px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  }}
                 
                  color="#7B7A7A"
                >
                  {product.Description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
