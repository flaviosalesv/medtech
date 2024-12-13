"use client";

import { Box, Button, TextInput, Title, CheckboxGroup, Checkbox, Checkbox as MantineCheckbox } from "@mantine/core";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; 

export default function ColaboradoresPage() {
  const searchParams = useSearchParams();
  const [exames, setExames] = useState<{ exame: string; valor: number }[]>([]);
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    
    const examesQuery = searchParams.get("exames");
    if (examesQuery) {
      try {
        const examesData = JSON.parse(examesQuery);
        setExames(examesData); 
      } catch (error) {
        console.error("Erro ao carregar os exames:", error);
      }
    }
  }, [searchParams]);

  const handleSelectExams = (selected: string[]) => {
    setSelectedExams(selected);
  };

  const handleSelectAllExams = () => {
    
    setSelectedExams(exames.map((exame) => exame.exame));
  };

  const handleUnselectAllExams = () => {
    
    setSelectedExams([]);
  };

  const handleSubmit = () => {
    
    console.log("Exames marcados:", selectedExams);
    console.log("Data selecionada:", selectedDate);
  };

  return (
    <Box style={{ maxWidth: 500, margin: "0 auto", padding: "20px" }}>
      <Title
        order={3}
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Cadastrar Médico/Horários
      </Title>

      <TextInput
        label="Nome completo do médico"
        placeholder="Digite o nome completo"
        required
        mb="md"
      />

      <TextInput
        label="Data"
        placeholder="DD/MM/AAAA"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        required
        mb="md"
      />

      <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Title order={5}>Selecione os exames realizados:</Title>
        <CheckboxGroup value={selectedExams} onChange={handleSelectExams}>
          {exames.length > 0 ? (
            <>
              <MantineCheckbox
                label="Selecionar todos"
                checked={selectedExams.length === exames.length}
                onChange={handleSelectAllExams}
              />

              {exames.map((exame) => (
                <Checkbox key={exame.exame} label={exame.exame} value={exame.exame} />
              ))}
            </>
          ) : (
            <p>Sem exames cadastrados para seleção.</p>
          )}
        </CheckboxGroup>
      </Box>

      <Box style={{ display: "flex", gap: "10px" }}>
        <TextInput
          label="Horário de início"
          placeholder="08:00"
          required
          style={{ flex: 1 }}
        />
        <TextInput
          label="Horário de fim"
          placeholder="17:00"
          required
          style={{ flex: 1 }}
        />
      </Box>

      <Button fullWidth mt="lg" onClick={handleSubmit}>
        Adicionar
      </Button>
    </Box>
  );
}
