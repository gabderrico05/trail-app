import { LandMarkProps } from "@/types/Landmark";
import { apiClient } from "../client";

/**
 * Service for point of interest (landmark) related API calls
 */
export const landmarksService = {
  /**
   * Get a single point of interest by ID
   * @param id - Point of Interest ID
   * @returns Promise with point of interest data
   */
  async getById(id: number): Promise<LandMarkProps> {
    const { data } = await apiClient.get<{
      message: string;
      pointOfInterest: LandMarkProps;
    }>(`/points-of-interest/${id}`);
    return data.pointOfInterest;
  },
};
