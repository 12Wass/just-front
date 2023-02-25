import React, { useState, Dispatch, SetStateAction } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  ModalContent,
  ModalFooter,
  ModalBody,
  RadioGroup,
  HStack,
  Radio,
  useToast,
} from "@chakra-ui/react";

import { UserInfosProps } from "../../helpers/interfaces/UserInfos.props";
import { UserForm } from "../../helpers/interfaces/UserForm.interface";
import { UserChoiceProps } from "../../helpers/interfaces/UserChoice.props";
import { InformationsForm } from "./Forms/InformationsForm";
import { AddressForm } from "./Forms/AddressForm";
import { WasherForm } from "./Forms/WasherForm";
/**
 *  Next/Back functions
 */

const Next = (
  progress: number,
  setProgress: Dispatch<SetStateAction<number>>,
  step: number,
  setStep: Dispatch<SetStateAction<number>>,
  userChoice: string
) => {
  setStep(step + 1);
  if (step === 4 || (step === 3 && userChoice === "Particulier")) {
    setProgress(100);
  } else {
    if (userChoice === "Laveur") setProgress(progress + 25);
    else setProgress(progress + 33.33);
  }
};

const Back = (
  progress: number,
  setProgress: Dispatch<SetStateAction<number>>,
  step: number,
  setStep: Dispatch<SetStateAction<number>>,
  userChoice: string
) => {
  setStep(step - 1);
  userChoice === "Particulier"
    ? setProgress(progress - 25)
    : setProgress(progress - 33.33);
};

const UserChoiceForm = (props: UserChoiceProps) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Qui êtes-vous ?
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as="fieldset">
          <FormLabel as="legend">
            Êtes-vous un laveur ou un particulier ?
          </FormLabel>
          <RadioGroup
            defaultValue={props.userChoice}
            onChange={(value) => {
              props.setUserChoice(value);
            }}
          >
            <HStack spacing="24px">
              <Radio value="Laveur">Laveur</Radio>
              <Radio value="Particulier">Particulier</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Sélectionnez le type d'utilisateur que vous êtes.
          </FormHelperText>
        </FormControl>{" "}
      </SimpleGrid>
    </>
  );
};

export default function MultiStepRegister() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [userChoice, setUserChoice] = useState("Particulier");
  const [userInfos, setUserInfos] = useState<UserForm>();

  console.log(userInfos);
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
    >
      <Progress
        hasStripe
        value={progress}
        mb="5%"
        mx="5%"
        isAnimated
      ></Progress>
      {step === 1 ? (
        <UserChoiceForm setUserChoice={setUserChoice} userChoice={userChoice} />
      ) : step === 2 ? (
        <InformationsForm userInfos={userInfos} setUserInfos={setUserInfos} />
      ) : step === 3 ? (
        <AddressForm />
      ) : step === 4 && userChoice === "Laveur" ? (
        <WasherForm />
      ) : (
        "Une erreur est survenue"
      )}

      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() =>
                Back(progress, setProgress, step, setStep, userChoice)
              }
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Précédent
            </Button>
            <Button
              w="7rem"
              isDisabled={
                step === 4 || (step === 3 && userChoice === "Particulier")
              }
              onClick={() =>
                Next(progress, setProgress, step, setStep, userChoice)
              }
              colorScheme="teal"
              variant="outline"
            >
              Suivant
            </Button>
          </Flex>
          {step === 4 || (step === 3 && userChoice === "Particulier") ? (
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                toast({
                  title: "Compte créé.",
                  description: "Vous êtes inscrit !",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Envoyer
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
}
