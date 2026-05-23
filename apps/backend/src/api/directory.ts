import { getPayloadClient } from '../lib/payload-client';
import { PublicBusinessDTO } from './types';

export const getPublicBusinesses = async (query: {
  page?: number;
  limit?: number;
  industry?: string;
}): Promise<{ docs: PublicBusinessDTO[]; meta: any }> => {
  const payload = await getPayloadClient();
  
  if (!payload) throw new Error('Failed to connect to backend');

  const result = await payload.find({
    collection: 'businesses',
    where: {
      status: { equals: 'published' },
      ...(query.industry ? { industry: { equals: query.industry } } : {}),
    },
    sort: '-isFeatured -createdAt',
    limit: query.limit || 20,
    page: query.page || 1,
    // Enforce safe projection to only expose public DTO fields
    select: {
      name: true,
      slug: true,
      industry: true,
      isVerified: true,
      isFeatured: true,
    }
  });

  return {
    docs: result.docs as unknown as PublicBusinessDTO[],
    meta: {
      totalDocs: result.totalDocs,
      limit: result.limit,
      page: result.page,
    }
  };
};
