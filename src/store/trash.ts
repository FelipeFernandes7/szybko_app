import { faker } from "@faker-js/faker";
import { create, useStore } from "zustand";
import {
  isTuesday,
  isThursday,
  addDays,
  nextTuesday,
  nextThursday,
} from "date-fns";

type Employee = {
  id: number;
  name: string;
  jobType: string;
  avatar: string;
};

type State = {
  employees: Employee[];
  currentEmployee: Employee | null;
  currentEmployeeIndex: number;
  nextEmployee: Employee | null;
  upcomingDuties: { employee: Employee; date: Date }[];
  setUpcomingDuties: () => void;
  setTrashDuty: () => void;
  calculateNextDuty: () => void;
  updateEmployeeIndex: () => void;
  getCurrentEmployee: () => Employee | null;
  getNextEmployee: () => Employee | null;
};

const trash = create<State>((set, get) => ({
  employees: Array.from({ length: 10 }).map(() => ({
    id: Math.floor(Math.random() * 1000),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    jobType: faker.person.jobType(),
  })),
  upcomingDuties: [],
  currentEmployee: null,
  nextEmployee: null,
  currentEmployeeIndex: 0,

  updateEmployeeIndex: () => {
    const { currentEmployeeIndex, employees } = get();
    const nextIndex = (currentEmployeeIndex + 1) % employees.length;
    set({ currentEmployeeIndex: nextIndex });
  },

  getCurrentEmployee: () => {
    const { employees, currentEmployeeIndex } = get();
    return employees[currentEmployeeIndex] || null;
  },

  getNextEmployee: () => {
    const { employees, currentEmployeeIndex } = get();
    const nextIndex = (currentEmployeeIndex + 1) % employees.length;
    return employees[nextIndex] || null;
  },

  setTrashDuty: () => {
    const { updateEmployeeIndex, getCurrentEmployee, getNextEmployee } = get();
    const day = new Date();

    if (isTuesday(day) || isThursday(day)) {
      updateEmployeeIndex();
      set({
        currentEmployee: getCurrentEmployee(),
        nextEmployee: getNextEmployee(),
      });
    }
  },

  calculateNextDuty: () => {
    const { employees, currentEmployeeIndex } = get();
    const today = new Date();

    let nextDutyDay = addDays(today, 1);
    while (!isTuesday(nextDutyDay) && !isThursday(nextDutyDay)) {
      nextDutyDay = addDays(nextDutyDay, 1);
    }

    const nextIndex = (currentEmployeeIndex + 1) % employees.length;
    set({
      nextEmployee: employees[nextIndex],
    });
  },
  setUpcomingDuties: () => {
    const { employees } = get();
    const today = new Date();
    let nextDutyDay =
      isTuesday(today) || isThursday(today) ? today : nextTuesday(today);

    const upcomingDuties = employees.map((employee, index) => {
      if (index > 0) {
        nextDutyDay = isTuesday(nextDutyDay)
          ? nextThursday(nextDutyDay)
          : nextTuesday(nextDutyDay);
      }
      return {
        employee,
        date: nextDutyDay,
      };
    });

    set({ upcomingDuties });
  },
}));

export const useTrash = () => useStore(trash);
