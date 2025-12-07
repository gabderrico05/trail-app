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

import { entitiesService } from "./services/entities";
import { trailsService } from "./services/trails";

export { API_URL, apiClient, getImageUrl, IMAGE_BASE_URL } from "./client";
export { entitiesService } from "./services/entities";
export { landmarksService } from "./services/landmarks";
export { trailsService } from "./services/trails";

// Convenient unified API object
export const api = {
  entities: entitiesService,
  trails: trailsService,
};
