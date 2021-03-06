import React, { useState } from "react";
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
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
const axios = require('axios');
const CryptoJS = require("crypto-js");
// Assets
import signInImage from "assets/img/signInImage.png";
// import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";



function SetPin() {
  // Chakra color mode
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  const LoginSchema = Yup.object().shape({
    pin: Yup.number('PIN must be numeric.')

      .required('PIN is required').typeError('PIN must be numeric.'),
    pin2: Yup.number('PIN must be numeric.')
      // .min(100000, 'Too Short. Please enter a valid PIN.')

      .required('PIN is required').typeError('PIN must be numeric.')
      .oneOf([Yup.ref('pin'), null], "PINs do not match")
  });

  const formik = useFormik({
    initialValues: {

      pin: '',
      pin2: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {

      const ciphertext = CryptoJS.HmacSHA256(values.pin, localStorage.getItem('number')).toString();
      console.log('cipher', ciphertext);

      navigate('/signin');
      // axios.post('/auth/setPIN', { pin: ciphertext, number: localStorage.getItem('number') }).then((res) => {
      //   console.log('setPIN', res.data);
      //   if (res.data === "Success") {
      //     navigate('/signin');
      //   }
      // })
      //   .catch((err) => {
      //     console.log('err', err);
      //   })


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
          mt={{ base: "50px", md: "50px" }}>
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
              Set PIN
            </Text>
            <Text
              fontSize='lg'
              color='gray.400'
              fontWeight='bold'
              textAlign='left'
              mb='20px'>
              Create a six digit PIN of your choice.
            </Text>
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                <label>
                  PIN
                </label>
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  value={values.pin}
                  onChange={handleChange}
                  type='password'
                  name="pin"
                  minLength="6"
                  maxLength="6"
                  placeholder='Enter PIN'
                  mb='24px'
                  error={Boolean(touched.pin && errors.pin)}
                  size='lg'

                />
                {touched.pin && errors.pin && (
                  <Text color="red">
                    {errors.pin}
                  </Text>
                )}
                <label>

                  Confirm PIN
                </label>
                <Input
                  variant='auth'
                  fontSize='sm'
                  value={values.pin2}
                  onChange={handleChange}
                  ms='4px'
                  type='password'
                  minLength="6"
                  maxLength="6"
                  name="pin2"
                  placeholder='Re-Enter PIN'
                  mb='24px'
                  error={Boolean(touched.pin2 && errors.pin2)}
                  size='lg'

                />
                {touched.pin2 && errors.pin2 && (
                  <Text color="red">
                    {errors.pin2}
                  </Text>
                )}
                <Button
                  fontSize='16px'
                  variant='dark'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  my='12px'
                  type="submit">
                  CREATE PIN
                </Button>
              </Form>
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

export default SetPin;
