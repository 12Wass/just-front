import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../../../helpers/api/hooks";
import { loginUser } from "../../../helpers/api/actions/auth.action";
import store from "../../../helpers/api/store/store";

export default function SimpleCard() {
  const toast = useToast();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    await dispatch(loginUser({ email, password }))
      .unwrap()
      .then((response) => {
        console.log(store.getState().auth); // L'utilisateur est bien sauvegardé
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Échec de la connexion",
          description: "Une erreur est survenue.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <ModalContent>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <ModalHeader>
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Connectez-vous à votre compte</Heading>
              <Text fontSize={"md"} color={"gray.600"}>
                pour profiter de toutes nos{" "}
                <Link color={"blue.400"}>fonctionnalités</Link> ✌️
              </Text>
            </Stack>
          </ModalHeader>
          <ModalBody>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Adresse e-mail</FormLabel>
                  <Input
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Mot de passe</FormLabel>
                  <Input
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Rester connecté</Checkbox>
                    <Link color={"blue.400"}>Trou de mémoire?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleClick}
                  >
                    Connexion
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </ModalBody>
        </Stack>
      </Flex>
    </ModalContent>
  );
}
