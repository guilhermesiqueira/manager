import { GridItem, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  subtitle: string;
  value: string;
}

function IntegrationCard({ title, subtitle, value }: Props) {
  return (
    <GridItem height="97px" padding='16px' border='1px' borderColor='gray' borderRadius='16px'>
      <Text textColor='#185669' fontWeight={700} fontSize='12px'>{title}</Text>
      <Text textColor='#185669' fontWeight={300} fontSize='10px'>{subtitle}</Text>
      <Text textColor='#00CDB4' fontWeight={700} fontSize='16px'>{value}</Text>
    </GridItem>
  )
}

export default IntegrationCard;