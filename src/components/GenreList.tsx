import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { generes: genres } = useGenres();

  return (
    <ul>
      {genres.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
