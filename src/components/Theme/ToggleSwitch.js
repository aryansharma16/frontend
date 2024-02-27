// ToggleSwitch.js
import { useColorMode, Switch } from "@chakra-ui/react";

const ToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      colorScheme="red"
      size="lg"
    />
  );
};

export default ToggleSwitch;
