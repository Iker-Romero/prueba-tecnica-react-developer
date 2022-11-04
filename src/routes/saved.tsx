import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getShows, ShowType } from '../API/api';

const Saved = () => {
  const [shows, setShows] = useState<ShowType[] | undefined>([]);

  useEffect(() => {
    (async () => {
      try {
        const jsonShows = await getShows();
        setShows(jsonShows);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (shows !== undefined) {
    return (
      <>
        <h1>Saved Shows</h1>
        <div className="shows-container">
          {shows.map((show) => {
            const { Title, Poster, id } = show;

            return (
              <Link to={`/saved/${id}`} key={id}>
                <section className="show-card">
                  <img src={Poster} alt={Title} />
                </section>
              </Link>
            );
          })}
        </div>
      </>
    );
  }
};

export default Saved;
