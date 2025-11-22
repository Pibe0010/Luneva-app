import { LinearGradient } from "expo-linear-gradient";

export function GradientComponent() {
  return (
    <LinearGradient
      colors={["rgb(36, 36, 36)", "rgb(115, 26, 205)", "rgb(36, 36, 36)"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        borderRadius: 20,
      }}
    />
  );
}
