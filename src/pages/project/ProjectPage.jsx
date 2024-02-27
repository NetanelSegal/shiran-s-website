import FavoriteProjectsCarousel from "../../shared/favoriteProjectsCarousel/FavoriteProjectsCarousel";

const ProjectPage = ({ data }) => {
  return (
    <div className="horizontal-page-padding pt-14">
      {data.title}
      <img width="100%" src={data.mainImage} alt="" />
    </div>
  );
};

export default ProjectPage;
