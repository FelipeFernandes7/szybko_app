import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { faker } from "@faker-js/faker";
import { EmployeeList } from "@/components/EmployeeList";

export default function Employees() {
  const employee = Array.from({ length: 15 }).map(() => {
    return {
      id: Math.floor(Math.random() * 1000),
      avatar: faker.image.url(),
      username: faker.person.firstName(),
      email: faker.internet.email(),
      status: faker.datatype.boolean(),
    };
  });
  return (
    <View className="w-full flex-1 items-center">
      <View className="w-full flex-col justify-center items-center mt-4">
        <ScrollView>
          {employee.map((item, index) => (
            <EmployeeList
              key={index}
              username={item.username}
              avatarUrl={item.avatar}
              status={item.status}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
