import { ScrollView } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { useState } from 'react';
import Mission from '../features/partners/Mission';
import { Avatar, Card, ListItem } from 'react-native-elements';

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);

  return (
    <ScrollView>
      <Mission />
      <Card>
        {partners.map((partner) => {
          return (
            <ListItem key={partner.id}>
              <Avatar rounded source={partner.image} />
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
