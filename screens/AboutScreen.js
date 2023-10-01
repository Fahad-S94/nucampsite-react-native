import { ScrollView } from 'react-native';
import Mission from '../features/partners/Mission';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable';

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
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Mission />
          <Card>
            <Card.Title>Community Partners</Card.Title>
            <Card.Divider />
            <Text>{partners.errMess}</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
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
      </Animatable.View>
    </ScrollView>
  );
};

export default AboutScreen;
