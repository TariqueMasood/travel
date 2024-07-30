import * as React from "react";
import { Html, Button } from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  visaType: string;
}

export function Email({ name, email, message, visaType }: EmailProps) {
  return (
    <Html lang="en">
      <h1>Welcome, {name}</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Message: {message}</h2>
      <h2>Visa Type: {visaType}</h2>
      <Button
        style={{ background: "#333", color: "#fff", padding: "12px 24px" }}
      >
        Learn Coding
      </Button>
    </Html>
  );
}

export default Email;
