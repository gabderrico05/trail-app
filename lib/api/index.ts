/**
 * API Module
 *
 * Central export point for all API-related functionality.
 * Import from here to access API services, client, and utilities.
 *
 * @example
 * import { api, getImageUrl } from '@/lib/api';
 *
 * const entities = await api.entities.getAll();
 * const imageUrl = getImageUrl(entity.coverUrl);
 */

export { apiClient, getImageUrl, API_URL, IMAGE_BASE_URL } from "./client";
export { entitiesService } from "./services/entities";
export { trailsService } from "./services/trails";

// Convenient unified API object
export const api = {
  entities: entitiesService,
  trails: trailsService,
};
