"use client";

import { Box, Button, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  return (
    <Box style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: "100vh" }}>
      <Box
        style={{
          width: isMobile ? "100%" : "250px",
          backgroundColor: "#f1f3f5",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          position: isMobile ? "relative" : "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <Title order={3} style={{ marginBottom: "20px", textAlign: "center" }}>
          MedTech
        </Title>
        <Button fullWidth variant="subtle" color="blue" onClick={() => router.push("/dashboard/agenda")}>
          Agenda
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => router.push("/dashboard/tabela-valores")}>
          Tabela de valores
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => router.push("/dashboard/financeiro")}>
          Financeiro
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => router.push("/dashboard/desempenho")}>
          Desempenho
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => router.push("/dashboard/colaboradores")}>
          Colaboradores
        </Button>
      </Box>
      <Box
        style={{
          flex: 1,
          marginTop: isMobile ? "20px" : "0",
          marginLeft: isMobile ? "0" : "250px",
          height: "100vh",
          backgroundImage: "url('/doc_app.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Title order={2} style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", marginBottom: "10px" }}>
          Bem-vindo ao Dashboard!
        </Title>
        <p style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.7)" }}>
          Selecione um item no menu para começar.
        </p>
      </Box>
    </Box>
  );
}
