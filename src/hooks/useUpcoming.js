import  { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

  export const useUpcoming = () => {
    const UpcomingMovies = useSelector((store) => store.movies.Upcoming);
    const dispatch = useDispatch()
    const getUpcomingMovies = async()=>{
      const response =await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const data = await response.json()
      dispatch(addUpcomingMovies(data.results))
    }
    useEffect(()=>{
      !UpcomingMovies &&  getUpcomingMovies()
    },[])
}
 