import React, { useRef, useState } from "react";
import styles from "../pages/styles/create_test.module.scss";
import stylish from "./styles/PhotoManager.module.scss";
import uploadIcon from "../GAssets/upload_data.svg";
import Carousel from "react-multi-carousel";
import { responsive } from "./constants";
import Axios from "axios";
import { error } from "console";

const PhotoManager = (props: { displayed: boolean }) => {
  async function readUploadedIMG(inputFile) {
    const tmpFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      tmpFileReader.onerror = () => {
        tmpFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      tmpFileReader.onload = () => {
        resolve(tmpFileReader.result);
      };
      tmpFileReader.readAsDataURL(inputFile);
    });
  }

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const fileContents = await readUploadedIMG(file);
      console.log(fileContents);
    } catch (e) {
      console.warn(e.message);
    }
  };

  const [uploadedImg, setUploadedImg] = useState();
  const [upIMGs, setUpIMGs] = useState<Array<any>>([]);
  async function handleFileInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let tmp = [];
    if (fileInput.current !== null && fileInput.current.files !== null) {
      for (
        let fileIndex = 0;
        fileIndex < fileInput.current.files?.length;
        fileIndex++
      ) {
        try {
          const fileContents = await readUploadedIMG(
            fileInput.current.files[fileIndex]
          );
          tmp.push(fileContents);
          // setUploadedImg(fileContents);
        } catch (error) {
          alert(error);
        }
      }
      setUpIMGs(tmp);
    }
    console.log(upIMGs);
    Axios.post("http://localhost:4000/tests/testIMG", upIMGs)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const fileInput = useRef<HTMLInputElement>(null);

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className={stylish.carRightArrow} onClick={() => onClick()}>
        {Arrow()}
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button onClick={() => onClick()} className={stylish.carLeftArrow}>
        {Arrow()}
      </button>
    );
  };

  return (
    <div
      className={`${stylish.PhotosContainer} ${
        !props.displayed ? undefined : stylish.Hidden
      }`}
    >
      <div className={stylish.Contents}>
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
        <div className={stylish.IMGPreview}>
          <form onSubmit={handleFileInput}>
            <label>Upload image</label>
            <input
              name="testio"
              type="file"
              multiple
              accept="image/*"
              ref={fileInput}
            />
            <input type="submit" value="Submit" />
            <p>Placeholder for image upload</p>
            <Carousel
              ssr
              containerClass={stylish.Carousel}
              itemClass={stylish.Item}
              responsive={responsive}
              showDots
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {upIMGs.map((image, index) => (
                <div key={index}>
                  <img
                    key={index}
                    className={stylish.tmpIMG}
                    src={image}
                    alt="Oops"
                  />
                  <p>image</p>
                </div>
              ))}
            </Carousel>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotoManager;
const Arrow = () => (
  <svg
    width="15"
    height="26"
    viewBox="0 0 15 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 24L13 13L2 2"
      stroke="#2F4858"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
