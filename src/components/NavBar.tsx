import { HStack, Image } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch, SearchInput } from ".";

const NavBar = () => {
  return (
    // <HStack justifyContent={"space-between"} padding={"15px"}>
    <HStack padding={"15px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
