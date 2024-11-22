import './ButtonImage.css';
import { Link } from 'react-router-dom';

export default function ButtonImage({ 
  image, 
  redirect, 
  altText = 'Button Image', 
  onClick 
}) {
  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick(); 
    }
  };

  return (
    <Link to={redirect} className="button-image-link" onClick={handleClick}>
      <button className="button-image">
        <img src={image} alt={altText} className="button-image-img" />
      </button>
    </Link>
  );
}