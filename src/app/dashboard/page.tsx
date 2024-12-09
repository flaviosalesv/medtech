"use client";

import { Box, Button, Title, Text, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function DashboardPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [selectedTab, setSelectedTab] = useState<string>("tabelaValores");

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
  const [novoExame, setNovoExame] = useState("");
  const [novoValor, setNovoValor] = useState("");
  const [exameEditado, setExameEditado] = useState<any>(null);

  const handleAddExam = () => {
    if (novoExame && novoValor) {
      setValores([...valores, { exame: novoExame, valor: parseFloat(novoValor) }]);
      setNovoExame("");
      setNovoValor("");
    }
  };

  const handleDeleteExam = (exame: string) => {
    setValores(valores.filter((ex) => ex.exame !== exame));
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
        <Button fullWidth variant="subtle" color="blue" onClick={() => setSelectedTab("colaboradores")}>
          Colaboradores
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

            <Box style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
              <TextInput
                placeholder="Nome do exame"
                value={novoExame}
                onChange={(e) => setNovoExame(e.target.value)}
              />
              <TextInput
                placeholder="Valor"
                value={novoValor}
                type="number"
                onChange={(e) => setNovoValor(e.target.value)}
              />
              <Button onClick={handleAddExam}>Adicionar</Button>
            </Box>

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
                      <Button color="red" onClick={() => handleDeleteExam(exame.exame)}>
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {selectedTab === "agendamento" && <Title order={2}>Agenda</Title>}

        {selectedTab === "financeiro" && <Title order={2}>Financeiro</Title>}

        {selectedTab === "desempenho" && <Title order={2}>Desempenho</Title>}

        {selectedTab === "colaboradores" && <Title order={2}>Colaboradores</Title>}
      </Box>
    </Box>
  );
}
