"use client";

import { Button, Container, Title, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `url('/doc_app.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        size="xs"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo branco semitransparente para o texto
          padding: "20px",
          borderRadius: "8px",
        }}
      >
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
    </div>
  );
}
