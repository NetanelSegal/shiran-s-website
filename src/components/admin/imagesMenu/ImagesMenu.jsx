import React, { useContext, useEffect, useState } from "react";
import { urls } from "../../../constants/urls";
import { apiDelete, apiGet, apiPost } from "../../../utils/apiRequests";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const ImagesMenu = ({ handleIsOpen, imagesData, id }) => {
  const nav = useNavigate();
  const { setProjectsData, setIsLoading } = useContext(AppContext);

  const getProjects = async () => {
    try {
      const { data } = await apiGet(urls.projects);
      setProjectsData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const initialImagePath = {
    mainImage: imagesData.mainImage
      ? `${urls.assets}/${imagesData.mainImage}`
      : "",
    images: imagesData.images.map((imgPath) => `${urls.assets}/${imgPath}`),
  };

  const [imagesDisplayPath, setImagesDisplayPath] = useState(initialImagePath);
  const [imgsToDeleteData, setImgsToDeleteData] = useState();
  const [filesToUpload, setFilesToUpload] = useState();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // first delete is needed
      let deleteData = {};
      deleteData.mainImage = await deleteMainImageApi();
      deleteData.images = await deleteImgFromImgsApi();
      console.log("deleteData: ", deleteData);

      // upload images after delete
      const fd = new FormData();
      fd.append("mainImg", filesToUpload?.mainImage);
      filesToUpload?.images?.forEach((image) => {
        fd.append("projectImgs", image);
      });

      const { data } = await apiPost(`${urls.uploadImgs}/${id}`, fd);
      getProjects();
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const deleteMainImageApi = async () => {
    if (!imgsToDeleteData?.mainImage) {
      return console.log("no image data to delete from main image");
    }

    try {
      const { data } = await apiDelete(`${urls.deleteMainImage}/${id}`);
      return data;
    } catch (err) {
      if (err.response.data) {
        console.log("error: ", err.response.data);
      } else {
        console.log(err);
      }
    }
  };

  const deleteImgFromImgsApi = async () => {
    if (!imgsToDeleteData?.images) {
      return console.log("no image data to delete from images");
    }

    try {
      const { data } = await apiPost(`${urls.deleteProjectImages}/${id}`, {
        imagesToDelete: imgsToDeleteData.images,
      });
      return data;
    } catch (err) {
      if (err.response.data) {
        console.log("error: ", err.response.data);
      } else {
        console.log(err);
      }
    }
  };

  const deleteImgFromImgsState = (imgPath) => {
    setImagesDisplayPath((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img != imgPath),
    }));

    if (isImgFromDB(imgPath)) {
      setImgsToDeleteData((prev) => {
        return {
          ...prev,
          images: prev?.images
            ? [...prev.images, imgPath.split("/assets/")[1]]
            : [imgPath.split("/assets/")[1]],
        };
      });
    }
  };

  const deleteMainImgState = (imgPath) => {
    setImagesDisplayPath((prev) => ({
      ...prev,
      mainImage: "",
    }));
    if (isImgFromDB(imgPath)) {
      setImgsToDeleteData((prev) => ({ ...prev, mainImage: true }));
    }
  };

  const addImageToState = (e) => {
    if (e.target.id == "mainImageInput") {
      setImagesDisplayPath((prev) => ({
        ...prev,
        mainImage: URL.createObjectURL(e.target.files[0]),
      }));
      setFilesToUpload((prev) => ({ ...prev, mainImage: e.target.files[0] }));
    } else {
      setImagesDisplayPath((prev) => {
        const imagesDisplayPath = prev.images;
        imagesDisplayPath.push(URL.createObjectURL(e.target.files[0]));
        return {
          ...prev,
          images: imagesDisplayPath,
        };
      });

      setFilesToUpload((prev) => {
        const imagesFiles = prev?.images
          ? [...prev.images, e.target.files[0]]
          : [e.target.files[0]];
        return { ...prev, images: imagesFiles };
      });
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center backdrop-blur-[2px]">
      <div className="absolute z-10 h-full w-full bg-white opacity-50"></div>
      <div className="my-bg-secondary relative z-20 w-10/12 rounded-2xl border-2 border-black p-5">
        <h3 className="mb-5 font-bold"> העלאת תמונות</h3>
        <div className="flex justify-between rounded-xl border-2 border-black p-5">
          <h4>תמונה ראשית:</h4>
          {imagesDisplayPath?.mainImage ? (
            <div className="relative">
              <img
                id="mainImage"
                className="aspect-video w-[500px] rounded-md object-cover"
                src={imagesDisplayPath.mainImage}
                alt=""
              />
              <button
                onClick={() => {
                  deleteMainImgState(imagesDisplayPath?.mainImage);
                }}
                className="absolute bottom-2  right-2 rounded-sm bg-red-500 p-0 px-2"
              >
                מחיקה
                {/* <i className="fa-solid fa-xmark"></i> */}
              </button>
            </div>
          ) : (
            <label className="text-balck flex aspect-video w-[500px] items-center justify-center rounded-md border-2 border-black bg-slate-200 text-5xl">
              <input
                onClick={(e) => (e.target.value = null)}
                onChange={addImageToState}
                className="uploadImage"
                type="file"
                id="mainImageInput"
              />
              <i className="fa-solid fa-plus"></i>
            </label>
          )}
        </div>
        {/* images container */}
        <div className="my-2 flex gap-2 rounded-xl border-2 border-black p-5">
          {imagesDisplayPath?.images.map((e) => (
            <div key={e} className="relative">
              <img
                name={e}
                className="aspect-video w-[200px] rounded-md object-cover"
                src={e}
                alt=""
              />
              <button
                onClick={() => {
                  deleteImgFromImgsState(e);
                }}
                className="absolute bottom-2  right-2 rounded-sm bg-red-500 p-0 px-2"
              >
                מחיקה
                {/* <i className="fa-solid fa-xmark"></i> */}
              </button>
            </div>
          ))}
          {/* add image button */}
          <label
            id="images"
            className="flex  aspect-video w-[200px] items-center justify-center rounded-md border-2 border-black bg-slate-200 text-2xl"
          >
            <input
              onClick={(e) => (e.target.value = null)}
              onChange={addImageToState}
              className="uploadImage"
              type="file"
              name=""
              id="imagesInput"
            />
            <i className="fa-solid fa-plus"></i>
          </label>
        </div>
        {/* buttons container */}
        <div className="flex justify-end gap-2">
          <button onClick={onSubmit} className="my-bg-primary ">
            שמירה ויציאה
          </button>
          <button className="bg-red-500 " onClick={handleIsOpen}>
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesMenu;

const isImgFromDB = (imgPath) => {
  return !imgPath.startsWith("blob:");
};
