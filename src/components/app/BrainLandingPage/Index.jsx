import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import BrainTreeAbout from "./BrainAbout";
import BrainTreeServices from "./BrainServices";
import TwoColumnLayout from "./Technologies";
import SeoLandingPageBanner from "./Banner";
import ServiceCards from "./Services";
import Pricing from "./PricingCard";
import ContactForm from "./ContactForm";
import SliderComponent from "./SliderComponent";
import Portfolio from "./FeatureProject";
import TestimonialSlider from "./Testimonial";

const BrainIndex = () => {
  return (
    <>
      <Box maxW={"100%"} w="100%" mx="auto" position={"relative"}>
        <SeoLandingPageBanner />
        {/* <Box>
          <ServiceCards />
        </Box> */}
        <Box>
          <BrainTreeAbout />
        </Box>
        <Box
          pb={{
            base: "30px",
            sm: "30px",
            md: "40px",
            lg: "40px",
            xl: "60px",
            xxl: "80px",
            xxxl: "100px",
          }}
        >
          <BrainTreeServices />
        </Box>

        {/* <TwoColumnLayout /> */}
          {/* <Portfolio/> */}
          <Box pt={'70px'} pb={'30px'}>
            <TestimonialSlider/>
          </Box>
        <Box>
          <Pricing />
        </Box>
        <Box>
          <Box py={"100px"}>
            {/* <Box pl={{ base: "0px", md: "100px" }}>
              <SliderComponent/>
              
            </Box> */}

            <Box
              maxW={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "1240px",
                xl: "1240px",
                xxl: "1240px",
                xxxl: "1440px",
              }}
              margin={"auto"}
              borderRadius={"24px"}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BrainIndex;
