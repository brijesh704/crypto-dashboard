import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Topnav({ title, onOpen }) {
  return (
    <Box px="4" bg="white" boxShadow="outline">
      <HStack
        maxW="70rem"
        h="16"
        justify="space-between"
        mx="auto"
        boxShadow="lg"
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default Topnav;
