import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, JobLevel } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Desenvolvedor Frontend Júnior",
        company: "TechNova",
        description: "Vaga para dev júnior focado em React e Next.js.",
        level: JobLevel.JUNIOR,
        stack: "React, Next.js, JavaScript",
        isRemote: true,
        applyUrl: "https://example.com/vaga/frontend-jr",
        slug: "desenvolvedor-frontend-junior-technova",
      },
      {
        title: "Estágio em Desenvolvimento Web",
        company: "WebStart",
        description: "Estágio para estudantes com noções de HTML, CSS e JS.",
        level: JobLevel.ESTAGIO,
        stack: "HTML, CSS, JavaScript",
        isRemote: false,
        location: "São Paulo - SP",
        applyUrl: "https://example.com/vaga/estagio-web",
        slug: "estagio-desenvolvimento-web-webstart",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed executado com sucesso 🌱");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
