type GitHubUser = {
  login: string;
  id: number;
  name: string;
  // adicione outros campos que você for usar
};

async function getUsers(names: string[]): Promise<(GitHubUser | null)[]> {
  const jobs: Promise<GitHubUser | null>[] = names.map((name) =>
    fetch(`https://api.github.com/users/${name}`).then(
      async (response) => {
        if (response.status !== 200) {
          return null;
        }
        return await response.json();
      },
      () => null
    )
  );

  const results = await Promise.all(jobs);
  return results;
}
