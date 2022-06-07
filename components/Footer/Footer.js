import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      w="100%"
      as="footer"
      role="contentinfo"
      py={{ base: '6', md: '12' }}
      borderTop="1px solid black"
      justifyContent="center"
    >
      <Flex
        spacing={{ base: '4', md: '5' }}
        justifyContent="center"
        alignItems="center"
        rowGap="15px    "
        flexDirection="column"
      >
        <Image
          src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true"
          width="380px"
          alt="chakra-ui image"
        />
        <Flex justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Flex>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
        <Text>Farhan Rafid Syauqi</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
