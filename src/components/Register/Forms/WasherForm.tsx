import {
  Heading,
  SimpleGrid,
  FormControl,
  GridItem,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";

export const WasherForm = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Réseaux sociaux
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Site internet
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            A propos
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>Brève description de votre profil</FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
