import {
  VStack,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

function Portfolio() {
  return (
    <>
      <HStack
        bg="white"
        borderRadius="xl"
        // boxShadow="outline"
        p="6"
        mt="6"
        justify="space-between"
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        spacing={{
          base: 4,
          xl: 0,
        }}
      >
        <HStack
          // boxShadow="lg"
          spacing={{
            base: 0,
            xl: 16,
          }}
          align={{
            base: "flex-start",
            xl: "center",
          }}
          flexDir={{
            base: "column",
            xl: "row",
          }}
        >
          <Stack>
            <HStack colors="black.80">
              <Text fontSize="sm">TotalPortfolio Value</Text>
              <Icon as={CiCircleInfo}></Icon>
            </HStack>
            <Text textStyle="h2">₹ 112,312.24</Text>
          </Stack>
          <Stack>
            <HStack colors="black.80">
              <Text fontSize="sm">WalletBalance</Text>
              <Icon as={CiCircleInfo}></Icon>
            </HStack>
            <HStack>
              <Text textStyle="h2">22.394</Text> <Tag> BTC</Tag>
              <Text textStyle="h2">₹ 1,300.00</Text> <Tag> BTC</Tag>
            </HStack>
          </Stack>
        </HStack>

        <HStack>
          <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
          <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>
      </HStack>
    </>
  );
}

export default Portfolio;
