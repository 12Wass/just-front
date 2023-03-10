import { GoogleMapProps } from "@react-google-maps/api";

export interface UserForm {
    pseudo?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmation?: string;
  
    address?: {
      lat: string,
      lng: string,
    };
    postalCode?: number;

    /* Washer */
    description?: string | undefined;
    siret?: number | undefined;
    companyName?: string | undefined;

    instagram?: string | undefined;
    professionnal?: boolean | undefined;

    /* Still need to figure out how this will be implemented */
    // subscription?: boolean | undefined;
    // cash?: boolean | undefined;

    atClientsHome?: boolean | undefined;
    atProHome?: boolean | undefined;

    radius?: number | undefined;
  }