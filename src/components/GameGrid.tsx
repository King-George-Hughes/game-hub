import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameCard, GameCardContainer, GameCardSkeleton } from ".";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding={5}>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          spacingY={8}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginTop={5} marginBottom={10}>
          {isFetchingNextPage ? "Loading.." : "Load More"}
        </Button>
      )} */}
    </Box>
  );
};

export default GameGrid;
