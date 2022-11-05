import { useEffect, useState } from 'react';

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

import getData from '../API/api';
const ProgramsPage = (props: { type: string }) => {
  const { type } = props;

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );

      const programsByType = data.entries.filter((program: ProgramType) => {
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
          <figure key={title}>
            <img src="" alt="" />
            <figcaption>{}</figcaption>
          </figure>
        );
      })}
    </>
  );
};

export default ProgramsPage;
