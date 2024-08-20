import { Children } from "react";
import {
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
  Dimensions,
} from "react-native";

interface GridProps extends ViewProps {
  columns: number;
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

export function Grid({
  columns,
  gap = 10,
  style,
  children,
  ...props
}: GridProps) {
  const screenWidth = Dimensions.get("window").width;
  const columnWidth = screenWidth / columns - gap;

  return (
    <View
      style={[{ flexDirection: "row", flexWrap: "wrap" }, style]}
      {...props}
    >
      {Children.map(children, (child) => (
        <View style={{ flexBasis: columnWidth, padding: gap / 2 }}>
          {child}
        </View>
      ))}
    </View>
  );
}
