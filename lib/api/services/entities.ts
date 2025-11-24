import { EntityProps } from "@/types/Entity";
import { apiClient } from "../client";

export interface ListEntitiesResponse {
  message: string;
  entities: EntityProps[];
}

/**
 * Service for entity/park related API calls
 */
export const entitiesService = {
  /**
   * Get all entities/parks
   * @returns Promise with list of entities
   */
  async getAll(): Promise<EntityProps[]> {
    const { data } = await apiClient.get<ListEntitiesResponse>("/entities");
    return data.entities;
  },

  /**
   * Get a single entity by ID
   * @param id - Entity ID
   * @returns Promise with entity data
   */
  async getById(id: number): Promise<EntityProps> {
    const { data } = await apiClient.get<{ message: string; entity: EntityProps }>(`/entities/${id}`);
    return data.entity;
  },
};
