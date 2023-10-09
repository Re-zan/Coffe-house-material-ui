import Heading from "../../components/Heading/Heading";
import Banner from "./Banner/Banner";
import Discover from "./Discover/Discover";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Discover></Discover>

      <Heading
        direction="center"
        title="Enjoy a new blend of coffee style"
        des="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
      ></Heading>
    </main>
  );
};

export default Home;
