import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <h5 key={genre.id}>{genre.name}</h5>
      ))}
    </div>
  );
};

export default GenreList;
