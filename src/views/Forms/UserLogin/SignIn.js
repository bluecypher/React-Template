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
function SignIn() {
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
              Sign In
            </Text>
            <FormControl onSubmit="">
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='tel'
                name="MobNo"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder='Enter your Mobile Number'
                mb='24px'
                size='lg'
                required
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='password'
                name="pin"
                placeholder='Enter PIN'
                maxLength="6"
                mb='24px'
                size='lg'
                required
              />
              <FormControl display='flex' alignItems='center' mb='24px'>
                <Switch id='remember-login' colorScheme='blue' me='10px' />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'
                type="submit">
                SIGN IN
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

export default SignIn;