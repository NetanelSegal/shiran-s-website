import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SvgShape = ({ i, setAreInView }) => {
  const shapeRef = useRef(null);

  const svg1 = (
    <svg
      ref={shapeRef}
      overflow="visible"
      width="33.844"
      height="33.843"
      viewBox="0 0 33.844 33.843"
    >
      <path
        id="_1"
        data-name="1"
        d="M16.922,33.843A16.922,16.922,0,1,1,33.843,16.922,16.922,16.922,0,0,1,16.922,33.843Z"
        fill="#ccbebc"
      />
    </svg>
  );

  const svg2 = (
    <svg
      ref={shapeRef}
      overflow="visible"
      width="33.42"
      height="33.569"
      viewBox="0 0 33.42 33.569"
    >
      <path
        id="_2"
        data-name="2"
        d="M1100.654,988.042c2.221,3.313.932,26.848-1.226,30.024s-27.9.52-29.055-1.194-3.169-26.709-1.06-28.83S1098.433,984.729,1100.654,988.042Z"
        transform="translate(-1068.392 -985.98)"
        fill="#ccbebc"
      />
    </svg>
  );

  const svg3 = (
    <svg
      ref={shapeRef}
      overflow="visible"
      width="30.572"
      height="32.613"
      viewBox="0 0 30.572 32.613"
    >
      <path
        id="_3"
        data-name="3"
        d="M1097.974,990.185c-1.922,2.28-.792,15.586-1.253,23.6-.183,3.185.228,6.215,1.253,6.748,2.935,1.524,25.685,1.6,28.49,0,2.15-1.23-.3-13.27-4.942-19-5.084-6.277-8.548-7.553-11.576-9.189C1103.731,988.983,1099.684,988.156,1097.974,990.185Z"
        transform="translate(-1096.68 -989.089)"
        fill="#ccbebc"
      />
    </svg>
  );

  const svg4 = (
    <svg
      ref={shapeRef}
      overflow="visible"
      width="50.692"
      height="24.044"
      viewBox="0 0 50.692 24.044"
    >
      <path
        id="_4"
        data-name="4"
        d="M1146.664,1021.278c-2.314-1.125-46.96-1.125-49.273,0-1.938.943.273,10.175,4.453,14.568a26.8,26.8,0,0,0,10.433,7.048c4.592,2.112,14.908,2.112,19.5,0a26.8,26.8,0,0,0,10.433-7.048C1146.39,1031.453,1148.6,1022.221,1146.664,1021.278Z"
        transform="translate(-1096.681 -1020.434)"
        fill="#ccbebc"
      />
    </svg>
  );

  const svg5 = (
    <svg
      ref={shapeRef}
      overflow="visible"
      width="31.505"
      height="31.637"
      viewBox="0 0 31.505 31.637"
    >
      <path
        id="_5"
        data-name="5"
        d="M260.559,123.063a1.706,1.706,0,0,1-1.577,2.137,103.649,103.649,0,0,0-11.741-.143c-7.478.358-16.236.156-17.157-.243-2.188-.947.127-9.237,1.794-13.028a28.738,28.738,0,0,1,5.433-8.429c3.5-3.5,7-6.819,11.946-8.28a42.8,42.8,0,0,1,10.427-1.471c.467,0,1.022.666,1.013,1.853C260.647,102.022,260.125,120.415,260.559,123.063Z"
        transform="translate(-229.19 -93.606)"
        fill="#ccbebc"
      />
    </svg>
  );

  const svgs = [svg1, svg2, svg3, svg4, svg5];

  const isInView = useInView(shapeRef, {
    margin: "500px 0px -400px 0px",
  });

  useEffect(() => {
    if (isInView) {
      setAreInView((prev) => {
        const updatedArray = [...prev];
        updatedArray[i] = true;
        return updatedArray;
      });
    } else {
      setAreInView((prev) => {
        const updatedArray = [...prev];
        updatedArray[i] = false;
        return updatedArray;
      });
    }
  }, [isInView]);

  return svgs[i];
};

export default SvgShape;
