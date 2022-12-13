import "./index.scss";

function AnimatedLetters({ stringArray, startIndex }) {
  return (
    <>
      <span>
        {stringArray.map((character, index) => {
          return <span className={`text-animate _${index + startIndex}`}>{character}</span>;
        })}
      </span>
    </>
  );
}

export default AnimatedLetters;
