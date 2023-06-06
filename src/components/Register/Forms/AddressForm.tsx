import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RefObject } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { UserInfosProps } from "../../../helpers/props/UserInfos.props";

export const AddressForm = (props: UserInfosProps) => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GCP_MAPS_API_KEY,
    options: {
      types: ["address"],
      componentRestrictions: { country: "fr" },
    },
    onPlaceSelected: (place) => {
      // place.address_components.map() -> récupérer les valeurs en fonction du contenu de "types"
      // stocker les valeurs dans des variables dédiées puis les envoyer avec le state ci-dessous.
      props.setUserInfos({
        ...props.userInfos,
        addressPos: {
          lat: place.geometry?.location?.lat().toString() as string,
          lng: place.geometry?.location?.lng().toString() as string,
        },
      });
    },
  });

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Adresse
      </Heading>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Adresse
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          ref={ref as unknown as RefObject<HTMLInputElement>}
        />
      </FormControl>
    </>
  );
};
