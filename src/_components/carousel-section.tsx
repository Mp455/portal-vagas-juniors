import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";

export default function CarouselSection() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="retro">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <span>Foco exclusivo em vagas para iniciantes</span>
          <p>
            O portal é totalmente voltado para júnior e estágio, eliminando a
            frustração de filtrar vagas sênior. Isso acelera a busca de quem
            está entrando no mercado de tecnologia.
          </p>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <span>Dados organizados e confiáveis</span>
          <p>
            As vagas são curadas e estruturadas (nível, stack, localização,
            status ativo), garantindo informações claras e evitando anúncios
            desatualizados ou genéricos.
          </p>
        </CarouselItem>{" "}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <span>Performance e escalabilidade modernas</span>
          <p>
            O portal é totalmente voltado para júnior e estágio, eliminando a
            frustração de filtrar vagas sênior. Isso acelera a busca de quem
            está entrando no mercado de tecnologia.
          </p>
        </CarouselItem>{" "}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <span>Acesso facilitado a vagas remotas e locais</span>
          <p>
            A plataforma centraliza oportunidades remotas e presenciais,
            ampliando o alcance para candidatos de qualquer região.
          </p>
        </CarouselItem>{" "}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <span>Ponte direta entre empresas e novos talentos</span>
          <p>
            Empresas conseguem divulgar vagas para um público realmente
            alinhado, enquanto candidatos têm acesso a oportunidades que
            valorizam aprendizado e crescimento.
          </p>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
