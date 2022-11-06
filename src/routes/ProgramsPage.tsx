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

const ProgramsPage = (props: { type: 'series' | 'movies' }) => {
  const { type } = props;

  const [programs, setPrograms] = useState([]);

  const [popUpState, setPopUpState] = useState(false);
  // const [popUpProgram, setPopUpProgram] = useState(false);
  const figureRef = useRef(null);

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

  let popUpProgram;
  if (popUpState) {
    console.log(popUpProgram);
  }

  return (
    <>
      <h1>Popular {type}</h1>
      {popUpState && console.log(popUpProgram)}
      {console.log(popUpProgram)}
      {console.log('me renderizo')}
      <InsertPrograms programs={programs} />
      {/* {programs.map((program, i) => {
          while (i < 20) {
            const {
              title,
              images: {
                'Poster Art': { url },
              },
            }: ProgramType = program;

            return (
              <StyledFigure
                key={title}
                onClick={() => {
                  popUpProgram = program;
                  console.log(program);
                  console.log(popUpProgram);
                  setPopUpState(true);
                }}
                ref={figureRef}
              >
                <img src={url} alt={`${title} poster`} />
                <figcaption>{title}</figcaption>
              </StyledFigure>
            );
          }
        })} */}
    </>
  );
};

export default ProgramsPage;
