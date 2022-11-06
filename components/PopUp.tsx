import { ProgramType } from '../src/routes/ProgramsPage';
import PopUpDiv from '../ui/PopUpDiv';

const PopUp = (props: { program: ProgramType }) => {
  console.log('POPUP');
  const { program } = props;

  const {
    title,
    description,
    releaseYear,
    images: {
      'Poster Art': { url },
    },
  }: ProgramType = program;

  return (
    <PopUpDiv>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{releaseYear}</h2>
      <img src={url} alt={`${title} poster`} />
    </PopUpDiv>
  );
};

export default PopUp;
