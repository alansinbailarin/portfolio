import type { githubProfile } from "@/types/githubProfile";

export async function getUserProfile(): Promise<githubProfile> {
  const response = await fetch(
    `https://api.github.com/users/alansinbailarin`
  ).catch((err) => err);

  return response.json();
}

export async function getRepos(): Promise<githubProfile> {
  const response = await fetch(
    `https://api.github.com/users/alansinbailarin/repos`
  );
  return response.json();
}
