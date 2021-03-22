import React from 'react';
import { Text } from 'react-native';
import api from '../../services/api';
import { Container } from './styles';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

// const getService = async () => await api.getServices();
export default function Home (props) {
  // const services = await getService();
  const LeftContent = args => <Avatar.Icon {...args} icon="folder" />;
  return (
    <Container>
      {/* {services().map(services => */}
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title>teste</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      {/* )} */}
    </Container>
  )
}