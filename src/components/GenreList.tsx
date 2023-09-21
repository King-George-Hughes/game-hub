import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <h5 key={genre.id}>{genre.name}</h5>
      ))}
    </div>
  );
};

export default GenreList;
