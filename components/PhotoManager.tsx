import React from "react";
import styles from "../pages/styles/create_test.module.scss";
import stylish from "./styles/PhotoManager.module.scss";
import uploadIcon from "../GAssets/upload_data.svg";

const PhotoManager = ({}) => {
  return (
    <div className={styles.PhotoManager}>
      <div className={stylish.headerIconContainer}>
        <h3>Uploaded photos</h3>
        <label htmlFor="photoUpload">
          <input type="file" name="photoUpload" />
          <img
            src={uploadIcon}
            alt="Upload"
            className={stylish.uploadIcon}
            onClick={(e) => console.log(e)}
          />
        </label>
      </div>
      <div className={stylish.PhotosContainer}>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </div>
    </div>
  );
};

export default PhotoManager;
