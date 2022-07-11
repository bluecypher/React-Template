import React, { useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik, Form } from "formik";

import {
  Box,
  Flex,
  Button,
  HStack,
  Input,
  Textarea,
  Icon,
  Link,
  Switch,
  Text,
  Select,
  Stack,
  useColorModeValue,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";
// import { Navigate, useNavigate } from "react-router-dom";

function ProductProfile() {
  // Chakra color mode
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  function handleProdServ(e) {
    const value = e.target.value;

    setTags([...tags, value]);

    console.log(tags);
  }

  function handleProdClose(index) {
    console.log(
      "sadfadfasdf",
      tags.filter((tag, i) => {
        return i != index;
      })
    );
    setTags(
      tags.filter((tag, i) => {
        return i != index;
      })
    );
  }

  const formik = useFormik({
    initialValues: {
      ProductCat: "",
      ProductBrand: "",
      ProductName: "",
      ProductServices: "",
      ProductWarranty: "",
    },
    validationSchema: Yup.object().shape({
      ProductCat: Yup.string()
        .max(255)
        .required("Please select a Product Category"),
      ProductBrand: Yup.string()
        .max(255)
        .required("Please select a Product Brand"),

      ProductName: Yup.string().max(255).required("Product Name is required"),
      ProductServices: Yup.string().max(255),
      // .required("Please select atleast one Service for the product"),
      ProductWarranty: Yup.number()
        .required("Product Warranty is required")

        .max(60, "Warranty must be less than 5 Years (in months)")
        .min(0, "Please enter a valid month")
        .typeError("Please enter number of months for warranty."),
    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        setStatus({ success: false });
        setSubmitting(false);
        console.log("click");
        navigate("/profile/product");
      } catch (err) {
        console.error(err);
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
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
        Product Profile
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
        <Form noValidate>
          <Stack mb={4}>
            <label htmlFor="Select Product Category">
              Select Product Category
            </label>
            <Select
              // variant="auth"
              fontSize="sm"
              ms="4px"
              value={values.ProductCat}
              onChange={handleChange}
              mb="24px"
              size="lg"
              name="ProductCat"
              color="#A0AEC0"
              placeholder="Select Product Category"
              required
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </Select>
            {touched.ProductCat && errors.ProductCat && (
              <Text color="red">{errors.ProductCat}</Text>
            )}
            <label>Select Product Brand</label>
            <Select
              // variant="auth"
              fontSize="sm"
              ms="4px"
              mb="5px"
              size="lg"
              value={values.ProductBrand}
              onChange={handleChange}
              name="ProductBrand"
              placeholder="Select Product Brand"
              // background="#1B254B"
              color="#A0AEC0"
              required
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </Select>
            {touched.ProductBrand && errors.ProductBrand && (
              <Text color="red">{errors.ProductBrand}</Text>
            )}
            <Link
              display="block"
              textAlign="right"
              textDecoration="underline"
              // href=""
              mb="24px"
            >
              Add Product Brands
            </Link>

            <label>Enter Product Name</label>
            <Input
              // variant="auth"
              fontSize="sm"
              ms="4px"
              type="text"
              name="ProductName"
              id="Product"
              placeholder="Enter Product Name"
              // mt='24px'
              value={values.ProductName}
              onChange={handleChange}
              mb="24px"
              size="lg"
              required
            />
            {touched.ProductName && errors.ProductName && (
              <Text color="red">{errors.ProductName}</Text>
            )}
            <label>Enter Product Image</label>
            <Input
              // variant="auth"
              fontSize="sm"
              ms="4px"
              type="file"
              name="ProductImg"
              id="ProductImg"
              mb="24px"
              size="lg"
              required
            />
            <HStack spacing={4} mb={2}>
              {tags.map((tag, index) => (
                <Tag
                  size={"sm"}
                  key={index}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleProdClose(index)} />
                </Tag>
              ))}
            </HStack>
            <label>Add Services for the Product</label>
            <Select
              // variant="auth"
              fontSize="sm"
              ms="4px"
              mb="24px"
              size="lg"
              name="ProductServices"
              placeholder="Add Services for the Product"
              value={values.ProductServices}
              // onChange={handleChange}
              // background="#1B254B"
              color="#A0AEC0"
              // ToDo multiple
              onChange={handleProdServ}
              required
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </Select>
            {touched.ProductServices && tags.length == 0 && (
              <Text color="red">
                Please select atleast one Service for the product
              </Text>
            )}
            <label>Add Product Warranty (in Months)</label>
            <Input
              // variant="auth"
              fontSize="sm"
              ms="4px"
              // type="number"
              name="ProductWarranty"
              id="ProductWarranty"
              value={values.ProductWarranty}
              onChange={handleChange}
              placeholder="Add Product Warranty (in Months)"
              mb="24px"
              size="lg"
              required
            />
            {touched.ProductWarranty && errors.ProductWarranty && (
              <Text color="red">{errors.ProductWarranty}</Text>
            )}
          </Stack>
          <Stack>
            <Flex flexDirection="column" alignItems="flex-end">
              <Button
                type="submit"
                fontSize="13px"
                variant="primary"
                w="10%"
                h="10"
                mb="20px"
                // TODO onClick=""
              >
                Save
              </Button>
            </Flex>
          </Stack>
        </Form>
        <Stack>
          <Flex w="100%" justifyContent="space-between">
            <Button
              type="submit"
              fontSize="13px"
              variant="dark"
              fontWeight="bold"
              w="20%"
              h="10"
              mb="20px"
              // TODO onClick=""
            >
              Add More Products
            </Button>
            <Button
              type="submit"
              fontSize="13px"
              variant="dark"
              fontWeight="bold"
              w="25%"
              h="10"
              mb="20px"
              onClick={() => {
                navigate("/profile/team");
              }}
            >
              Next Step: Team Profile
            </Button>
          </Flex>
        </Stack>
      </FormikProvider>
    </>
  );
}

export default ProductProfile;
