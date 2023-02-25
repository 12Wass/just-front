import React, { Dispatch, SetStateAction } from 'react';
import { UserForm } from "./UserForm.interface";

export interface UserInfosProps {
    userInfos: UserForm | undefined;
    setUserInfos: Dispatch<SetStateAction<UserForm | undefined>>;
  }