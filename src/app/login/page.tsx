"use client";

import { useState } from "react";
import { TextInput, Button, Container, Title, Notification } from "@mantine/core";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (username === "admin" && password === "password") {
      window.location.href = "/dashboard";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container size="xs" my="xl">
      <Title order={2} style={{ textAlign: "center" }} mb="lg">Login</Title>
      {error && <Notification color="red" onClose={() => setError("")}>{error}</Notification>}
      <TextInput
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        mt="md"
      />
      <Button fullWidth mt="md" onClick={handleSubmit}>
        Login
      </Button>
    </Container>
  );
}
