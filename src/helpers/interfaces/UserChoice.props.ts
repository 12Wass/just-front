import React, { Dispatch, SetStateAction } from 'react';

export interface UserChoiceProps {
    userChoice: string;
    setUserChoice: Dispatch<SetStateAction<string>>;
  }