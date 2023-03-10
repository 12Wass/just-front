import {
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserInfosProps } from "../../../helpers/interfaces/UserInfos.props";
import { GoogleMap, useJsApiLoader, Circle } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

export const WasherForm = (props: UserInfosProps) => {
  /* Google Map setup */
  const center = new google.maps.LatLng(
    parseFloat(props.userInfos?.address?.lat as string),
    parseFloat(props.userInfos?.address?.lng as string)
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GCP_MAPS_API_KEY as string,
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Informations laveur
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="companyName" fontWeight={"normal"}>
              Raison sociale
            </FormLabel>
            <Input
              id="companyName"
              placeholder="Raison sociale"
              value={props?.userInfos?.companyName || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setUserInfos({
                  ...props.userInfos,
                  companyName: e.target.value,
                });
              }}
            />
          </FormControl>

          <FormControl mr="5%">
            <FormLabel htmlFor="siret" fontWeight={"normal"}>
              Siret
            </FormLabel>
            <Input
              id="siret"
              placeholder="N° Siret"
              type="number"
              value={props?.userInfos?.siret || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setUserInfos({
                  ...props.userInfos,
                  siret: parseInt(e.target.value),
                });
              }}
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="instagram" fontWeight={"normal"}>
              Instagram
            </FormLabel>
            <Input
              id="instagram"
              placeholder="@Instagram"
              value={props?.userInfos?.instagram || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setUserInfos({
                  ...props.userInfos,
                  companyName: e.target.value,
                });
              }}
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Chez le client ?
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Chez vous ?
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </Flex>
        <FormControl id="washerDescription" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Décrivez votre activité
          </FormLabel>
          <ReactQuill theme="snow" />
          <FormHelperText>
            (Vous pourrez modifier votre description plus tard)
          </FormHelperText>
        </FormControl>

        <Flex>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <Circle center={center} options={options} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </Flex>
      </SimpleGrid>
    </>
  );
};
