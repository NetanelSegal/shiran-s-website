import { useEffect, useRef } from "react";

const ComponentLoader = () => {
  const ref = useRef();
  const count = useRef(0);

  useEffect(() => {
    // const id = setInterval(() => {
    //   ref.current.innerText += ".";
    // }, 2500);
    // return () => {
    //   clearInterval(id);
    // };
  }, []);
  return (
    <span ref={ref} className="text-center">
      loading
    </span>
  );
};

export default ComponentLoader;
