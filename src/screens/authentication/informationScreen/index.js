import React, {Component} from 'react';
import {Button, Header, ScreenContainer} from '../../../components/atoms';
import {STRINGS} from '../../../constants';
import {Alert, ScrollView, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';

class InformationScreen extends Component {
  render() {
    return (
      <ScreenContainer>
        <Header title={STRINGS.INFORMATION_SCREEN.TITLE} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml
            source={{
              html: `<!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Privacy Policy - Accident Management Systems</title>
                    </head>
                    <body >
                      <section>
                      <p style="font-weight: 500; color: #5C2508;">
                      My name is Carol. Recently my daughter Lauren lost her beloved pet dog Jenson, who simply disappeared into thin air whilst we were all enjoying an afternoon in my garden.
                      Little did we know that there was a gap in our fence that Lauren’s beloved pet dog Jenson had found and had decided to go off on his own. Lauren was frantic.
                    </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        Her pet dog Jenson is her baby who had just disappeared into thin air. What if the dog had been stolen. There was really no way off knowing what had happened to Lauren’s pet dog Jenson who really is one of the family.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        This made me realise that many people have had their beloved pet dogs stolen for all sorts of reasons, or simply gone missing, example lost.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        Chipping your pet dogs is a fantastic idea, only if your dog is found, and scanned correctly to show that you are in fact the owner. This is also dependant on you the owner, like my daughter Lauren keeping their details upto date on their profiles.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        We eventually found our pet, so we were very very lucky.
                        But what about those pet dog owners out there who have all had their beloved pet dogs chipped, who are now listed as missing.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        Is this good enough? What is the point of having a chip inserted into your beloved pet dog if you cannot track your lost dog. WELL NOW YOU CAN.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        Ring My Dog App allows you to track your lost pet upto 800 miles, 360 degrees North, East, South and West.
                        Simply activate your Ring My Dog App and your pet dog will appear on your google maps.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        This will give you the precise location of your pet dog.
                        All you have to do is press start journey to go pick up your pet dog.
                        </p>
                        <p style="font-weight: 500; color: #5C2508;">
                        Confirmation is completed by having a scan conducted on the dog to establish who is the rightful owner. So chipping of dogs is fantastic, only if the dog is found, as well as if the owners personal details is updated regularly. But having the abilities to simply press a button, on your smart phone if your pet dog has been stolen or lost will be a tremendous relief to many pet dog owner
                        </p>
                      </section>
                    </body>
                  </html>`,
            }}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title={STRINGS.BUTTON_LABELS.NEXT}
            containerStyles={styles.button}
            onPress={() => Alert.alert('Work in progress')}
          />
        </View>
      </ScreenContainer>
    );
  }
}

export default InformationScreen;
