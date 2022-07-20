import { Box, Text } from "@chakra-ui/react";

function IntegrationCard() {
  return (
    <Box height='97px' width='176px' padding='16px' border='1px' borderColor='gray' borderRadius='16px'>
      <Text textColor='#185669' fontWeight={700} fontSize='12px'>Integration Name</Text>
      <Text textColor='#185669' fontWeight={300} fontSize='10px'>Assigned (USDC)</Text>
      <Text textColor='#00CDB4' fontWeight={700} fontSize='16px'>351.895,12</Text>
    </Box>
  )
}

export default IntegrationCard;