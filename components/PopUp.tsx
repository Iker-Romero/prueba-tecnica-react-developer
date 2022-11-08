import { ProgramType } from '../src/routes/ProgramsPage';
import PopUpDiv from '../ui/PopUpDiv';

const PopUp = (props: { program: ProgramType; removePopUp: () => void }) => {
  const { program, removePopUp } = props;

  const {
    title,
    description,
    releaseYear,
    images: {
      'Poster Art': { url },
    },
  }: ProgramType = program;
  console.log(program);
  return (
    <PopUpDiv
      onClick={() => {
        removePopUp();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="pop-up"
      >
        {console.log(program)}
        <img src={url} alt={`${title} poster`} />
        <section>
          <h1>{title}</h1>
          <h2>({releaseYear})</h2>
          <p>{description}</p>
        </section>
      </div>
    </PopUpDiv>
  );
};

export default PopUp;
