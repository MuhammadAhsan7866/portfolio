import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  VStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Switch,
  Flex,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    image: "/Macbook-Pro.jpg",
    techStack: ["React", "Next.js", "Solidity", "Ethers.js"],
    description:
      "A decentralized NFT marketplace with staking and trading features.",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "3D Game Engine",
    image: "/Macbook-Pro.jpg",
    techStack: ["Unity", "C#", "Physics Engine"],
    description:
      "A powerful 3D game engine built for high-performance rendering.",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "3D Game Engine",
    image: "/Macbook-Pro.jpg",
    techStack: ["Unity", "C#", "Physics Engine"],
    description:
      "A powerful 3D game engine built for high-performance rendering.",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "3D Game Engine",
    image: "/Macbook-Pro.jpg",
    techStack: ["Unity", "C#", "Physics Engine"],
    description:
      "A powerful 3D game engine built for high-performance rendering.",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "3D Game Engine",
    image: "/Macbook-Pro.jpg",
    techStack: ["Unity", "C#", "Physics Engine"],
    description:
      "A powerful 3D game engine built for high-performance rendering.",
    liveDemo: "#",
  },
];

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isGrid, setIsGrid] = useState(true);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Container maxWidth={'1320px'}>
 <Box p={8}>
      <Flex justify="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Featured Projects
        </Text>
        <Flex align="center">
          <Text mr={2}>Grid</Text>
          <Switch isChecked={isGrid} onChange={() => setIsGrid(!isGrid)} />
          <Text ml={2}>List</Text>
        </Flex>
      </Flex>

      <SimpleGrid columns={isGrid ? [1, 2, 3] : 1} spacing={6}>
        {projects.map((project) => (
          <motion.div key={project.id} whileHover={{ scale: 1.05 }}>
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              cursor="pointer"
              onClick={() => openModal(project)}
              position="relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                w="full"
                h={isGrid ? "200px" : "150px"}
                objectFit="cover"
              />
              <VStack
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                bg="rgba(0, 0, 0, 0.7)"
                opacity={0}
                transition="0.3s"
                _hover={{ opacity: 1 }}
                justify="center"
                color="white"
              >
                {project.techStack.map((tech) => (
                  <Text key={tech} fontSize="sm">
                    {tech}
                  </Text>
                ))}
              </VStack>
              <Text p={2} fontSize="lg" fontWeight="bold" color={'white'}>
                {project.title}
              </Text>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={selectedProject?.image}
              alt={selectedProject?.title}
              w="full"
              borderRadius="md"
              mb={4}
            />
            <Text>{selectedProject?.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              as="a"
              href={selectedProject?.liveDemo}
              target="_blank"
              colorScheme="blue"
              mr={3}
            >
              Live Demo
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </Container>
   
  );
}
