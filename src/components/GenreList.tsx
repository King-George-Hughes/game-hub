import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="50px"
                borderRadius={8}
              />
              <Text fontSize={"lg"} key={genre.id}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
