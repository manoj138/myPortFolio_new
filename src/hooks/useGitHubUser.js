import { useState, useEffect } from 'react';

export function useGitHubUser(username = 'manoj138') {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        if (isMounted) {
          setUserData({
            name: data.name || username,
            avatarUrl: data.avatar_url,
            bio: data.bio || 'Full Stack Developer',
            publicRepos: data.public_repos ?? 0,
            followers: data.followers ?? 0,
            following: data.following ?? 0,
            htmlUrl: data.html_url || `https://github.com/${username}`,
            location: data.location || 'India',
            createdYear: new Date(data.created_at).getFullYear() || 2023
          });
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          // Fallback static structure so UI never crashes if GitHub API rate limits
          setUserData({
            name: 'Manoj Chougule',
            avatarUrl: null,
            bio: 'MERN Stack / Full Stack Developer',
            publicRepos: 5,
            followers: 12,
            following: 15,
            htmlUrl: `https://github.com/${username}`,
            location: 'India',
            createdYear: 2023
          });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { userData, loading, error };
}
