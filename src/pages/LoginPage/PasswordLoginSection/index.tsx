import React, { useState } from "react";
import { Box, Button, FormControl, Input, VStack } from "@chakra-ui/react";
import { theme } from "@ribon.io/shared/styles";
import { useAuthentication } from "contexts/authenticationContext";

function PasswordLoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithEmailAndPassword } = useAuthentication();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Box
      width="300px"
      mx="auto"
      mt={8}
      p={4}
      borderWidth="1px"
      borderRadius="md"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              focusBorderColor={theme.colors.brand.primary[300]}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <Input
              type="password"
              value={password}
              placeholder="password"
              onChange={handlePasswordChange}
              focusBorderColor={theme.colors.brand.primary[300]}
            />
          </FormControl>
          <Button
            type="submit"
            backgroundColor={theme.colors.brand.primary[300]}
            width="100%"
            textColor={theme.colors.brand.primary[800]}
          >
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default PasswordLoginSection;
