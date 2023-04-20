import { useState, useEffect } from "react";
const ScrollToTop = () => {
  const [backToTopBtn, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div className="scroll-top">
      {backToTopBtn && (
        <button
          className="btn btn__to-top p-2 float-end fs-6 btn-light my-5 d-block d-lg-none"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "30px",
            zIndex: "99",
            width: "50px",
            height: "50px",
          }}
        >
          <i className="bx bxs-up-arrow fs-3 text-center"></i>
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
