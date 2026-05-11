import React, { createContext, useEffect, useState } from "react";

export type User = {
  name: string;
  age: number;
  isMarried: boolean;
};

type UserContextType = {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: number) => void;
  deleteUser: (id: number) => void;
};

const initialState = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(initialState);

type Props = {
  children: React.ReactNode;
};

export function ContextUserProvider({ children }: Props) {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([{ name: "john Doe", age: 23, isMarried: false }]);
  }, []);

  function addUser(newUser: User): void {
    console.log(newUser);
  }

  function deleteUser(id: number): void {
    console.log(id);
  }

  function updateUser(id: number): void {
    console.log(id);
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
