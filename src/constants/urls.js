const MAIN_URL = "http://localhost:3001"

export const urls = {
    projects: MAIN_URL + "/projects",
    singleProject: MAIN_URL + "/projects/single",
    updateProject: MAIN_URL + "/projects",
    uploadImgs: MAIN_URL + "/projects/uploadImgs",
    deleteMainImage: MAIN_URL + "/projects/deleteMainImage",
    deleteProjectImages: MAIN_URL + "/projects/deleteImages",
    users: MAIN_URL + "/users",
    checkUserAuth: MAIN_URL + "/users" + "/checkAuth",
    signup: MAIN_URL + "/users" + "/register",
    login: MAIN_URL + "/users" + "/login",
    categories: MAIN_URL + "/categories",
    assets: MAIN_URL + "/assets",
}