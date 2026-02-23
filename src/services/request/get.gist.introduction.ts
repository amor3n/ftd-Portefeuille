import axios from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export default () => {
  const { get } = axios({ baseURL: import.meta.env.VITE_GITHUB_GIST_BASE_URL });
  const user = import.meta.env.VITE_GITHUB_USER;

  const getHero = () => {
    const gist_id = "f210cf222004ae6f107fb2798bf3659f";
    const path = "ftd-portefeuille-introduction-hero.json";
    const full_url = `${user}/${gist_id}/raw/${path}`;

    return useQuery({
      queryKey: ["introduction-hero", `/${full_url}`],
      enabled: true,
      queryFn: () => get(`/${full_url}`).then((res) => res),
      select(data) {
        return {
          payload: data.payload,
        };
      },
    });
  };

  return { getHero };
};
