
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import styles from  "./style.css";


export const ReactPhotoGallery = ({images}) => {
    return (

        // <div className="flex justify-center items-center bg-cool-gray-900">
            <ImageGallery additionalClass={styles}  items={images} />
        // </div>
    )

}