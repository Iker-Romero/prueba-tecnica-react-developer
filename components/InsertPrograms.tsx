import React from 'react';

import { ProgramType } from '../src/routes/ProgramsPage';
import StyledFigure from '../ui/StyledFigure';
import StyledSection from '../ui/StyledSection';

const InsertPrograms = React.memo(function InsertPrograms(props: {
  programs: ProgramType[];
  handleClick: (program: ProgramType) => void;
}) {
  const { programs, handleClick } = props;

  return (
    <>
      <StyledSection>
        {programs.map((program, i) => {
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
                  handleClick(program);
                }}
              >
                <img src={url} alt={`${title} poster`} />
                <figcaption>{title}</figcaption>
              </StyledFigure>
            );
          }
        })}
      </StyledSection>
    </>
  );
});

export default InsertPrograms;
