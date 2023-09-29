import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { useUpcoming } from "../hooks/useUpcoming";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

const Browse = () => {
   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcoming();

   return ( 
    <div>
       <Header/>
       {showGptSearch ? (
        <GPTSearch />): (
         <>
           <MainContainer />
           <SecondaryContainer />
         </>
       )}
    </div>
    );
   };
  export default Browse;