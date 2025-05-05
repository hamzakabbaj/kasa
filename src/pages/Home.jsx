import HomeLayout from "../components/ui_layouts/HomeLayout/HomeLayout";
import useFetch from "@/hooks/useFetch";
function Home() {
  const {
    data: logements,
    isLoading,
    error,
  } = useFetch("/data/logements.json");
  return (
    <HomeLayout logements={logements} isLoading={isLoading} error={error} />
  );
}

export default Home;
