import axios from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export default () => {
  const { get } = axios({ baseURL: import.meta.env.VITE_GITHUB_RAW_BASE_URL });
  const user = import.meta.env.VITE_GITHUB_USER;

  const getReadme = ({
    repo,
    branch = "main",
    mdName = "README.md",
  }: {
    repo?: string;
    branch?: string;
    mdName?: string;
  }) => {
    const full_url = `${user}/${repo}/${branch}/${mdName}`;

    return useQuery({
      queryKey: ["getReadme", `/${full_url}`],
      enabled: !!repo,
      queryFn: () => get(`/${full_url}`).then((res) => res),
      select(data) {
        return {
          payload: data.payload,
        };
      },
    });
  };

  return { getReadme };
};
