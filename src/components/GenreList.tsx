import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={2} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  src={getCroppedImage(genre.image_background)}
                  boxSize="50px"
                  borderRadius={8}
                  objectFit={"cover"}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  variant={"link"}
                  fontSize={"lg"}
                  key={genre.id}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  // onClick={() => console.log(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
