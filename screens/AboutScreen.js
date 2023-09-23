import { ScrollView } from 'react-native';
import Mission from '../features/partners/Mission';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const AboutScreen = () => {
  const partners = useSelector((state) => state.partners);

  if (partners.isLoading) {
    return (
      <ScrollView>
        <Mission />
        <Card>
          <Card.Title>Community Partners</Card.Title>
          <Card.Divider />
          <Loading />
        </Card>
      </ScrollView>
    );
  }

  if (partners.errMess) {
    return (
      <ScrollView>
        <Mission />
        <Card>
          <Card.Title>Community Partners</Card.Title>
          <Card.Divider />
          <Text>{partners.errMess}</Text>
        </Card>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <Mission />
      <Card>
        {partners.partnersArray.map((partner) => {
          return (
            <ListItem key={partner.id}>
              <Avatar rounded source={{ uri: baseUrl + partner.image }} />
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
