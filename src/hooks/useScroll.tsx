import {useState, useEffect} from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed p-2 rounded-lg bg-pink-900 text-white bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer"
        >
          <ArrowUpwardIcon />
        </div>
      )}
    </div>
  );
}