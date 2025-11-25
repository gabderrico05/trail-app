import { TrailProps } from "@/types/Trail";
import { apiClient } from "../client";

export interface ListTrailsResponse {
  message: string;
  trails: TrailProps[];
}

/**
 * Service for trail related API calls
 */
export const trailsService = {
  /**
   * Get all trails, optionally filtered by entity ID
   * @entityId entityId - An entity ID to filter trails
   * @returns Promise with list of trails
   */
  async getAll(entityId: number): Promise<TrailProps[]> {
    const { data } = await apiClient.get<ListTrailsResponse>(
      "/trails/" + entityId
    );
    return data.trails;
  },

  /**
   * Get a single trail by ID
   * @param id - Trail ID
   * @returns Promise with trail data
   */
  async getById(id: number): Promise<TrailProps> {
    const { data } = await apiClient.get<{
      message: string;
      trail: TrailProps;
    }>(`/trails/trail/${id}`);
    return data.trail;
  },
};
