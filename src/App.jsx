import "./appStyle/App.css";
import NavbarManager from "./components/navbar/NavbarManager";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavbarManager />
      <Home />
    </>
  );
}

export default App;

{
  /* <h1>ברוכים הבאים! h1</h1>
      <h2>ברוכים הבאים! h2</h2>
      <h3>ברוכים הבאים! h3</h3>
      <h4>ברוכים הבאים! h4</h4>
      <h5>ברוכים הבאים! h5</h5>
      <h6>ברוכים הבאים! h6</h6>
      <p>p: ברוכים הבאים! h6</p>
      <span>span: ברוכים הבאים! h6</span>
      <div className="flex">
        <div className="my-bg-primary flex h-64 w-64 items-center justify-center">
          <div className="my-bg-secondary h-32 w-32"></div>
        </div>
        <div className="my-bg-secondary flex h-64 w-64 items-center justify-center">
          <div className="my-bg-primary h-32 w-32"></div>
        </div>
      </div>
      <div className="my-2 flex justify-center gap-3">
        <button className="my-btn-secondery">תלחצי עלי</button>
        <button className="my-btn-primary">תלחצי עלי</button>
      </div>
      <img
        style={{ backgroundColor: "black" }}
        width={"200px"}
        src={logoSrc}
        alt=""
      /> */
}
