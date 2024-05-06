import { Box, Flex, Button, Text, Image, VStack, HStack, Container } from '@chakra-ui/react';
import { FaInfoCircle, FaHome } from 'react-icons/fa';

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        <Flex bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
          <HStack spacing={8}>
            <Button leftIcon={<FaHome />} colorScheme="teal" variant="solid">
              Home
            </Button>
            <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
              Rules
            </Button>
          </HStack>
          <Text fontSize="xl">Texas Hold'em Poker</Text>
          <Text>Contact Us</Text>
        </Flex>
        <Flex flexGrow={1} p={4} direction="column" justifyContent="center" alignItems="center">
          <VStack spacing={4}>
            <HStack spacing={4}>
              <Card value="AH" />
              <Card value="10C" />
              <Card value="KD" />
              <Card value="7S" />
              <Card value="2D" />
            </HStack>
            <HStack spacing={4}>
              <Player name="Player 1" chips={1500} />
              <Player name="Player 2" chips={3000} />
            </HStack>
            <HStack spacing={4}>
              <Button colorScheme="blue">Fold</Button>
              <Button colorScheme="green">Call</Button>
              <Button colorScheme="red">Raise</Button>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

const Card = ({ value }) => (
  <Box w="60px" h="90px" bg="white" borderRadius="md" boxShadow="md" display="flex" alignItems="center" justifyContent="center">
    <Text fontSize="lg" fontWeight="bold">{value}</Text>
  </Box>
);

const Player = ({ name, chips }) => (
  <VStack>
    <Text fontSize="md" fontWeight="bold">{name}</Text>
    <Text fontSize="sm">{chips} Chips</Text>
  </VStack>
);

export default Index;