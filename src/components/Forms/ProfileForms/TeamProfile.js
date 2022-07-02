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
  Textarea,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";



// Assets
import signInImage from "assets/img/signInImage.png";

function TeamProfile() {
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
            name="MemberName"
            id="MemberName"
            placeholder='Enter Your Member Name'
            mb='24px'
            size='lg'
            required
          />
          <Input
            variant='auth'
            fontSize='sm'
            ms='4px'
            type='text'
            name="Role"
            id="Role"
            placeholder="Enter Member's Role"
            mb='24px'
            size='lg'
            required
          />
          <Input
            variant='auth'
            fontSize='sm'
            ms='4px'
            type='tel'
            maxLength="10"
            name="MemMobNo"
            id="MemMobNo"
            placeholder="Enter Member's Phone Number"
            mb='24px'
            size='lg'
            required
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
            placeholder="Enter Member's Address"
            mb='24px'
            size='lg'
            required
          >
          </Textarea>
          <Input
            variant='auth'
            fontSize='sm'
            ms='4px'
            type='tel'
            maxLength="6"
            name="Pincode"
            id="Pincode"
            placeholder="Enter Member's Location PINCODE"
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
          
          <Select
            variant='auth'
            fontSize='sm'
            ms='4px'
            mb='24px'
            size='lg'
            name="ServiceCities" 
            placeholder="Select Service Cities"
            background="#1B254B"
            color="#A0AEC0"
            required
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </Select>
          <Input
            variant='auth'
            fontSize='sm'
            ms='4px'
            type='number'
            name="RPV"
            id="RPV"
            placeholder="Rate Per Visit"
            mb='24px'
            size='lg'
            required
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
          <Flex
            w="100%"
            justifyContent="space-between"
          >
            <Button
              type="submit"
              fontSize='13px'
              variant='dark'
              fontWeight='bold'
              w='fit-content'
              h='30'
              mb='20px'
              // TODO onClick=""
            >
              Add More Members
            </Button>
            <Button
              type="submit"
              fontSize='13px'
              variant='dark'
              fontWeight='bold'
              w='fit-content'
              h='30'
              mb='20px'
              // TODO onClick=""
            >
              View Member List
            </Button>
          </Flex>
          

      </FormControl>
  );
}

export default TeamProfile;
