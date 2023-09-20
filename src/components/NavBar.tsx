import { HStack, Image } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch } from ".";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"15px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
