import './ButtonImage.css';

export default function ButtonImage({ 
  image, 
  altText = 'Button Image', 
  onClick 
}) {
  const handleClick = () => {
    if (onClick)  onClick(image);
  };

  return (
    <button className="button-image" onClick={handleClick}>
      <img src={image} alt={altText} className="button-image-img" />
    </button>
  );
}