import { useEffect } from "react";
import { gsap } from "gsap";

type AnimatedSVGProps = React.SVGProps<SVGSVGElement>;

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ className, ...props }) => {
  useEffect(() => {
    const path = document.querySelector("#combinedPath");

    if (path) {
      const pathLength = (path as SVGPathElement).getTotalLength();

      gsap.fromTo(
        path,
        { strokeDasharray: pathLength, strokeDashoffset: pathLength },
        { strokeDashoffset: 0, duration: 3 }
      );
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1365.3333 1365.3333"
      className={className}
      {...props} // Spread other props
    >
      <path
        id="combinedPath"
        d="M10 10 L100 100 Q150 200, 200 100"
        fill="none"
        stroke="#00f"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AnimatedSVG;

