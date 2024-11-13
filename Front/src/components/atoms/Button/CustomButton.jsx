import './CustomButton.css' 
import { Link } from 'react-router-dom';

export default function CustomButton({ text, redirect }) {
  return (
    <Link to={redirect}>
      <button>
          { text }
      </button>
    </Link>
  )
}
