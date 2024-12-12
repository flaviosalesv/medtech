"use client";

import { Box, Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";

export default function TabelaValoresPage() {
  const [valores, setValores] = useState([
    { exame: "Mamas", valor: 200 },
    { exame: "Transvaginal", valor: 200 },
  ]);
  const [novoExame, setNovoExame] = useState("");
  const [novoValor, setNovoValor] = useState("");

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
    <Box>
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
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{exame.valor}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                <Button color="red" onClick={() => handleDeleteExam(exame.exame)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
