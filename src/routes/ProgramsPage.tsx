import { useEffect, useState } from 'react';

import InsertPrograms from '../../components/InsertPrograms';
import PopUp from '../../components/PopUp';
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

let isLoading = true;

const ProgramsPage = (props: { type: 'series' | 'movies' }) => {
  const { type } = props;

  const [programs, setPrograms] = useState([]);

  const [popUpProgram, setPopUpProgram] = useState<ProgramType>();

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

      isLoading = false;

      setPrograms(programsByType);
    })();
  }, []);

  const handleClick = (program: ProgramType) => {
    console.log(program);
    if (program) setPopUpProgram(program);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Popular {type}</h1>
      <InsertPrograms programs={programs} handleClick={handleClick} />
      {console.log(popUpProgram)}
      {popUpProgram && <PopUp program={popUpProgram} />}
    </>
  );
};

export default ProgramsPage;
