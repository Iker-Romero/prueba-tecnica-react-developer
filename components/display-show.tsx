import { ShowType } from '../src/API/api';

const DisplayShow = (props: { show: ShowType }) => {
  const { show } = props;

  const { Title: title, Plot: plot, Poster: poster } = show;

  return (
    <figure className="search-result">
      <figcaption>{title}</figcaption>
      <div className="show-details">
        <img src={poster} alt={`${title} poster`} />
        <p>{plot}</p>
      </div>
    </figure>
  );
};

export default DisplayShow;
