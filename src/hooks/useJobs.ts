import { Job } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

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
