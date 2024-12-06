"use client";

import { Box, Button, Title, Text, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function DashboardPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [selectedTab, setSelectedTab] = useState<string>("tabelaValores");

  // Exemplo de tabela de valores (nome do exame e valor)
  const [valores, setValores] = useState([
    { exame: "Mamas", valor: 200 },
    { exame: "Transvaginal", valor: 200 },
    { exame: "Controle de ovulação", valor: 320 },
    { exame: "Pesquisa endometriose", valor: 350 },
    { exame: "Axilas", valor: 150 },
    { exame: "Abdome total", valor: 200 },
    { exame: "Abdome superior", valor: 200 },
    { exame: "Aparelho urinário", valor: 200 },
    { exame: "Parede abdominal", valor: 200 },
    { exame: "Pélvico", valor: 200 },
    { exame: "Próstata via abdominal", valor: 200 },
    { exame: "Bolsa escrotal", valor: 200 },
    { exame: "Bolsa escrotal com doppler", valor: 280 },
    { exame: "Doppler carótidas e vertebrais", valor: 320 },
    { exame: "Articulações", valor: 200 },
    { exame: "Articulações com doppler", valor: 280 },
    { exame: "Tireoide", valor: 200 },
    { exame: "Tireoide com doppler", valor: 250 },
    { exame: "Partes moles", valor: 200 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [exameEditado, setExameEditado] = useState<any>(null);

  const handleEditValue = (exame: any) => {
    setExameEditado(exame);
    setShowModal(true);
  };

  const handleConfirmEdit = (newValue: number) => {
    if (exameEditado) {
      setValores((prevValues) =>
        prevValues.map((ex) =>
          ex.exame === exameEditado.exame
            ? { ...ex, valor: newValue }
            : ex
        )
      );
      setShowModal(false);
    }
  };

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
        <Title order={3} style={{ marginBottom: "20px" }}>
          MedTech
        </Title>
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("agendamento")}>
          Agenda
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("tabelaValores")}>
          Tabela de valores
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("financeiro")}>
          Financeiro
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("desempenho")}>
          Desempenho
        </Button>
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("ajuda")}>
          Help
        </Button>
      </Box>

      <Box
        style={{
          flex: 1,
          marginTop: isMobile ? "20px" : "0",
          marginLeft: isMobile ? "0" : "250px",
          padding: "20px",
        }}
      >
        {selectedTab === "tabelaValores" && (
          <>
            <Title order={2}>Tabela de Valores</Title>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "10px" }}>Exame</th>
                  <th style={{ border: "1px solid #ccc", padding: "10px" }}>Valor</th>
                  <th style={{ border: "1px solid #ccc", padding: "10px" }}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {valores.map((exame) => (
                  <tr key={exame.exame}>
                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>{exame.exame}</td>
                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                      {exame.valor}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                      <Button onClick={() => handleEditValue(exame)}>Editar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {selectedTab === "agendamento" && (
          <Title order={2}>Agenda</Title>
          // Adicionar a funcionalidade da agenda aqui
        )}

        {selectedTab === "financeiro" && (
          <Title order={2}>Financeiro</Title>
          // Adicionar a funcionalidade financeira aqui
        )}

        {selectedTab === "desempenho" && (
          <Title order={2}>Desempenho</Title>
          // Adicionar a funcionalidade de notificações aqui
        )}

        {selectedTab === "ajuda" && (
          <Title order={2}>Ajuda</Title>
          // Adicionar a funcionalidade de ajuda aqui
        )}
      </Box>

      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={`Editar valor de ${exameEditado?.exame}`}
      >
        <TextInput
          label="Novo valor"
          value={exameEditado?.valor || ""}
          onChange={(e) => setExameEditado({ ...exameEditado, valor: e.target.value })}
        />
        <Button onClick={() => handleConfirmEdit(parseFloat(exameEditado?.valor || "0"))}>
          Confirmar alteração
        </Button>
      </Modal>
    </Box>
  );
}
