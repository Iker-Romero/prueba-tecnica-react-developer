import { useEffect, useRef, useState } from 'react';

import InsertPrograms from '../../components/InsertPrograms';
import PopUp from '../../components/PopUp';
import StyledFigure from '../../ui/StyledFigure';
import StyledSection from '../../ui/StyledSection';
import sortByTitle from '../../utilities/sortByTitle';
import getData from '../API/api';

export interface ProgramType {
  title: string;
  description: string;
  programType: string;
  images: ImagesType;
  releaseYear: number;
}

interface ImagesType {
  'Poster Art': PosterArtType;
}

interface PosterArtType {
  url: string;
  width: number;
  height: number;
}

let popUpProgram: ProgramType;

const ProgramsPage = (props: { type: 'series' | 'movies' }) => {
  console.log('ProgramsPage');

  const { type } = props;

  const [programs, setPrograms] = useState([]);

  // const [popUpState, setPopUpState] = useState(false);

  const [popUpProgram, setPopUpProgram] = useState<ProgramType>();
  // const figureRef = useRef(null);

  useEffect(() => {
    (async () => {
      const data = await getData(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );

      const programsByType = data.entries.filter((program: ProgramType) => {
        if (type === 'movies') {
          return program.programType === 'movie' && program.releaseYear >= 2010;
        }
        return program.programType === type;
      });

      programsByType.sort((a: ProgramType, b: ProgramType) => sortByTitle(a, b));

      setPrograms(programsByType);
    })();
  }, []);

  const handleClick = (program: ProgramType) => {
    console.log('click');
    if (program) setPopUpProgram(program);
  };

  return (
    <>
      <h1>Popular {type}</h1>
      {/* {popUpState && console.log(popUpProgram)}
      {console.log(popUpProgram)} */}
      <InsertPrograms programs={programs} handleClick={handleClick} />
      {popUpProgram && <PopUp program={popUpProgram} />}
    </>
  );
};

export default ProgramsPage;
