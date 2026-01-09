import { PrismaClient, JobLevel } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  const jobs = [
    {
      slug: "dev-front-junior-startup-x",
      title: "Desenvolvedor Front-end Júnior",
      company: "Startup X",
      location: "Remoto",
      level: JobLevel.JUNIOR,
      stack: "React, Next.js, TypeScript",
      description: "Vaga para dev front-end iniciante",
      applyUrl: "https://example.com/vaga-front-jr",
    },
    {
      slug: "estagio-desenvolvimento-web-empresa-y",
      title: "Estágio em Desenvolvimento Web",
      company: "Empresa Y",
      location: "São Paulo - SP",
      level: JobLevel.ESTAGIO,
      stack: "HTML, CSS, JavaScript",
      description: "Estágio para estudantes de tecnologia",
      applyUrl: "https://example.com/vaga-estagio",
    },
  ];

  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: {
        title: job.title,
        company: job.company,
        location: job.location,
        level: job.level,
        stack: job.stack,
        description: job.description,
        applyUrl: job.applyUrl,
        isActive: true,
      },
      create: job,
    });
  }

  console.log("🌱 Seed executado com sucesso (idempotente)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
