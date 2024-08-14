import { faker } from "@faker-js/faker";
import { createContext, ReactNode } from "react";

type EmployeeContextType = {};

type EmployeeProviderProps = {
  children: ReactNode;
};

const EmployeeContext = createContext({} as EmployeeContextType);

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const employee = Array.from({ length: 10 }).map(() => {
    return {
      id: Math.floor(Math.random() * 1000),
      avatar: faker.image.avatar(),
      username: faker.person.firstName(),
      email: faker.internet.email(),
      status: faker.datatype.boolean(),
    };
  });

  return (
    <EmployeeContext.Provider
      value={{ name: "John Doe", age: 30, position: "Software Developer" }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
