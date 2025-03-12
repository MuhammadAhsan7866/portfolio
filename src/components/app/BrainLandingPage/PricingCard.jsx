import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    List,
    ListItem,
    Text,
    Tag,
    Container,
  } from "@chakra-ui/react";
  import TitleSection from "./SectionTitle";
  
  // Function to convert PKR to USD (assuming 1 USD = 280 PKR)
  const convertToUSD = (priceInPKR) => (priceInPKR / 280).toFixed(2);
  
  const plans = [
    {
        name: "StartUp",
      
      currencyName: "400$",
      btnName: "Free trial for one month",
      features: [
        { text: "10 Direct Connection", available: true },
        { text: "View Unlimited Profile", available: true },
        { text: "Saved Unlimited Profiles", available: true },
        { text: "National & International", available: false },
        { text: "Horoscope Matching", available: false },
      ],
    },
    {
      name: "premium",
     
      currencyName: "700$",
      btnName: "Upgrade your Plan",
      features: [
        { text: "Unlimited profile views", available: true },
        { text: "Unlimited Direct Connection", available: true },
        { text: "24-hour access", available: true },
        { text: "No restrictions", available: true },
        { text: "Enhanced matching experience", available: true },
      ],
    //   tag: "BEST VALUE",
    },
    {
      name: "Deluxe",
      
      currencyName: "1500$",
      btnName: "Upgrade your Plan",
      features: [
        { text: "50 Direct Connection", available: true },
        { text: "View Unlimited Profile", available: true },
        { text: "Saved Unlimited Profiles", available: true },
        { text: "National & International", available: true },
        { text: "Horoscope Matching", available: true },
      ],
    },
    {
      name: "Enterprice",
      
      currencyName: "3000$",
      btnName: "Upgrade your Plan",
      features: [
        { text: "100 Direct Connection", available: true },
        { text: "View Unlimited Profile", available: true },
        { text: "Saved Unlimited Profiles", available: true },
        { text: "National & International", available: true },
        { text: "Horoscope Matching", available: true },
      ],
    //   tag: "PREMIUM",
    },
  ];
  
  const Pricing = () => {
    return (
      <Box color="white" py={"96px"}>
        <Container p={0} maxW={"1440px"}>
          <TitleSection />
          <Flex
            justify="center"
            gap={4}
            flexWrap={{
              base: "wrap",
              sm: "wrap",
              md: "wrap",
              xxl: "nowrap",
              xxxl: "nowrap",
            }}
          >
            {plans.map((plan, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderColor="rgb(255 255 255 / 7%)"
                borderRadius="20px"
                boxShadow="lg"
                overflow="hidden"
                backdropFilter="blur(0px)"
                bgGradient="linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
                opacity="1"
                p="30px"
                w={{ base: "full", sm: "45%", md: "48%" }}
                position="relative"
                sx={{
                  transition: "all 0.3s",
                  _hover: {
                    boxShadow:
                      "rgba(0, 85, 255, 0.5) 0px 8px 40px 0px, rgba(255, 255, 255, 0) 0px 0px 10px 1px inset, rgba(0, 85, 255, 0.12) 0px 0px 0px 1px",
                  },
                }}
              >
                <Heading
                  as="h2"
                  fontSize={"25px"}
                  my={3}
                  color={"White"}
                  maxW={"fit-content"}
                  fontFamily={"Poppins"}
                >
                  {plan.name}
                </Heading>
                <Flex color={"white"} fontSize={"52px"}>
                  <Text fontWeight="bold" mb={4} fontFamily={"Poppins"}>
                    {plan.currencyName} {plan.price}
                  </Text>
                </Flex>
  
                {plan.tag && (
                  <Tag
                    position="absolute"
                    top={2}
                    right={2}
                    colorScheme="#C1922C"
                    fontSize="xs"
                    fontWeight="bold"
                    bg={"#C1922C"}
                    color={"black"}
                    p={"8px 12px"}
                    borderRadius={"50px"}
                  >
                    {plan.tag}
                  </Tag>
                )}
                <List spacing={2} mb={"25px"}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} marginBottom={"20px"}>
                      <Text
                        as="span"
                        color={feature.available ? "green.500" : "red.500"}
                        textDecoration={
                          feature.available ? "none" : "line-through"
                        }
                      >
                        {/* {feature.available ? "✔️" : "❌"} */}
                      </Text>{" "}
                      {feature.text}
                    </ListItem>
                  ))}
                </List>
  
                <Button
                  sx={{
                    background: "linear-gradient(140deg, #FF6E00, #A629F2)",
                    color: "white",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "150px",
                    cursor: "pointer",
                    height: "42px",
                    boxShadow:
                      "0px 8px 18px -3px rgba(153.99999999999997, 0.9999999999999964, 255, 0.32)",
                    transition: "background 0.3s ease",
                    _hover: {
                      background: "linear-gradient(260deg, #FF4094, #A629F2)",
                    },
                  }}
                  w={"100%"}
                >
                  {plan.btnName}
                </Button>
                <Box
                  bgGradient={
                    "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0, 85, 255) 50%, rgba(0, 85, 255, 0) 100%)"
                  }
                  h={"1px"}
                  w={"170px"}
                  pos={"absolute"}
                  top={0}
                  left={"calc(50.00000000000002% - 170px / 2)"}
                  flex={"none"}
                  zIndex={1}
                ></Box>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default Pricing;
  