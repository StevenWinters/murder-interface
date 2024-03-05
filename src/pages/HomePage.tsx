import { useEffect } from "react";
import Interface from "../components/Interface";

const HomePage = () => {
  useEffect(() => {
    document.title = "Murder Interface | Answer Questions for Clues";
  });

  return (
    <>
      <Interface />
    </>
  );
};

export default HomePage;
