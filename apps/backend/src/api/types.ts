/**
 * Domain-specific DTOs for the Marketplace
 */
export interface PublicBusinessDTO {
  id: string;
  name: string;
  slug: string;
  industry: string;
  isVerified: boolean;
  isFeatured: boolean;
}

export type APIResponse<T> = {
  data?: T;
  error?: string;
  meta?: {
    totalDocs: number;
    limit: number;
    page: number;
  };
};
