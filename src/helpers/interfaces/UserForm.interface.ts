export interface UserForm {
    pseudo?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmation?: string;
  
    address?: string;
    postalCode?: number;
  
    description?: string | undefined;
    siret?: number | undefined;
    companyName?: string | undefined;
  }