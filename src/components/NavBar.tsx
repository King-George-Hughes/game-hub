import { HStack, Image } from "@chakra-ui/react";
import { logo } from "../assets";
import { ColorModeSwitch, SearchInput } from ".";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // <HStack justifyContent={"space-between"} padding={"15px"}>
    <HStack padding={"15px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
