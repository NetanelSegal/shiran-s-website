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
    mainImage: imagesData?.mainImage
      ? `${urls.assets}/${imagesData?.mainImage}`
      : "",
    images:
      imagesData?.images?.map((imgPath) => `${urls.assets}/${imgPath}`) || [],
    plans:
      imagesData?.plans?.map((imgPath) => `${urls.assets}/${imgPath}`) || [],
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
      deleteData.plansAndImages = await deleteImgFromImgsApi();
      console.log("deleteData: ", deleteData);

      // upload images after delete
      const fd = new FormData();
      fd.append("mainImg", filesToUpload?.mainImage);
      filesToUpload?.images?.forEach((image) => {
        fd.append("projectImgs", image);
      });

      filesToUpload?.plans?.forEach((image) => {
        fd.append("projectPlans", image);
      });

      const { data } = await apiPost(`${urls.uploadImgs}/${id}`, fd);
      console.log(data);
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
    if (!imgsToDeleteData?.images && !imgsToDeleteData?.plans) {
      return console.log("no image or plan data to delete from project");
    }
    const body = {
      imagesToDelete: imgsToDeleteData.images || false,
      plansToDelete: imgsToDeleteData.plans || false,
    };
    try {
      const { data } = await apiPost(`${urls.deleteProjectImages}/${id}`, body);
      return data;
    } catch (err) {
      if (err.response.data) {
        console.log("error: ", err.response.data);
      } else {
        console.log(err);
      }
    }
  };

  const deleteImgFromImgsState = (imgPath, e) => {
    const fieldToDeleteFrom =
      e.target.name == "btnDeleteImages" ? "images" : "plans";

    console.log(fieldToDeleteFrom);
    setImagesDisplayPath((prev) => ({
      ...prev,
      [fieldToDeleteFrom]: prev[fieldToDeleteFrom].filter(
        (img) => img != imgPath,
      ),
    }));

    if (isImgFromDB(imgPath)) {
      setImgsToDeleteData((prev) => {
        return {
          ...prev,
          [fieldToDeleteFrom]: prev?.[fieldToDeleteFrom]
            ? [...prev[fieldToDeleteFrom], imgPath.split("/assets/")[1]]
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
    } else if (e.target.id == "imagesInput") {
      setImagesDisplayPath((prev) => ({
        ...prev,
        images: [...prev.images, URL.createObjectURL(e.target.files[0])],
      }));

      setFilesToUpload((prev) => {
        const imagesFiles = prev?.images
          ? [...prev.images, e.target.files[0]]
          : [e.target.files[0]];
        return { ...prev, images: imagesFiles };
      });
    } else if (e.target.id == "plansInput") {
      setImagesDisplayPath((prev) => ({
        ...prev,
        plans: [...prev.plans, URL.createObjectURL(e.target.files[0])],
      }));

      setFilesToUpload((prev) => {
        const plansFiles = prev?.plans
          ? [...prev.plans, e.target.files[0]]
          : [e.target.files[0]];
        return { ...prev, plans: plansFiles };
      });
    }
  };

  // useEffect(() => {
  //   console.log("imagesDisplayPath: ", imagesDisplayPath);
  //   console.log("imgsToDeleteData: ", imgsToDeleteData);
  //   console.log("filesToUpload: ", filesToUpload);
  // }, [imagesDisplayPath, imgsToDeleteData, filesToUpload]);

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
        <div className="my-2 rounded-xl border-2 border-black p-5">
          <p>תמונות פרוייקט</p>
          <div className="mt-2 flex gap-2">
            {imagesDisplayPath?.images.map((p) => (
              <div key={p} className="relative">
                <img
                  name={p}
                  className="aspect-video w-[200px] rounded-md object-cover"
                  src={p}
                  alt=""
                />
                <button
                  name="btnDeleteImages"
                  onClick={(e) => {
                    deleteImgFromImgsState(p, e);
                  }}
                  className="absolute bottom-2  right-2 rounded-sm bg-red-500 p-0 px-2"
                >
                  מחיקה
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
        </div>
        <div className="my-2 rounded-xl border-2 border-black p-5">
          <p>תוכניות</p>
          <div className="mt-2 flex gap-2">
            {imagesDisplayPath?.plans?.map((p) => (
              <div key={p} className="relative">
                <img
                  name={p}
                  className="aspect-video w-[200px] rounded-md object-cover"
                  src={p}
                  alt=""
                />
                <button
                  name="btnDeletePlans"
                  onClick={(e) => {
                    deleteImgFromImgsState(p, e);
                  }}
                  className="absolute bottom-2  right-2 rounded-sm bg-red-500 p-0 px-2"
                >
                  מחיקה
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
                id="plansInput"
              />
              <i className="fa-solid fa-plus"></i>
            </label>
          </div>
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
