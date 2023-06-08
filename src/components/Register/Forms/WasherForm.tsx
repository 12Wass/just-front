import {
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserInfosProps } from "../../../helpers/props/UserInfos.props";
import RenderMap from "../../GoogleMap/GoogleMap";

export const WasherForm = (props: UserInfosProps) => {
  //eslint-disable-next-line
  const [map, setMap] = useState(null);
  const [radiusSlider, setRadiusSlider] = useState(0);

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
    radius: radiusSlider * 500,
    zIndex: 1,
  };

  /* Google Map setup */
  const center = new google.maps.LatLng(
    parseFloat(props.userInfos?.addressPos?.lat as string),
    parseFloat(props.userInfos?.addressPos?.lng as string)
  );
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
                  instagram: e.target.value,
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
            <Switch
              id="atClientsHome"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setUserInfos({
                  ...props.userInfos,
                  atClientsHome: e.target.checked,
                });
              }}
            />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Chez vous ?
            </FormLabel>
            <Switch
              id="atProHome"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setUserInfos({
                  ...props.userInfos,
                  atProHome: e.target.checked,
                });
              }}
            />
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
        <Text>Vous pouvez couvrir une zone de 100 kilomètres maximum.</Text>
        <Text>Zone couverte : {radiusSlider} kilomètres</Text>
        <Flex>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={radiusSlider}
            onChange={(val) => setRadiusSlider(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>

        <Flex>
          <RenderMap center={center} setMap={setMap} options={options} />
        </Flex>
      </SimpleGrid>
    </>
  );
};
