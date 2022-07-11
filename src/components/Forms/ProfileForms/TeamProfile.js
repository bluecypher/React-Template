import React, { useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik, Form } from "formik";
// import SaveData from "components/Modal/SaveData";

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
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  // Alert,
  // AlertIcon,
  // AlertTitle,
  // AlertDescription,
  // useDisclosure,
  useToast

} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

function TeamProfile() {
  // Chakra color mode
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [saveSuccess, setSaveSuccess] = useState(false);
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      TeamMemberName: "",
      TeamMemberRole: "",
      Number: "",
      Pincode: "",
      City_District: "",
      Address: "",
      StateName: "",
      Rate: "",
    },
    validationSchema: Yup.object().shape({
      TeamMemberName: Yup.string().max(255).required("TeamMember Name is required"),
      Number: Yup.number().max(9999999999, 'Please enter a valid number').min(1000000000, 'Please enter a valid number.').typeError('Mobile number must be numeric.').required('Number is required'),
      Pincode: Yup.number().max(999999).min(100000, "Please enter a valid PINCODE").typeError("PIN must be numeric").required("PIN is required"),
      Address: Yup.string().max(255).required("Address is required"),
      Rate: Yup.number().typeError('Rate must be numeric')
    }),
    onSubmit: () => {
      // try {
      console.log("click", saveSuccess)
      setSaveSuccess(true);
      toast({
        title: 'Added Successfully',
        description: "A new team profile has been created ",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      // setStatus({ success: false });
      // setSubmitting(false);


      // onOpen = true;



      // } catch (err) {
      //   console.error(err);
      //   // setStatus({ success: false });
      //   // setErrors({ submit: err.message });
      //   // setSubmitting(false);
      // }
    },
  });

  const {
    touched,
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
    values,
    getFieldProps,
  } = formik;


  return (
    <>
      <Text
        fontSize="xl"
        color={textColor}
        fontWeight="bold"
        textAlign="center"
        mb="22px"
      >
        Team Profile
      </Text>
      <Text
        fontSize="lg"
        color="gray.400"
        fontWeight="bold"
        textAlign="left"
        mb="20px"
      >
        Please enter details below.
      </Text>

      <FormikProvider value={formik}>
        <Form noValidate onSubmit={handleSubmit}>





          <HStack mb="8px" justifyContent="space-between">
            <Stack width="100%">
              <label>Member Name</label>
              <Input
                variant="auth"
                fontSize="sm"
                ms="4px"
                value={values.TeamMemberName}
                onChange={handleChange}
                type="text"
                name="TeamMemberName"
                id="TeamMemberName"
                placeholder="Member Name"
                // my='8px'
                size="lg"
                required
              />

            </Stack>

            <Stack width="100%">
              <label>Member Role</label>

              <Input
                variant="auth"
                fontSize="sm"
                ms="4px"
                type="text"
                name="TeamMemberRole"
                id="TeamMemberRole"
                // mt='10px'
                size="lg"
                placeholder="Member Role"
                required
              />

            </Stack>

          </HStack>
          {touched.TeamMemberName && errors.TeamMemberName && (
            <Text color="red">{errors.TeamMemberName}</Text>
          )}
          <Stack mb="10px">
            <label>Contact Number</label>
            <Input
              variant="auth"
              fontSize="sm"
              value={values.Number}
              onChange={handleChange}
              ms="4px"
              type="text"
              maxLength="10"
              name="Number"
              id="Number"
              placeholder="Phone Number"
              // mb='10px'
              size="lg"
              required
            />
            {touched.Number && errors.Number && (
              <Text color="red">{errors.Number}</Text>
            )}
          </Stack>
          <label>Team Member Base Location PIN</label>
          <Input
            variant="auth"
            fontSize="sm"
            value={values.Pincode}
            onChange={handleChange}
            ms="4px"
            type="tel"
            maxLength="6"
            name="Pincode"
            id="Pincode"
            placeholder="Enter Location PIN Code"
            // my='8px'
            size="lg"
            required
          />
          {touched.Pincode && errors.Pincode && (
            <Text color="red">{errors.Pincode}</Text>
          )}
          <HStack my="10px" justifyContent="space-between">
            <Stack width="100%">
              <label>
                City/District
                <Input
                  variant="auth"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  name="City_District"
                  id="City_District"
                  placeholder="City/District -- AUTOFILL --"
                  // mb='14px'
                  size="lg"
                  disabled
                  required
                // ToDo function for AUTOFILL
                />
              </label>
            </Stack>
            <Stack width="100%">
              <label>
                State
                <Input
                  variant="auth"
                  fontSize="sm"
                  ms="4px"
                  type="text"
                  name="StateName"
                  id="StateName"
                  placeholder="State -- AUTOFILL --"
                  // mb='14px'
                  size="lg"
                  required
                  disabled
                // ToDo function for AUTOFILL
                />
              </label>
            </Stack>
          </HStack>
          <Stack my="10px">
            <label>
              Address
              <Textarea
                // variant='auth'
                fontSize="sm"
                ms="4px"
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
              <Text color="red">{errors.Address}</Text>
            )}
          </Stack>

          <Stack my="10px">
            <label>
              Rate Per Visit
              <Input
                // variant='auth'
                fontSize="sm"
                ms="4px"
                value={values.Rate}
                onChange={handleChange}
                name="Rate"
                id="Rate"
                placeholder="Rate Per Visit"
                // mb='14px'
                required
              />
            </label>
            {touched.Rate && errors.Rate && (
              <Text color="red">{errors.Rate}</Text>
            )}
          </Stack>
          <Stack mt="20px" alignItems="center">
            {/* {saveSuccess && (
              // <Alert h="40px" status='success'>
              //   <AlertIcon />
              //   Team Member saved!
              // </Alert>
              

            )} */}
            <Button
              fontSize="16px"
              variant="primary"
              fontWeight="bold"
              w="20%"
              h="45"

              type="submit"
            >
              Save
            </Button>
          </Stack>

          <Stack mt="10px">
            <HStack justifyContent="flex-start">
              <Link color="teal" as={RouterLink} to="">
                View Team List
              </Link>



            </HStack>

          </Stack>

        </Form>
        {/* <SaveData /> */}
        <Stack mt="20px">
          <HStack justifyContent="space-between" >
            <Link flex={1} as={RouterLink} to="/profile/product">
              <Button
                fontSize="14px"
                variant="dark"
                fontWeight="bold"
                w="20%"
                h="45"

                type="submit"
              >
                Back
              </Button>
            </Link>
            {/* <Link flex={1} as={RouterLink} to="/profile/product"></Link> */}
            <Button
              fontSize="14px"
              variant="dark"
              fontWeight="bold"
              w="30%"
              px='5px'
              h="45"
              type="submit"
              onClick={() => {
                navigate("/admin/dashboard")
              }}

            >
              Start
            </Button>
          </HStack>
        </Stack>
        {/* <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <ModalHeader>
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Welcome to Sahayaks!
                </AlertTitle></ModalHeader> */}
        {/* <ModalCloseButton /> */}
        {/* <ModalBody pb={6}>



                <AlertDescription maxWidth='sm'>

                  Your Profile has been successfully saved.
                </AlertDescription>
              </ModalBody>
            </Alert>
            <ModalFooter>
              <Button colorScheme="blue" mr={10} onClick={() => {
                navigate("/profile/dashboard")
              }} >
                Start your Journey
              </Button>
              <Button variant="dark" onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}


      </FormikProvider>

    </>
  );
}

export default TeamProfile;
