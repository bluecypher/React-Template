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
  Textarea,
  Icon,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";



// Assets
import signInImage from "assets/img/signInImage.png";

function EnterpriseProfile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
          <FormControl>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                name="EnterpriseName"
                id="EnterpriseName"
                placeholder='Enter Your Enterprise Name'
                mb='24px'
                size='lg'
                required
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                name="Name"
                id="Name"
                placeholder="Enter Your Name"
                mb='24px'
                size='lg'
                required
              />
              <label>
                Enter Enterprise Logo
              </label>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='file'
                name="EnterpriseLogo"
                id="EnterpriseLogo"
                mb='24px'
                size='lg'
                required
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='tel'
                maxLength="6"
                name="Pincode"
                id="Pincode"
                placeholder="Enter Location PINCODE"
                mb='24px'
                size='lg'
                required
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                name="City_District"
                id="City_District"
                placeholder="City/District -- AUTOFILL --"
                mb='24px'
                size='lg'
                disabled
                required
                // ToDo function for AUTOFILL
              />
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                name="StateName"
                id="StateName"
                placeholder="State -- AUTOFILL --"
                mb='24px'
                size='lg'
                required
                disabled
                // ToDo function for AUTOFILL
              />
              <Textarea
                // variant='auth'
                fontSize='sm'
                ms='4px'
                // color="#A0AEC0"
                background="#1B254B"
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter Your Address"
                mb='24px'
                size='lg'
                required
              >
              </Textarea>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type="email"
                name="UPI"
                id="UPI"
                placeholder="Enter Your UPI ID"
                mb='24px'
                size='lg'
                // ToDo Verify Function
              />
              <Flex
                justifyContent="right"
              >
                <Button
                  type="submit"
                  fontSize='13px'
                  variant='dark'
                  fontWeight='bold'
                  w='20%'
                  h='30'
                  mb='20px'
                  // TODO onClick=""
                >
                  Save
                </Button>
              </Flex>
          </FormControl>
  );
}

export default EnterpriseProfile;
