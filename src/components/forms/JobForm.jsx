import { Box, ButtonGroup, VStack, Radio, Input, FormControl, FormLabel, FormHelperText, FormErrorMessage, Heading, Button, IconButton, Flex, HStack } from "@chakra-ui/react";
import { Formik, Field, FieldArray } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl
} from "formik-chakra-ui";
import * as React from "react";
import { FaPlus } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { Card } from "../cards/Card";
import ChakraAutoComplete from "../codbrix-components/ChakraAutoComplete";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
  });
};

const initialValues = {
  title: "",
  description: "",
  client_name: "",
  client_phone: "",
  client_address: "",
  extras: [
      {
          caption: '',
          value: ''
      }
  ]
};
const validationSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  client_name: Yup.string().required().min(2),
  client_phone: Yup.number('Phone Number must be valid.').min(7).required(),
  client_address: Yup.string().min(5).required()
});

const JobForm = () => {
  return (
   <Card maxW={"3xl"}>
        <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, touched, errors, isSubmitting, setFieldValue }) => (
        <VStack
            align={"left"}
            spacing={4}
            as="form"
            onSubmit={handleSubmit}
        >

<Heading size="md">Job Details</Heading>
         
         <ChakraAutoComplete items={[
             {value: "Teacher"},
             {value: "Banker"},
             {value: "Guard"},
             {value: "Receptionist"},
            ]} 
            value={values['title']}
            errors = {errors}
            touched = {touched}
            label="Job Title"
            width="100%"
            placeholder="Enter a Job Title"
            fieldAction={setFieldValue}   
            name="title" 
        ></ChakraAutoComplete>
          <FormControl isInvalid={errors.description && touched.description}>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Box borderWidth={1} rounded={"lg"}>
                <ReactQuill 
                value={values['description']}
                onChange={v => {
                    touched.description = true;
                    setFieldValue('description', v)}} 
                />
            </Box>
            {!(errors.description && touched.description) ? (
                <FormHelperText>
                Enter the description of the vacancy.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Description is required.</FormErrorMessage>
            )}
            </FormControl>
        <Heading pt={6} size="md">Client Details</Heading>
            <InputControl isRequired name="client_name" label="Client/Company Name" />
            <InputControl type="number" isRequired name="client_phone" label="Phone Number" />
            <TextareaControl isRequired label="Address" name="client_address" minH={8}>

            </TextareaControl>

        <Heading pt={6} size="md">Additional Information</Heading>
            <FieldArray name="extras">
            {({ insert, remove, push }) => (
              <Box>
                {values.extras.length > 0 &&
                  values.extras.map((extra, index) => (
                 <Flex mt={4}>
                    <HStack width={"100%"} spacing={4} key={index}>
                        <ChakraAutoComplete items={[
                            {value: "Teacher"},
                            {value: "Banker"},
                            {value: "Guard"},
                            {value: "Receptionist"},
                            ]} 
                            value={values.extras[index].caption}
                            errors = {errors}
                            touched = {touched}
                            label="Caption"
                            width="280px"
                            placeholder="Enter the type here"
                            fieldAction={setFieldValue}   
                            name={`extras.${index}.caption`}
                        ></ChakraAutoComplete>
                        <InputControl
                            label="Value"
                            name={`extras.${index}.value`}
                        />
                    </HStack>
                    <Flex pl={3} pt={8} height={"100%"} direction={"column"} justifyContent={"right"} alignItems={"flex-end"}>
                        <IconButton
                            icon={<GrFormClose></GrFormClose>}
                            onClick={() => remove(index)}
                            variant={"outline"}
                        />
                    </Flex>
                 </Flex>
                  ))}
                <Button
                my={4}
                    variant="outline"
                    leftIcon={<FaPlus color="gray.400"></FaPlus>}
                    borderStyle="dashed"
                    width={"100%"}
                    color="gray.400"
                    colorScheme="gray"
                  onClick={() => push({ name: '', email: '' })}
                >
                  Add New
                </Button>
              </Box>
            )}
          </FieldArray>
          <ButtonGroup>
            <SubmitButton  colorScheme="purple">Submit</SubmitButton>
          </ButtonGroup>

        </VStack>
      )}
    </Formik>
   </Card>
  );
};

export default JobForm;
