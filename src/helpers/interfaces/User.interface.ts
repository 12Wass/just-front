import { GoogleMapProps } from "@react-google-maps/api";
import { Washer } from "./Washer.interface"
import { Address } from "./Address.interface"

export interface User extends Address {
    pseudo?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmation?: string;

  }