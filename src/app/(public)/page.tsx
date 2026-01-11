"use client";

import { useJobs } from "@/hooks/useJobs";

export default function JobsPage() {
  const { data, isLoading, isError } = useJobs();

  if (isLoading) return <p>Carregando vagas...</p>;
  if (isError) return <p>Erro ao carregar vagas</p>;

  return (
    <div className="space-y-4">
      {data?.map((job) => (
        <div key={job.id} className="border p-4 rounded">
          <h2 className="font-bold">{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p className="text-sm">{job.level}</p>
          <a
            href={job.applyUrl}
            target="_blank"
            className="text-blue-600 underline"
          >
            Candidatar-se
          </a>
        </div>
      ))}
    </div>
  );
}
