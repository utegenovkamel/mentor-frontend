import React from 'react';
import {Container} from "@mantine/core";
import {UserCard} from "~/modules";

export const UsersPage = () => {
  return (
    <Container>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </Container>
  );
};

