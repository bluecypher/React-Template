import React from "react";
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FormikProvider, useFormik, Form } from 'formik';

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  Icon,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";



// Assets
import signInImage from "assets/img/signInImage.png";

function EnterpriseProfile() {
  // Chakra color mode
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  const formik = useFormik({
    initialValues: {
      EnterpriseName: '',
      EnterpriseLogo: '',
      Name: '',
      Pincode: '',
      City_District: '',
      Address: '',
      StateName: '',
      UPI: ''

    },
    validationSchema: Yup.object().shape({
      EnterpriseName: Yup.string().max(255).required('Enterprise Name is required'),
      Name: Yup.string().max(255).required('Name is required'),
      Pincode: Yup.number().max(999999).typeError('PIN must be numeric').required('PIN is required'),
      Address: Yup.string().max(255).required('Address is required'),
      UPI: Yup.string().max(100).required('UPI ID is required'),

    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        setStatus({ success: false });
        setSubmitting(false);
        console.log('click');
        navigate('/profile/product');
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
    <>
      <Text
        fontSize='xl'
        color={textColor}
        fontWeight='bold'
        textAlign='center'
        mb='22px'>
        Enterprise Profile
      </Text>
      <Text
        fontSize='lg'
        color='gray.400'
        fontWeight='bold'
        textAlign='left'
        mb='20px'>
        Please enter details below.
      </Text>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={handleSubmit}>
          <HStack mb='8px' justifyContent="space-between">
            <Stack width="100%">
              <label>
                Enterprise Name
              </label>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                value={values.EnterpriseName}
                onChange={handleChange}
                type='text'
                name="EnterpriseName"
                id="EnterpriseName"
                placeholder='Enter Your Enterprise Name'
                // my='8px'
                size='lg'
                required
              />
              {touched.EnterpriseName && errors.EnterpriseName && (
                <Text color="red">
                  {errors.EnterpriseName}
                </Text>
              )}
            </Stack>

            <Stack width="100%">

              <label>
                Enterprise Logo
              </label>
              <Input
                variant='auth'
                fontSize='sm'

                ms='4px'
                type='file'
                name="EnterpriseLogo"
                id="EnterpriseLogo"
                // mt='10px'
                size='lg'
                required
              />
            </Stack>
          </HStack>
          <Stack mb='10px'>
            <label >
              Your Name
            </label>
            <Input
              variant='auth'
              fontSize='sm'
              value={values.Name}
              onChange={handleChange}
              ms='4px'
              type='text'
              name="Name"
              id="Name"
              placeholder="Enter Your Name"
              // mb='10px'
              size='lg'
              required
            />
            {touched.Name && errors.Name && (
              <Text color="red">
                {errors.Name}
              </Text>
            )}
          </Stack>
          <label>
            PIN Code
          </label>
          <Input
            variant='auth'
            fontSize='sm'
            value={values.Pincode}
            onChange={handleChange}
            ms='4px'
            type='tel'
            maxLength="6"
            name="Pincode"
            id="Pincode"
            placeholder="Enter Location PIN Code"
            // my='8px'
            size='lg'
            required
          />
          {touched.Pincode && errors.Pincode && (
            <Text color="red">
              {errors.Pincode}
            </Text>
          )}
          <HStack my='10px' justifyContent="space-between">
            <Stack width="100%">
              <label>
                City/District

                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  name="City_District"
                  id="City_District"
                  placeholder="City/District -- AUTOFILL --"
                  // mb='14px'
                  size='lg'
                  disabled
                  required
                // ToDo function for AUTOFILL
                />
              </label>
            </Stack>
            <Stack width="100%">
              <label>State
                <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='text'
                  name="StateName"
                  id="StateName"
                  placeholder="State -- AUTOFILL --"
                  // mb='14px'
                  size='lg'
                  required
                  disabled
                // ToDo function for AUTOFILL
                />
              </label>
            </Stack>
          </HStack>
          <Stack my='10px'>
            <label>Address
              <Textarea
                // variant='auth'
                fontSize='sm'
                ms='4px'

                value={values.Address}
                onChange={handleChange}
                name="Address"
                id="Address"
                placeholder="Enter Your Address"
                // mb='14px'
                required
              />
            </label>
            {touched.Address && errors.Address && (
              <Text color="red">
                {errors.Address}
              </Text>
            )}
          </Stack>
          <label mt='10px'>UPI ID
            <Input
              variant='auth'
              fontSize='sm'
              value={values.UPI}
              onChange={handleChange}
              ms='4px'
              type="email"
              name="UPI"
              id="UPI"
              placeholder="Enter Your UPI ID"
              // mb='14px'
              size='lg'
            // ToDo Verify Function
            />
          </label>
          {touched.UPI && errors.UPI && (
            <Text color="red">
              {errors.UPI}
            </Text>
          )}
          <Stack
            mt='10px'
            alignItems="center"
          >
            <Button
              fontSize='16px'
              variant='dark'
              fontWeight='bold'

              w='50%'
              h='45'
              my='12px'
              type="submit"
            >
              Save
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
}

export default EnterpriseProfile;
