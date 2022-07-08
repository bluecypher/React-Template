import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function validateOTP(event){
  var otp = event.target.value
  // if(otp.length == 6)
    if (otp > parseInt("000000",10) && otp < parseInt("999999",10) ){
      console.log("ok")
    }
    else{
      console.log("Enter a Numeric PIN")
    }
}
function confirmOTP(event){
  var otp = document.getElementById("usrPin").value
  var cnfotp = event.target.value
  // console.log(otp, cnfotp)
  if(cnfotp == otp){
    console.log("PIN confirmed: ", otp, cnfotp)
  }
  else{
    console.log("PIN doesn't match")
  }
}

function SetPin() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        minH={{ md: "1000px" }}
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ md: "0px" }}>
        <Flex
          w='100%'
          h='100%'
          alignItems='center'
          justifyContent='center'
          mb='60px'
          mt={{ base: "50px", md: "20px" }}>
          <Flex
            zIndex='2'
            direction='column'
            w='445px'
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}>
            <Text
              fontSize='xl'
              color={textColor}
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              Set Pin
            </Text>
            <Text
              fontSize='lg'
              color='gray.400'
              fontWeight='bold'
              textAlign='left'
              mb='20px'>
              Create a six digit PIN of your choice.
            </Text>
            <FormControl>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                name="usrPin"
                id="usrPin"
                maxLength="6"
                placeholder='Enter PIN'
                mb='24px'
                size='lg'
                onChange={validateOTP}
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                maxLength="6"
                name="cnfPin"
                id="cnfPin"
                placeholder='Confirm PIN'
                mb='24px'
                size='lg'
                onChange={confirmOTP}
              />
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'>
                CREATE PIN
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          overflowX='hidden'
          h='100%'
          w='100%'
          left='0px'
          position='absolute'
          bgImage={signInImage}>
          <Box
            w='100%'
            h='100%'
            bgSize='cover'
            bg='blue.500'
            opacity='0.8'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SetPin;
