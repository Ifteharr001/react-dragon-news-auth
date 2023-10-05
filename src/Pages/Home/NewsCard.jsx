import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({news}) => {
    // eslint-disable-next-line react/prop-types
    const {title,  image_url, details, _id} = news;
    return (
      <div className="card card-compact mb-16 border-b-2 rounded-none bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
            // eslint-disable-next-line react/prop-types
            details.length > 200
            // eslint-disable-next-line react/prop-types
            ? <p>{details.slice(0, 200)} <Link 
            className="text-blue-700 font-bold"
            to={`/news/${_id}`}
            >Read More...</Link></p> 
            : <p>{details}</p>
          }
        </div>
      </div>
    );
};

export default NewsCard;