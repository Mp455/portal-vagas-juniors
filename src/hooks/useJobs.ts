import { useQuery } from "@tanstack/react-query";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  level: "ESTAGIO" | "JUNIOR";
  applyUrl: string;
  createdAt: string;
};

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch("/api/jobs");

  if (!res.ok) {
    throw new Error("Erro ao buscar vagas");
  }

  return res.json();
}

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
}
