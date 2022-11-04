import { useState } from 'react';
import { Link } from 'react-router-dom';

import DisplayShow from '../../components/display-show';
import { postShow, ShowType } from '../API/api';

const ShowForm = () => {
  const [show, setShow] = useState<ShowType>({
    Title: 'Spider-Man',
    Year: '2002',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Sa Raimi',
    Plot: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    Type: 'movie',
    BoxOffice: '$407,022,860',
    id: 0,
  });

  return (
    <>
      <h1>Add a New Show</h1>
      <div className="show-form-container">
        <section className="show-form-section">
          <h2>Form</h2>
          <form action="" autoComplete="off">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                onChange={(e) => {
                  setShow({ ...show, Title: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                onChange={(e) => {
                  setShow({ ...show, Year: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="runtime">Runtime</label>
              <input
                type="text"
                id="runtime"
                onChange={(e) => {
                  setShow({ ...show, Runtime: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                onChange={(e) => {
                  setShow({ ...show, Genre: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="director">Director</label>
              <input
                type="text"
                id="director"
                onChange={(e) => {
                  setShow({ ...show, Director: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="plot">Plot</label>
              <textarea
                id="plot"
                onChange={(e) => {
                  setShow({ ...show, Plot: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                onChange={(e) => {
                  setShow({ ...show, Poster: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                onChange={(e) => {
                  setShow({ ...show, Type: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="boxOffice">BoxOffice</label>
              <input
                type="text"
                id="boxOffice"
                onChange={(e) => {
                  setShow({ ...show, BoxOffice: e.target.value });
                }}
              />
            </div>
          </form>
          <Link to="/saved">
            <button
              className="submit-form"
              style={{ backgroundColor: '#db0000' }}
              onClick={() => postShow(show)}
            >
              CREATE
            </button>
          </Link>
        </section>
        <section className="show-preview-section">
          <h2>Preview</h2>
          <DisplayShow show={show} />
        </section>
      </div>
    </>
  );
};

export default ShowForm;
