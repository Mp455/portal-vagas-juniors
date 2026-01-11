"use client";

import CarouselSection from "@/_components/carousel-section";
import CardSection from "@/_components/job-card";
import { useJobs } from "@/hooks/useJobs";

export default function JobsPage() {
  const { data, isLoading, isError } = useJobs();

  if (isLoading) return <p>Carregando vagas...</p>;
  if (isError) return <p>Erro ao carregar vagas</p>;

  return (
    <div className="mx-10">
      <CarouselSection />

      <div className="space-y-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.map((job) => (
          <CardSection key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
