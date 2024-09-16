import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

function Sidenav() {
  const location = useLocation();
  const NavLink = [
    {
      name: "Dashboard",
      Icon: MdDashboard,
      Link: "/",
    },
    {
      name: "Transactions",
      Icon: GrTransaction,
      Link: "/transactions",
    },
  ];

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  return (
    <Stack
      bg="white"
      boxShadow={{
        base: "none",
        lg: "none",
      }}
      width={{
        base: "full",
        lg: "256px",
      }}
      height="100vh"
    >
      <Box>
        <Heading
          fontSize="20px"
          textColor="#5F00D9"
          textAlign="center"
          marginRight="29px"
          mt="54px"
        >
          @Happy to help
        </Heading>

        <Box mt="24px" marginLeft="12px" marginRight="12px">
          {NavLink.map((nav) => (
            <Link key={nav.name} to={nav.Link}>
              <HStack
                bg={isActiveLink(nav.Link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.Link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                mt="10px"
              >
                <Icon as={nav.Icon} />
                <Text> {nav.name}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
}

export default Sidenav;
