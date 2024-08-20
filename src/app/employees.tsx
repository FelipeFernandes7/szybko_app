import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { faker } from "@faker-js/faker";
import { EmployeeList } from "@/components/EmployeeList";
import { Grid } from "@/components/Grid";
import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react-native";

type EmployeeProps = {
  id: number;
  avatar: string;
  username: string;
  jobType: string;
  email: string;
  status: boolean;
};
type TypeFilter = "present" | "absent" | "all" | "search";

export default function Employees() {
  const employees = useMemo(
    () =>
      Array.from({ length: 15 }).map<EmployeeProps>(() => ({
        id: Math.floor(Math.random() * 1000),
        avatar: faker.image.url(),
        username: faker.person.fullName(),
        jobType: faker.person.jobType(),
        email: faker.internet.email(),
        status: faker.datatype.boolean(),
      })),
    [],
  );
  const [filter, setFilter] = useState<EmployeeProps[]>(employees);
  const [pressedButton, setPressedButton] = useState<TypeFilter>("all");
  const [search, setSearch] = useState("");

  function filterUser(value: TypeFilter) {
    if (value === "present") {
      const present = employees.filter((employee) => employee.status === true);
      setPressedButton(value);
      return setFilter(present);
    }
    if (value === "absent") {
      const absent = employees.filter((employee) => employee.status === false);
      setPressedButton(value);
      return setFilter(absent);
    }
    if (value === "all") {
      setPressedButton(value);
      setSearch("");
      return setFilter(employees);
    }
    setFilter([]);
  }
  const searchEmployee = employees.filter((employee) =>
    employee.username.toLowerCase().includes(search.toLowerCase()),
  );

  function handleChange(text: string) {
    setSearch(text);
    setPressedButton("search");
    if (text === "") {
      return setFilter(employees);
    }
    return setFilter(searchEmployee);
  }

  return (
    <View className="w-full flex-1 flex-col items-center bg-neutral-900">
      <Grid columns={3} className="w-full items-center justify-center mt-2">
        <TouchableOpacity
          onPress={() => filterUser("present")}
          className={`${
            pressedButton === "present" ? "bg-violet-600" : "bg-neutral-900 "
          } w-full border border-neutral-600 items-center justify-center h-10 rounded-3xl`}
        >
          <Text className="text-white font-bold">Presente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterUser("absent")}
          className={`${
            pressedButton === "absent" ? "bg-violet-600" : "bg-neutral-900 "
          } w-full border border-neutral-600 items-center justify-center h-10 rounded-3xl`}
        >
          <Text className="text-white font-bold">Ausente</Text>
        </TouchableOpacity>
        {pressedButton !== "all" && (
          <TouchableOpacity
            onPress={() => filterUser("all")}
            className={
              "bg-neutral-900 w-full border border-neutral-600 items-center justify-center h-10 rounded-3xl"
            }
          >
            <Text className="text-white font-bold">Limpar Filtros</Text>
          </TouchableOpacity>
        )}
      </Grid>
      <View className="w-full items-center bg-neutral-900 px-4">
        <View className="w-full flex-row items-center justify-between bg-neutral-800 h-12 px-3 rounded-2xl my-3">
          <TextInput
            value={search}
            onChangeText={handleChange}
            className="h-12 text-white w-[322px]"
            placeholder="Pesquisar funcionário"
            placeholderTextColor={"gray"}
          />
          <SearchIcon size={28} color={"gray"} />
        </View>
      </View>
      <ScrollView>
        <View className="w-full flex-row flex-wrap items-center">
          {filter.map((item, index) => (
            <EmployeeList
              key={index}
              jobType={item.jobType}
              username={item.username}
              avatarUrl={item.avatar}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
