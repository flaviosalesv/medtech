"use client";

import { Box, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TabelaValoresPage() {
  const [valores, setValores] = useState([
    { exame: "Mamas", valor: 200 },
    { exame: "Transvaginal", valor: 200 },
  ]);
  const [novoExame, setNovoExame] = useState("");
  const [novoValor, setNovoValor] = useState("");

  const router = useRouter();

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

  const handleGoToColaboradores = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("exames", JSON.stringify(valores));
    router.push(`/dashboard/colaboradores?${queryParams.toString()}`);
  };

  return (
    <Box style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <Title order={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        Tabela de Valores
      </Title>

      <Box
        style={{
          marginBottom: "30px",
          display: "flex",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Nome do exame"
          value={novoExame}
          onChange={(e) => setNovoExame(e.target.value)}
          style={{ flex: 1 }}
        />
        <TextInput
          placeholder="Valor"
          value={novoValor}
          type="number"
          onChange={(e) => setNovoValor(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button onClick={handleAddExam}>Adicionar</Button>
      </Box>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f3f3" }}>
            <th style={{ border: "1px solid #ddd", padding: "15px", textAlign: "left" }}>
              Exame
            </th>
            <th style={{ border: "1px solid #ddd", padding: "15px", textAlign: "left" }}>
              Valor
            </th>
            <th style={{ border: "1px solid #ddd", padding: "15px", textAlign: "center" }}>
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {valores.map((exame, index) => (
            <tr
              key={exame.exame}
              style={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "#ffffff",
              }}
            >
              <td style={{ border: "1px solid #ddd", padding: "15px" }}>{exame.exame}</td>
              <td style={{ border: "1px solid #ddd", padding: "15px" }}>R$ {exame.valor}</td>
              <td style={{ border: "1px solid #ddd", padding: "15px", textAlign: "center" }}>
                <Button color="red" onClick={() => handleDeleteExam(exame.exame)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box style={{ textAlign: "center", marginTop: "30px" }}>
        <Button onClick={handleGoToColaboradores}>Ir para Colaboradores</Button>
      </Box>
    </Box>
  );
}
