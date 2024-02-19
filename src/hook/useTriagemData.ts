import { UseData } from "@/interfaces/use-data";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetchData = async () => {
  const data  = await axios.get("https://localhost:8000/admin/auth/user/");
  const response = await data.data
  return response as UseData[]
}

export function useUsersResponse() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['user-data']
    
  })

  return query
    
  
}