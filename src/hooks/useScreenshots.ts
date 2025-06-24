import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["scheenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
