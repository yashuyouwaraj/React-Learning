interface GameInfo {
  games: {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
  };
}

const GamesInfo = ({ games }: GameInfo) => {
  const { gameName, gameRating, gameGenre, gameLanguages } = games;
  return (
    <div>
      <h1>Game Name: {gameName}</h1>
      <p>Game Rating: {gameRating}</p>
      <p>Game Genre: {gameGenre}</p>
      <ul>
        Languages:
        {gameLanguages.map((lang: string) => (
          <li>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesInfo;
