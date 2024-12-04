"use client";

import { Button, Container, Title, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/src/app/login");
  };

  return (
    <Container size="xs" style={{ textAlign: "center", marginTop: "20vh" }}>
      <Title order={1} mb="md">
        MedTech
      </Title>
      <Text color="dimmed" mb="lg">
        Clique no botão abaixo para acessar a tela de login.
      </Text>
      <Button onClick={handleRedirect} size="lg" color="blue">
        Ir para Login
      </Button>
    </Container>
  );
}
