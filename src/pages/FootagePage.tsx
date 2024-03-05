import { useEffect } from "react";
import Clip from "../components/Clip";

const FootagePage = () => {
  useEffect(() => {
    document.title = "Murder Interface | Footage";
  });

  return (
    <>
      <Clip />
    </>
  );
};

export default FootagePage;
