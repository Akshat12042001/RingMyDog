import React, {Component} from 'react';
import {
  Button,
  CheckBox,
  Footer,
  Header,
  ScreenContainer,
} from '../../../components/atoms';
import {NAVIGATION, STRINGS} from '../../../constants';
import {AppState, Linking, ScrollView, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';
import {showAlert} from '../../../utils/alerts';
import {getPermission} from '../../../utils/permissions';

class TermsAndConditionsScreen extends Component {
  constructor(props) {
    super(props);
    this.lastState = React.createRef();
    this.state = {
      isCheckboxActive: false,
      loading: false,
      isGranted: null,
    };
  }

  componentDidMount() {
    this.subscription = AppState.addEventListener('change', current => {
      if (this.lastState.current === 'background' && current === 'active') {
        if (this.state.isGranted === false) {
          this.setState({loading: false});
        }
      }
      this.lastState.current = current;
    });
    if (this.state.loading === false && this.state.isGranted === null) {
      this.fetchPermission();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.loading !== prevState.loading ||
      this.state.isGranted !== prevState.isGranted
    ) {
      this.fetchPermission();
    }
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  fetchPermission = () => {
    if (!this.state.loading && !this.state.isGranted) {
      this.setState({loading: true, isGranted: null});
      getPermission().then(response => {
        if (!response.status) {
          if (response.isBlocked) {
            showAlert({
              title: 'Permission Incomplete',
              message: 'Please provide permissions to continue',
              onSuccess: () => {
                Linking.openSettings().then(_ => {
                  this.setState({isGranted: response.status});
                });
              },
            });
          } else {
            showAlert({
              title: 'Permission Incomplete',
              message: 'Please provide permissions to continue',
              onSuccess: () => {
                this.setState({isGranted: response.status, loading: false});
              },
            });
          }
        } else {
          this.setState({isGranted: true, loading: true});
        }
      });
    }
  };
  render() {
    return (
      <ScreenContainer>
        <Header title={STRINGS.TERMS_AND_CONDITIONS_SCREEN.TITLE} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml
            source={{
              html: STRINGS.TERMS_AND_CONDITIONS_SCREEN.HTML,
            }}
          />
        </ScrollView>
        <View style={styles.checkboxContainer}>
          <CheckBox
            onPress={() =>
              this.setState({isCheckboxActive: !this.state.isCheckboxActive})
            }
            isActive={this.state.isCheckboxActive}
            title={STRINGS.TERMS_AND_CONDITIONS_SCREEN.ACCEPT_TERMS}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={STRINGS.BUTTON_LABELS.NEXT}
              containerStyles={styles.button}
              isDisabled={!this.state.isCheckboxActive}
              onPress={() =>
                this.props.navigation.navigate(
                  NAVIGATION.AUTH.INFORMATION_SCREEN,
                )
              }
            />
            <Footer />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}

export default TermsAndConditionsScreen;
