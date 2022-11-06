import { ProgramType } from '../src/routes/ProgramsPage';
import PopUpDiv from '../ui/PopUpDiv';

const PopUp = (program: ProgramType) => {
  console.log('POPUP');
  const {
    title,
    description,
    releaseYear,
    images: {
      'Poster Art': { url },
    },
  }: ProgramType = program;
  return <PopUpDiv>HOLA</PopUpDiv>;
};

export default PopUp;
