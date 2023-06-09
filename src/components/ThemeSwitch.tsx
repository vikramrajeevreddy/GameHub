import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text style={{ whiteSpace: "pre" }}>Dark Mode</Text>
    </HStack>
  );
};

export default ThemeSwitch;
