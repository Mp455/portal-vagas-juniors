import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/_components/ui/8bit/card";
import { Job } from "@prisma/client";
import { Button } from "./ui/8bit/button";

type CardSectionProps = {
  job: Job;
};

export default function CardSection({ job }: CardSectionProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{job.description}</p>
        <p>Local: {job.location}</p>
        <p>Posição: {job.level}</p>
        <span>Stack: {job.stack}</span>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={job.applyUrl} target="_blank">
            Candidatar-se
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
