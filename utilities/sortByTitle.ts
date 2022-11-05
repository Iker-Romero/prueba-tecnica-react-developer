import { ProgramType } from '../src/routes/ProgramsPage';

const sortByTitle = (a: ProgramType, b: ProgramType) =>
  a.title.toLowerCase().localeCompare(b.title.toLowerCase());

export default sortByTitle;
