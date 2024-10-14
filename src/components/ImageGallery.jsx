import ImageCard from './ImageCard';
import css from './ImageGallery.module.css';


export default function ImageGallery({ images, onImageClick }) {
    return (
      images.length > 0 && (
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} onClick={() => onImageClick(image)} className={css.galleryItem}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
      )
    );
  }