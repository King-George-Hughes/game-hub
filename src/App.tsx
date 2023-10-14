import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {
  GameGrid,
  GenreList,
  NavBar,
  PlatformSelector,
  SortSelector,
} from "./components";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingLeft={10} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
            // selectedGenre={gameQuery.genre}
            // selectedPlatform={gameQuery.platform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
