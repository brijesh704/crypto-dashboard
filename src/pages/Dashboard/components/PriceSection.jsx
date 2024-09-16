import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard ";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function PriceSection() {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <HStack
    // boxShadow="outline"
    >
      <CustomCard>
        <Flex
          justify="space-between"
          align="start"
          // boxShadow="outline"
        >
          <Stack
          // boxShadow="lg"
          >
            <HStack color="black.80">
              <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack
              // boxShadow="outline"
              spacing={2}
              align={{
                base: "flex-start",
                sm: "center",
              }}
              flexDir={{
                base: "column",
                sm: "row",
              }}
            >
              <HStack>
                <Text textStyle="h2" fontWeight="medium">
                  22.39401000
                </Text>{" "}
                <HStack fontWeight="medium" color="green.500">
                  <Icon as={BsArrowUpRight} />
                  <Text fontSize="sm" fontWeight="medium">
                    22%
                  </Text>
                </HStack>{" "}
              </HStack>
            </HStack>
          </Stack>
          <HStack mt="10px">
            <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
            <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
          </HStack>
        </Flex>
        <Tabs
          variant="soft-rounded"
          // boxShadow="outline"
        >
          <Flex justify="end">
            <TabList bg="black.5" p="3px">
              {["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab
                  _selected={{ bg: "white" }}
                  key={tab}
                  fontSize="sm"
                  p="6px"
                  borderRadius="4"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            <TabPanels>
              <Image w="100%" src="/graph.svg" mt="3rem" />
              <HStack justify="space-between">
                {timestamps.map((timestamp) => (
                  <Text key={timestamp} fontSize="sm" color="black.80">
                    {timestamp}
                  </Text>
                ))}
              </HStack>
            </TabPanels>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CustomCard>
    </HStack>
  );
}

export default PriceSection;
