import { StyleSheet } from "react-native";
import { StyledComponent } from "tailwindcss-react-native";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export function Test() {
  return (
    <TailwindProvider platform="native">
      <StyledComponent tw="container" component={View}>
        <StyledComponent tw="font-bold" component={Text}>
          Hello world!
        </StyledComponent>
      </StyledComponent>
    </TailwindProvider>
  );
}
Object.assign(
  globalThis.tailwindcss_react_native_style,
  StyleSheet.create({
    container: {
      width: "100%",
    },
    container_0: {
      maxWidth: 640,
    },
    container_1: {
      maxWidth: 768,
    },
    container_2: {
      maxWidth: 1024,
    },
    container_3: {
      maxWidth: 1280,
    },
    container_4: {
      maxWidth: 1536,
    },
    "font-bold": {
      fontWeight: "700",
    },
  })
);
Object.assign(globalThis.tailwindcss_react_native_media, {
  container: [
    "(min-width: 640px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)",
    "(min-width: 1536px)",
  ],
});