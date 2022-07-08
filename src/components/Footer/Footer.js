/*eslint-disable*/
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
        <Text
          color='blue.400'
          >
          {"Sahayaks "}
        </Text>
      <Text
        color='gray.400'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()}{"  "}
        
        
        
        
      </Text>
      {/* <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='gray.400' href='https://www.creative-tim.com'>
            {"Creative Tim"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='gray.400' href='https://www.simmmple.com'>
            {"Simmmple"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            color='gray.400'

            href='https://sahayaks.com'>
            {"Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='gray.400'
            href='https://sahayaks.com'>
            {"License"}
          </Link>
        </ListItem>
      </List> */}
    </Flex>
  );
}
