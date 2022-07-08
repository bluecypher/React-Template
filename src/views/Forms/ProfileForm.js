import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

// Chakra imports
import {
  Box,
  Flex,
  // Button,
  // FormControl,
  // FormLabel,
  // HStack,
  // Input,
  // Icon,
  // Link,
  // Switch,
  Text,
  Portal,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import EnterpriseProfile from "components/Forms/ProfileForms/EnterpriseProfile.js";
import ProductProfile from "components/Forms/ProfileForms/ProductProfile.js";
import TeamProfile from "components/Forms/ProfileForms/TeamProfile.js";
import Footer from "components/Footer/Footer.js";

function MainProfileForm() {
  const [formpage, setformpage] = useState(0);
  const FormTitles = ["Enterprise Profile", "Product Profile", "Team Profile"];
  const PageDisplay = () => {
    switch (formpage) {
      case 0:
        return <EnterpriseProfile />
      case 1:
        return <ProductProfile />
      case 2:
        return <TeamProfile />
    }
  }

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  const wrapper = React.createRef();
  const navRef = React.useRef();
  return (
    <Box ref={navRef} w='100%'>
      <Portal containerRef={navRef}>
        {/* <AuthNavbar secondary={getActiveNavbar(routes)} logoText='' /> */}
        <AuthNavbar logoText='' />
      </Portal>
      <Box w='100%'>
        <Box ref={wrapper} w='100%'>
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
                // mb='100px'
                mb={{ base: "50px", mt: "100px" }}
                mt={{ base: "50px", md: "100px" }}>
                <Flex
                  zIndex='2'
                  direction='column'
                  w='1000px'
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
                  {/* <Text
                    fontSize='xl'
                    color={textColor}
                    fontWeight='bold'
                    textAlign='center'
                    mb='22px'>
                    Profile Form
                  </Text>
                  <Text
                    fontSize='lg'
                    color='gray.400'
                    fontWeight='bold'
                    textAlign='left'
                    mb='20px'>
                    {FormTitles[formpage]}
                  </Text> */}

                  {/* DISPLAYS COMPONENT OF FORM */}
                  {/* <form>
              {PageDisplay()}
           
            <Flex
                justifyContent='space-between'
            >
                <Button
                    fontSize='13px'
                    variant='dark'
                    fontWeight='bold'
                    // w='48%'
                    w={formpage == 0 ? '0%' : (formpage == FormTitles.length-1 ? '100%' : '48%')}
                    h='45'
                    mb='20px'
                    // disabled={formpage == 0}
                    visibility={formpage == 0 ? 'collapse' : 'visible'}
                    onClick={() => {
                            setformpage((currPage) => currPage-1)
                        }}
                    >
                    { formpage==0? 'Prev' : 'Prev: '  }
                    {FormTitles[formpage-1]}
                </Button>
                <Button
                    fontSize='13px'
                    variant='dark'
                    fontWeight='bold'
                    // w='48%'
                    w={formpage == FormTitles.length-1 ? '0%' : (formpage == 0 ? '100%' : '48%')}
                    h='45'
                    mb='20px'
                    visibility={formpage == FormTitles.length-1 ? 'collapse' : 'visible'}
                    // disabled={formpage == FormTitles.length-1}
                    onClick={() => {
                            setformpage((currPage) => currPage+1)
                        }}
                    >
                    Next: {FormTitles[formpage+1]}
                </Button>
            </Flex>
            <Flex
              justifyContent="center"
            >
              <Button
                type="submit"
                justifyContent="center"
                w="100%"
                visibility={formpage == FormTitles.length-1 ? 'visible' : 'collapse'}
              >
                Submit
              </Button>
            </Flex>
            
          </form> */}
                  <Outlet />
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
        </Box>
      </Box>
      <Box px='24px' mx='auto' width='1044px' maxW='100%' mt='60px'>
        <Footer />
      </Box>
    </Box>
  );
}

export default MainProfileForm;
