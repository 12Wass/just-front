import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { UserInfosProps } from "../../../helpers/interfaces/UserInfos.props";
export const InformationsForm = (props: UserInfosProps) => {
  const [show, setShow] = React.useState(false);
  const handlePassword = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Inscription utilisateur
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="pseudo" fontWeight={"normal"}>
            Pseudo
          </FormLabel>
          <Input
            id="pseudo"
            placeholder="Pseudo"
            value={props?.userInfos?.pseudo || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setUserInfos({
                ...props.userInfos,
                pseudo: e.target.value,
              });
            }}
          />
        </FormControl>

        <FormControl mr="5%">
          <FormLabel htmlFor="firstName" fontWeight={"normal"}>
            Prénom
          </FormLabel>
          <Input
            id="firstName"
            placeholder="Prénom"
            value={props?.userInfos?.firstName || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setUserInfos({
                ...props.userInfos,
                firstName: e.target.value,
              })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="lastName" fontWeight={"normal"}>
            Nom
          </FormLabel>
          <Input
            id="lastName"
            placeholder="Nom"
            value={props?.userInfos?.lastName || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setUserInfos({
                ...props.userInfos,
                lastName: e.target.value,
              })
            }
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Adresse e-mail
        </FormLabel>
        <Input
          id="email"
          type="email"
          value={props?.userInfos?.email || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setUserInfos({
              ...props.userInfos,
              email: e.target.value,
            })
          }
        />
        <FormHelperText>
          Nous ne partagerons jamais votre adresse.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Mot de passe
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Mot de passe"
            value={props?.userInfos?.password || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setUserInfos({
                ...props.userInfos,
                password: e.target.value,
              })
            }
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlePassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="confirmation" fontWeight={"normal"} mt="2%">
          Confirmation
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            id="confirmation"
            type="password"
            placeholder="Mot de passe"
            value={props?.userInfos?.confirmation || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setUserInfos({
                ...props.userInfos,
                confirmation: e.target.value,
              })
            }
          />
        </InputGroup>
      </FormControl>
    </>
  );
};
