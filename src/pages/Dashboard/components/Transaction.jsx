import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { CustomCard } from "../../../Chakra/CustomCard ";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

function Transaction() {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard>
      <Text fontSize="sm" mb="6" color="black.80">
        recent Transaction
      </Text>

      <Stack
        spacing="4"
        //boxShadow="outline"
      >
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            {/*  starting transaction */}
            <Flex
              gap="4"
              //boxShadow="outline"
            >
              {/* for icon */}
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              {/* for amount */}
              <Flex justify="space-between" w="full">
                {" "}
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
}

export default Transaction;
