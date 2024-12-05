import { TextInput, Button, Container, Title } from '@mantine/core';

export default function LoginPage() {
  return (
    <Container size="xs" my="xl">
      <Title order={2}>Login</Title>
      <TextInput label="Username" placeholder="Enter your username" required />
      <TextInput label="Password" placeholder="Enter your password" type="password" required mt="md" />
      <Button fullWidth mt="md">Login</Button>
    </Container>
  );
}
