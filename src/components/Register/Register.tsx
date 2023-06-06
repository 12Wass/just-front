import { useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  RadioGroup,
  HStack,
  Radio,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";

import { UserChoiceProps } from "../../helpers/props/UserChoice.props";
import { InformationsForm } from "./Forms/InformationsForm";
import { AddressForm } from "./Forms/AddressForm";
import { WasherForm } from "./Forms/WasherForm";
import { Washer } from "../../helpers/interfaces/Washer.interface";
/**
 *  Next/Back functions
 */

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
  const [userChoice, setUserChoice] = useState("Particulier");
  const [userInfos, setUserInfos] = useState<Washer>();

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
      {step === 1 ? (
        <UserChoiceForm setUserChoice={setUserChoice} userChoice={userChoice} />
      ) : step === 2 ? (
        <InformationsForm userInfos={userInfos} setUserInfos={setUserInfos} />
      ) : step === 3 ? (
        <AddressForm userInfos={userInfos} setUserInfos={setUserInfos} />
      ) : step === 4 && userChoice === "Laveur" ? (
        <WasherForm userInfos={userInfos} setUserInfos={setUserInfos} />
      ) : (
        "Une erreur est survenue"
      )}

      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => setStep(step - 1)}
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
              onClick={() => setStep(step + 1)}
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
