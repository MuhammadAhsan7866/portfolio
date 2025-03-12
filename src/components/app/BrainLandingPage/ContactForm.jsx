import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
  Image,
  Text,
  Heading,
  Img,
} from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending the data to your backend server
    // For now, let's just display the form data in a toast message
    toast({
      title: "Form Submitted",
      description: JSON.stringify(formData, null, 2),
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset the form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        xxl: "row",
        xxxl: "row",
      }}
      gap={{ base: "30px", sm: "30px", md: "30px", lg: "40px" }}
    >
      <Box
        width={{ xl: "50%", lg: "50%", base: "100%" }}
        mt={{ md: "0px", sm: "40px", base: "25px" }}
      >
        <Flex gap={"8px"} alignItems="center" marginBottom={"25px"}>
          <Text color={"#FF1415"} fontSize={"16px"} fontWeight={"700"}>
            Lets Talk
          </Text>
        </Flex>
        <Heading
          as={"h2"}
          fontSize={{ xl: "64px", lg: "42px", base: "42px", md: "42px" }}
          lineHeight={{ xl: "75px", base: "36px", md: "53px" }}
          fontWeight={"900"}
          letterSpacing={"-2%"}
          color={"white"}
        >
          Get in Touch!
        </Heading>
        <Text
          fontSize={{ xl: "17px", lg: "17px", base: "14px" }}
          lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
          fontWeight={"500"}
          color={"#DADADA"}
        >
          Share your project visions and lets sculpt them into reality together.
          From concept to creation, lets shape the future one idea at a time.
        </Text>
        <Box mt={"30px"}>
          <Flex gap={"25px"}>
            <Img src="/rgbph.png" />
            <Box>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"17px"}
                color={"white"}
              >
                Mail Us 24/7
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                color={"white"}
              >
                ceosparkwave@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex gap={"25px"} mt={"24px"}>
            <Img src="/rgbmail.png" />
            <Box>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"17px"}
                color={"white"}
              >
                For Urgent Help
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                color={"white"}
              >
                +92 315 479 5801
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        borderWidth="1px"
        borderColor="rgb(255 255 255 / 7%)"
        borderRadius="20px"
        boxShadow="lg"
        overflow="hidden"
        backdropFilter="blur(0px)"
        bgGradient="linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
        p={"30px"}
      >
        <form onSubmit={handleSubmit}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Flex direction="column" flex="1" mr={{ md: 4 }}>
              <FormControl>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"white"}
                >
                  First Name
                </FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"white"}
                >
                  Phone Number
                </FormLabel>
                <Input
                  bg={"white"}
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
            <Flex direction="column" flex="1" ml={{ md: 4 }}>
              <FormControl>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"white"}
                >
                  Last Name
                </FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"white"}
                >
                  Email Adress
                </FormLabel>
                <Input
                  bg={"white"}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
          </Flex>
          <FormControl mt={4}>
            <FormLabel
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"30px"}
              color={"white"}
            >
             Let me know your Project Details 
            </FormLabel>
            <Textarea
              bg={"white"}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            sx={{
              background: "linear-gradient(140deg, #FF6E00, #A629F2)",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "150px",
              cursor: "pointer",
              height: "52px",
              boxShadow:
                "0px 8px 18px -3px rgba(153.99999999999997, 0.9999999999999964, 255, 0.32)",
              transition: "background 0.3s ease",
              _hover: {
                background: "linear-gradient(260deg, #FF4094, #A629F2)",
              },
            }}
            mt={"25px"}
            w={"100%"}
          >
            <Image src="sms.svg" alt="icon" />
            Book a Free Consultation
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
