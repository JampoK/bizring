import { getPayload } from 'payload';
import config from '../payload.config';

/**
 * Logic to fetch and sort ranking entries
 */
export async function getRankedBusinesses(category?: string) {
  const payload = await getPayload({ config });

  const query: any = {
    sort: 'rankNumber',
    where: {
      _status: { equals: 'published' }
    }
  };

  if (category) {
    query.where.category = { equals: category };
  }

  const rankings = await payload.find({
    collection: 'rankings',
    ...query,
    limit: 100,
  });

  return rankings.docs;
}
