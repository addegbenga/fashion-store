import type { NextPage } from "next";
import Layouts from "../components/layouts";
import HomeComponents from "../components/home";

const Home: NextPage = () => {
  return (
    <div>
      <Layouts>
        <HomeComponents />
      </Layouts>
    </div>
  );
};

export default Home;
