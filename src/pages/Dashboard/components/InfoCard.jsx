import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard ";
import { Stack, Tag, Text } from "@chakra-ui/react";

function InfoCard({ imgUrl, text, tagText, inverted }) {
  return (
    <>
      <CustomCard
        bgColor={inverted ? "p.purple" : "white"}
        bgImage={imgUrl}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Tag
          color={inverted ? "p.purple" : "white"}
          bg={inverted ? "white" : "p.purple"}
          borderRadius="full"
        >
          {tagText}
        </Tag>

        <Text fontSize="h6" mt="4">
          {text}
        </Text>
      </CustomCard>
    </>
  );
}

export default InfoCard;
