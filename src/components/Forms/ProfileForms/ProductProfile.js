import React from "react";
// import {Form} from "react-bootstrap";

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
  Select,
  useColorModeValue,
} from "@chakra-ui/react";



// Assets
import signInImage from "assets/img/signInImage.png";

function ProductProfile() {
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
            <Select
              variant='auth'
              fontSize='sm'
              ms='4px'
              mb='24px'
              size='lg'
              name="ProductCategory" 
              placeholder="Select Product Category"
              background="#1B254B"
              color="#A0AEC0"
              required
              >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </Select>
            <Select
              variant='auth'
              fontSize='sm'
              ms='4px'
              mb='5px'
              size='lg'
              name="ProductBrand" 
              placeholder="Select Product Brand"
              background="#1B254B"
              color="#A0AEC0"
              required
              form-control
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </Select>
            <Link 
              display="block"
              textAlign="right"
              textDecoration="underline"
              // href=""
            >
              Add Product Brands
              </Link>
            <Input
              variant='auth'
              fontSize='sm'
              ms='4px'
              type='text'
              name="Product"
              id="Product"
              placeholder="Enter Product Name"
              mt='24px'
              mb='24px'
              size='lg'
              required
            />
            <label>
              Enter Product Image
            </label>
            <Input
              variant='auth'
              fontSize='sm'
              ms='4px'
              type='file'
              name="ProductImg"
              id="ProductImg"
              mb='24px'
              size='lg'
              required
            />
            <Select
              variant='auth'
              fontSize='sm'
              ms='4px'
              mb='24px'
              size='lg'
              name="Services" 
              placeholder="Add Services for the Product"
              background="#1B254B"
              color="#A0AEC0"
              // ToDo multiple
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
              name="ProdWarranty"
              id="ProdWarranty"
              placeholder="Add Product Warranty (in Months)"
              mb='24px'
              size='lg'
              required
            />
            <Flex
              flexDirection="column"
              alignItems="flex-end"
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
                  Add More Products
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
                  View Product List
                </Button>
              </Flex>
            </Flex>
          </FormControl>
  );
}

export default ProductProfile;
