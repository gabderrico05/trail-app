import { TrailProps } from "@/types/Trail";
import { apiClient } from "../client";

export interface ListTrailsResponse {
  message: string;
  trails: TrailProps[];
}

export interface GetTrailParams {
  entityId?: number;
}

/**
 * Service for trail related API calls
 */
export const trailsService = {
  /**
   * Get all trails, optionally filtered by entity ID
   * @param params - Optional parameters for filtering
   * @returns Promise with list of trails
   */
  async getAll(params?: GetTrailParams): Promise<TrailProps[]> {
    const { data } = await apiClient.get<ListTrailsResponse>("/trails", {
      params,
    });
    return data.trails;
  },

  /**
   * Get a single trail by ID
   * @param id - Trail ID
   * @returns Promise with trail data
   */
  async getById(id: number): Promise<TrailProps> {
    const { data } = await apiClient.get<{ message: string; trail: TrailProps }>(`/trails/${id}`);
    return data.trail;
  },
};
