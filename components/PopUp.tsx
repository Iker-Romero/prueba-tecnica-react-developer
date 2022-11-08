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
  return (
    <PopUpDiv onClick={(e) => e.target === e.currentTarget && removePopUp()}>
      <div className="pop-up">
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
