import { ButtonGroup, Flex, IconButton, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC<{}> = () => {
  return (
    <Flex
      w="100%"
      as="footer"
      role="contentinfo"
      py={{ base: '6', md: '12' }}
      borderTop="1px solid black"
      justifyContent="center"
      backgroundColor="white"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        rowGap="15px    "
        flexDirection="column"
      >
        <Flex justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/FarhanRafid97"
              target="_blank"
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
