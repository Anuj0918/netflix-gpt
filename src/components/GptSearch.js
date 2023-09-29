import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";


const GPTSearch = () => {
    return (
      <>
          <div className=" fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <div className=""> 
     <GptSearchBar/>
     <GptMovieSuggestions/>
        </div>
        </>
    );
  };
  export default GPTSearch;