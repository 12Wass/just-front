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
} from "@chakra-ui/react";

export default function SimpleCard() {
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
              <Heading fontSize={"4xl"}>Connectez-vous à votre compte</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
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
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Mot de passe</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Rester connecté</Checkbox>
                    <Link color={"blue.400"}>Mot de passe oublié?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
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
