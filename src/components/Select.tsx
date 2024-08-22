import { Picker, PickerProps } from "@react-native-picker/picker";
import { useRef } from "react";

type Options = {
  label: string;
  value: string;
};

type SelectProps = {
  title?: string;
  value: string;
  options: Options[];
  onChange: (itemValue: any, itemIndex: number) => void;
} & PickerProps;

export function Select({
  title,
  value,
  options,
  onChange,
  ...rest
}: SelectProps) {
  const pickerRef = useRef<Picker<string | null>>(null);

  const open = () => pickerRef.current?.focus();
  const close = () => pickerRef.current?.blur();

  return (
    <Picker
      {...rest}
      mode={"dropdown"}
      dropdownIconColor={"#fff"}
      ref={pickerRef}
      selectedValue={value}
      onValueChange={onChange}
    >
      {options.map((item, index) => (
        <Picker.Item
          key={index}
          label={item.label}
          value={item.value}
          style={{
            color: "gray",
            fontWeight: "600",
            backgroundColor: "#171717",
            fontSize: 12,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 16,
          }}
        />
      ))}
    </Picker>
  );
}
