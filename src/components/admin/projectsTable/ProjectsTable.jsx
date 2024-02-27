import { Link } from "react-router-dom";
import ProjectRow from "../projectRow/ProjectRow";

const ProjectsTable = ({ projectsData, categoriesCodeMap }) => {
  return (
    <table className="relative mb-5 w-full rounded-2xl border">
      <thead>
        <tr className="bg-gray-700 text-white">
          <th className="p-2">כותרת</th>
          <th className="p-2">תיאור</th>
          <th className="p-2">קטגוריות</th>
          <th className="p-2">מיקום</th>
          <th className="p-2">לקוח</th>
          <th className="p-2">סטטוס</th>
          <th className="p-2">שטח בניה</th>
          <th className="p-2">תמונה ראשית</th>
          <th className="p-2">מועדף</th>
          <th className="p-2">-</th>
        </tr>
      </thead>
      <tbody>
        {projectsData.map((p) => (
          <ProjectRow
            key={p.title + " table row"}
            data={p}
            catsObj={categoriesCodeMap}
          />
        ))}
        <tr className="text-right">
          <th className="p-2 text-center">
            <button className="my-bg-secondary text-black">
              <Link to={"add-project"}>הוספת פרוייקט</Link>
            </button>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProjectsTable;
