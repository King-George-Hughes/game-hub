import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOder: string) => void;
  sortOder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOder = sortOrders.find((order) => order.value === sortOder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => {
          return (
            <MenuItem
              key={sort.value}
              value={sort.value}
              onClick={() => onSelectSortOrder(sort.value)}
            >
              {sort.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
