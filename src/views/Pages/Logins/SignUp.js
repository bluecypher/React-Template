// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";

function showOTPform() {
  let form = document.getElementById("SignUpOTPForm")
  form.style.visibility="visible"
}

function SignUp() {
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const textColor = useColorModeValue("gray.700", "white");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        maxH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        maxW={{ md: "calc(100vw - 50px)" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
        borderRadius={{ base: "0px", md: "20px" }}>
        <Box w='100vw' h='100vh' bg='blue.500' opacity='0.8'></Box>
      </Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='125px'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome to SAHAYAKS!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "333px" }}>
          {/* Use these awesome forms to login or create new account in your project
          for free. */}
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
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
            Sign Up
          </Text>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='left'
            mb='20px'>
            Please enter your Mobile Number
          </Text>
          <FormControl type="number">
            <form action="" id="SignUpForm">  
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='tel'
                name="MobNo"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder='Mobile Number'
                mb='24px'
                size='lg'
                required
              />
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px' 
                type="submit"
                onClick={showOTPform}>
                NEXT
              </Button>
            </form>
          </FormControl>
          <FormControl >
            <form id="SignUpOTPForm" style={{visibility:"hidden"}}>

              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                name="opt"
                placeholder='OTP'
                mb='24px'
                size='lg'
                required
              />
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'>
                SIGN UP
              </Button>
            </form>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <Link
                color={titleColor}
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'>
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
