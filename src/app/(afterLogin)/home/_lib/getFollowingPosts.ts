export async function getFollowingPosts({pageParam}: { pageParam?: number }) {
  const res = await fetch(`http://localhost:9090/api/followingPosts${pageParam ? `?cursor=${pageParam}` : ''}`, {
    cache: 'no-store', // 캐싱 안 함
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}