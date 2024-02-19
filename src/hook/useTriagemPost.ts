import { UseData } from "@/interfaces/use-data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const postData = async (data: UseData) => {
  return await axios.post("http://localhost:8000/admin/auth/user/", data)
}

export function useMutatePost() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-data"]})
    }
  })

  return mutate;
}