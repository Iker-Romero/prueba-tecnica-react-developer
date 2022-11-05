import { useEffect, useState } from 'react';

import StyledFigure from '../../ui/StyledFigure';
import getData from '../API/api';

export interface ProgramType {
  title: string;
  description: string;
  programType: string;
  images: ImagesType;
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

  useEffect(() => {
    (async () => {
      const data = await getData(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );

      const programsByType = data.entries.filter((program: ProgramType) => {
        if (type === 'movies') {
          return program.programType === 'movie';
        }
        return program.programType === type;
      });

      setPrograms(programsByType);
    })();
  });

  return (
    <>
      <h1>Popular {type}</h1>
      {programs.map((program) => {
        const { title }: { title: string } = program;

        return (
          <StyledFigure key={title}>
            <img src="" alt="" />
            <figcaption>{title}</figcaption>
          </StyledFigure>
        );
      })}
    </>
  );
};

export default ProgramsPage;
