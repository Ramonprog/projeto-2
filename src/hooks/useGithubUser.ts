// src/hooks/useGithubUser.ts

import { useQuery } from "@tanstack/react-query";


export const useGithubUser = (username: string) => {
  return useQuery({
    queryKey: ['githubUser', username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      return response.json();
    },
    enabled: !!username, 
    retry: false, 
  });
};
