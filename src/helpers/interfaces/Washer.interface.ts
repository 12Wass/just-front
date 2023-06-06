import { User } from "./User.interface";

export interface Washer extends User {
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