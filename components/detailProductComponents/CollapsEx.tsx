import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';

function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Container borderBottom="1px solid white" padding="10px ">
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="16px">Deskription</Text>
          <Button
            fontSize="14px"
            colorScheme="facebook"
            _focus={{ border: 'none' }}
            onClick={onToggle}
          >
            {isOpen ? 'Show Less' : 'Show More'}
          </Button>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="10px"
            color="white"
            mt="4"
            fontSize="16px"
            bg="whiteAlpha.400"
            rounded="md"
            shadow="md"
            overflow="scroll"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo eligendi ex quibusdam odio unde maiores, tempora officiis
            reiciendis at sequi autem eveniet architecto fuga tenetur quasi
            expedita modi deleniti.
          </Box>
        </Collapse>
      </Container>
    </>
  );
}

export default CollapseEx;
