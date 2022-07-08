import React from "react";
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FormikProvider, useFormik, Form } from 'formik';
// Chakra imports
import {
  Box,
  Flex,
  Button,
  // FormControl,
  // FormErrorMessage,
  // FormLabel,
  // AlertIcon,
  // Alert,
  // HStack,
  Input,
  // Icon,
  Link,
  // Switch,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
function SignIn() {
  const navigate = useNavigate();
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  const formik = useFormik({
    initialValues: {
      number: '',
      pin: ''
    },
    validationSchema: Yup.object().shape({
      number: Yup.string().max(10).required('Number is required'),
      pin: Yup.string().max(6).required('PIN is required')

    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        setStatus({ success: false });
        setSubmitting(false);
        console.log('click');
        navigate('/profile/enterprise');
      } catch (err) {
        console.error(err);
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    }

  });

  const { touched, errors, handleBlur, handleChange, isSubmitting, handleSubmit, values, getFieldProps } = formik;

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        minH={{ md: "500px" }}
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
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                <Input
                  variant='auth'
                  fontSize='sm'
                  value={values.number}
                  maxLength={10}
                  onChange={handleChange}
                  ms='4px'
                  type='tel'
                  name="number"
                  pattern="[0-9]{10}"

                  placeholder='Enter your Mobile Number'
                  my='12px'
                  size='lg'
                  error={Boolean(touched.number && errors.number)}
                  required
                />
                {touched.number && errors.number && (
                  
                    <Text color="red">
                      {errors.number}
                    </Text>
                    
                 
                )}
                <Input
                  variant='auth'
                  fontSize='sm'
                  value={values.pin}
                  onChange={handleChange}
                  ms='4px'
                  type='password'
                  name="pin"
                  placeholder='Enter PIN'
                  maxLength="6"
                  my='12px'
                  size='lg'
                  error={errors.pin}
                  required
                />
                {touched.pin && errors.pin && (
                  <Text color="red">
                    {errors.pin}
                  </Text>
                )}
                {/* <FormControl display='flex' alignItems='center' mb='24px'>
                  <Switch id='remember-login' colorScheme='blue' me='10px' />
                  <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                    Remember me
                  </FormLabel>
                </FormControl> */}
                <Button
                  fontSize='16px'
                  variant='dark'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  my='12px'
                  type="submit">
                  SIGN IN
                </Button>
              </Form>
              <Stack alignItems="flex-end">
              <Link as={RouterLink}  color='teal.500' to="/setPin">
                Forgot PIN?
              </Link>
              </Stack>
              
            </FormikProvider>
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
