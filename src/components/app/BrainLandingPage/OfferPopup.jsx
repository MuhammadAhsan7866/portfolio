import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
  Box,
  Flex,
  Img,
} from "@chakra-ui/react";

const OfferPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      onOpen();
    }, 15000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW="880px"
          w={"100%"}
          bg="linear-gradient(135deg, #0C1E21 0%, #003640 100%)"
          color="white"
          p={"30px"}
        >
          <Box pos={"relative"}>
            <Box mb="16px">
              <Text color={"white"} mb={"10px"} fontFamily={"Space Grotesk"}>
                Wait! Do you have 28 seconds to join the waiting list ?
              </Text>
              <Text
                color={"white"}
                fontFamily={"Space Grotesk"}
                fontWeight={"600"}
                fontSize={"25px"}
              >
                Win $20 As One Of Our Top 1000 Winners
              </Text>
            </Box>

            <Flex gap={"8px"} flexWrap={"wrap"} mb={"15px"} maxW={"580px"}>
              <Text
                as={"span"}
                bg={"white"}
                py={"2px"}
                px={"12px"}
                fontSize={"18px"}
                fontFamily={"Inter"}
                color={'black'}
                _hover={{bg:'black',color:'white'}}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                cursor={'pointer'}
              >
                UI UX Designing
              </Text>
              <Text
               as={"span"}
               bg={"white"}
               py={"2px"}
               px={"12px"}
               fontSize={"18px"}
               fontFamily={"Inter"}
               color={'black'}
               boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
               _hover={{bg:'black',color:'white'}}
               cursor={'pointer'}
              >
                Web development
              </Text>
              <Text
              as={"span"}
              bg={"white"}
              py={"2px"}
              px={"12px"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              color={'black'}
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              _hover={{bg:'black',color:'white'}}
              cursor={'pointer'}
              >
               SEO Marketing
              </Text>
              <Text
                as={"span"}
                bg={"white"}
                py={"2px"}
                px={"12px"}
                fontSize={"18px"}
                fontFamily={"Inter"}
                color={'black'}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                _hover={{bg:'black',color:'white'}}
                cursor={'pointer'}
              >
                Wordpress Development
              </Text>
              <Text
                as={"span"}
                bg={"white"}
                py={"2px"}
                px={"12px"}
                fontSize={"18px"}
                fontFamily={"Inter"}
                color={'black'}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                _hover={{bg:'black',color:'white'}}
                cursor={'pointer'}
              >
               Reacts js 
              </Text>
              <Text
              as={"span"}
              bg={"white"}
              py={"2px"}
              px={"12px"}
              fontSize={"18px"}
              fontFamily={"Inter"}
              color={'black'}
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              _hover={{bg:'black',color:'white'}}
              cursor={'pointer'}
              >
                UI UX Designing
              </Text>
            </Flex>
            <Img src="/peoples1.webp"></Img>
            <Box
              pos={"absolute"}
              right={"-24%"}
              bottom={"27%"}
              width={"59%"}
              fontSize={"18px"}
              fontFamily={"Inter"}
            >
              <Img src="/invite2.png" w={"60%"}></Img>
            </Box>
            <Box pt={'24px'}>
              <Flex gap={'24px'} justifyContent={'space-between'}>
                <Text maxW={'62%'}>
                  Join our community of over 50,000 leaders in job opportunities
                  and future of online learning experience & HR operations
                </Text>
                <Button
                  bg="white"
                  color="black"
                  _hover={{
                    bg: "black", color:'white',
                  
                  }}
                  py={"18px"}
                  px={"46px"}
                  borderRadius={"50px"}
                >
                  Get in Touch
                </Button>
              </Flex>
            </Box>
            <Img pos={'absolute'} top={'-13px'} right={'-10px'}  onClick={onClose} cursor={'pointer'} src="/close-circle-fill.svg"/>
          </Box>

          {/* <ModalFooter>
            <Button
              bg="linear-gradient(135deg, #0C1E21 0%, #003640 100%)"
              color="white"
              _hover={{
                bg: "linear-gradient(135deg, #003640 0%, #0C1E21 100%)",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OfferPopup;
