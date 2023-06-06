import React, { Dispatch, SetStateAction } from 'react';
import { User } from "../interfaces/User.interface";
import { Washer } from '../interfaces/Washer.interface';

export interface UserInfosProps {
    userInfos:  Washer | undefined;
    setUserInfos: Dispatch<SetStateAction<Washer | undefined>>;
  }