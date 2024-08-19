import { StyleSheet, View, ScrollView } from "react-native";
import { faker } from "@faker-js/faker";
import { EmployeeList } from "@/components/EmployeeList";

export default function Employees() {
  const employee = Array.from({ length: 15 }).map(() => {
    return {
      id: Math.floor(Math.random() * 1000),
      avatar: faker.image.url(),
      username: faker.person.fullName(),
      jobType: faker.person.jobType(),
      email: faker.internet.email(),
      status: faker.datatype.boolean(),
    };
  });
  return (
    <View className="w-full flex-1 flex-col items-center bg-black">
      <ScrollView>
        <View className="w-full flex-row flex-wrap items-center">
          {employee.map((item, index) => (
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

const styles = StyleSheet.create({});
