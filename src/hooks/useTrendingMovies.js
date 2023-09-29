import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

export const useTrendingMovies = () => {
    const dispatch = useDispatch()
    const TrendingMovies = useSelector((store) => store.movies.trendingMovies);
    const getTrendingMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS)
      const data = await response.json()
      dispatch(addTrendingMovies(data.results))
    }
    useEffect(()=>{
     !TrendingMovies &&  getTrendingMovies()
    },[])
}