import React, { useState } from "react";
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
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
const axios = require('axios');
const CryptoJS = require('crypto-js');

function SignIn() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  const [showOTP, setShowOTP] = useState(false);
  const [showPIN, setShowPIN] = useState(false);
  const [inputOtp, setInputOtp] = useState('');
  const [inputPin, setInputPin] = useState('');
  const [OTPError, setOTPError] = useState(false);
  const [PINError, setPINError] = useState(false);

  const handleSubmit2 = () => {
    if (inputOtp === "123456") {
      localStorage.setItem('number', values.number);
      navigate('/setPin', { replace: true });

    } else {
      setOTPError(true);
      console.log('less than 6');
    }
  };

  const handleSubmit3 = () => {
    // const bytes = CryptoJS.AES.decrypt(encPin, 'sahayak2');
    // const originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log('dec', inputPin);
    const hmacPin = CryptoJS.HmacSHA256(inputPin, values.number).toString();
    navigate('/profile/enterprise', { replace: true });
    // axios
    //   .post(
    //     '/auth/login',
    //     {
    //       number: values.number,
    //       pin: hmacPin
    //     },
    //     {
    //       'access-control-allow-origin': '*'
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);

    //     if (response.data.jwToken) {
    //       localStorage.setItem('number', values.number);
    //       setCookie('token', response.data.jwToken, {
    //         path: '/',
    //         expires: new Date(Date.now() + 1000 * 8)
    //       });

    //       if (response.data.status === 'F') {
    //         navigate('/admin/dashboard', { replace: true });
    //       } else {
    //         navigate('/profile/enterprise', { replace: true });
    //       }
    //     }
    //   })
    //   .catch((e) => {
    //     console.log('Error', e);
    //   });


  }

  const formik = useFormik({
    initialValues: {
      number: '',
      // pin: ''
    },
    validationSchema: Yup.object().shape({
      number: Yup.string().max(10).required('Number is required'),
      // pin: Yup.string().max(6).required('PIN is required')

    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        setStatus({ success: false });
        setSubmitting(false);
        console.log('click');
        axios.post('/getLogin', { number: values.number }).then((res) => {
          console.log('getlogin', res);
          if (res.data.otp != null) {

            // const bytes = CryptoJS.AES.decrypt(res.data.otp, 'sahayak2');
            // const originalText = bytes.toString(CryptoJS.enc.Utf8);
            // setOTP(originalText);
            setShowOTP(true);
          }
          else {
            setShowPIN(true);
            // setEncPin(res.data.password);
          }
        })
          .catch((err) => {
            console.log('err', err);
          })

        // setShowOTP(true);
        // navigate('/profile/enterprise');
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
              Sign In
            </Text>
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                <label>
                  Phone Number
                </label>
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
                  mb='12px'
                  size='lg'
                  error={Boolean(touched.number && errors.number)}
                  required
                />
                {touched.number && errors.number && (

                  <Text color="red">
                    {errors.number}
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
                  Next
                </Button>
              </Form>



            </FormikProvider>
            {showOTP &&
              <>
                <label>
                  OTP
                </label>
                <Input
                  variant='auth'
                  fontSize='sm'
                  value={inputOtp}
                  onChange={(event) => setInputOtp(event.target.value)}
                  ms='4px'
                  type='password'
                  name="otp"
                  placeholder='Enter OTP'
                  maxLength="6"
                  mb='12px'
                  size='lg'
                  // error={errors.pin}
                  required
                />
                {
                  OTPError &&

                  <Text color="red">
                    OTP does not match!!
                  </Text>

                }



                <Button
                  fontSize='16px'
                  variant='dark'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  my='12px'
                  onClick={handleSubmit2}>
                  Sign in
                </Button>
              </>
            }
            {showPIN &&
              <>
                <label>
                  PIN
                </label>
                <Input
                  variant='auth'
                  fontSize='sm'
                  value={inputPin}
                  onChange={(event) => setInputPin(event.target.value)}
                  ms='4px'
                  type='password'
                  name="pin"
                  placeholder='Enter PIN'
                  maxLength="6"
                  my='12px'
                  size='lg'
                  // error={errors.pin}
                  required
                />
                {
                  PINError &&

                  <Text color="red">
                    Incorrect PIN!!
                  </Text>

                }


                <Button
                  fontSize='16px'
                  variant='dark'
                  fontWeight='bold'
                  w='100%'
                  h='45'
                  my='12px'
                  onClick={handleSubmit3}>
                  Sign in
                </Button>
                <Stack alignItems="flex-end">
                  <Link as={RouterLink} color='teal.500' to="/setPin">
                    Forgot PIN?
                  </Link>
                </Stack>
              </>
            }


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
