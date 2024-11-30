import './CustomButton.css';
import { Link } from 'react-router-dom';

export default function CustomButton({ text, onClick,  redirect}) {
  return (
    <Link to={redirect}>
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
}