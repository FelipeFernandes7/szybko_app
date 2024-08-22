import { ReactNode, useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";

type RectangleProps = {
  children: ReactNode;
} & ViewProps;

export function Rectangle({ children, ...rest }: RectangleProps) {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    pulse();
  }, [pulseAnim]);

  const borderColor = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1)"],
  });

  const shadowOpacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.8],
  });

  const animatedStyle = {
    borderWidth: 1,
    borderColor,
    borderRadius: 15,
    padding: 10,
    shadowColor: "rgba(255, 255, 255, 1)",
    shadowOpacity,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
  };
  return (
    <Animated.View
      style={animatedStyle}
      className="w-full rounded-3xl bg-neutral-800 flex-col my-4 p-2 px-4"
    >
      {children}
    </Animated.View>
  );
}
