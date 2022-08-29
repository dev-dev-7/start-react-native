import * as Animated from 'react-native-animatable';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import confirmbg from '../../assets/images/confirmbg.png';
import theme from '../../styles/theme';
import Text from '../typography/Text';
import Button from '../buttons/Button';
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 5,
    height: '65%',
  },
  image: {
    backgroundColor: theme.colors.dark,
    padding: 5,
  },
  modalContainer_ios: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop_ios: {
    backgroundColor: theme.colors.dark,
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
  },
});

function BaseModal({
  navigation,
  children,
  dismissModal,
  handleKeyboardIOS,
  isVisible,
  ...other
}) {
  const openPayment = () => {
    dismissModal(false);
    navigation.navigate('CheckoutScreen');
  };

  return Platform.OS === 'android' ? (
    <Modal
      isVisible={isVisible}
      backdropColor={theme.colors.dark}
      backdropOpacity={0.5}
      onBackdropPress={dismissModal}
      onBackButtonPress={dismissModal}
      swipeDirection="down"
      style={styles.modal}
      {...other}>
      <View style={styles.modalContent}>
        <ImageBackground
          source={confirmbg}
          resizeMode="cover"
          style={styles.image}>
          <Text
            size={'normal'}
            color={'black'}
            weight={'semibold'}
            style={{textAlign: 'center'}}>
            {'Confirm your Order'}
          </Text>

          <Image
            source={{
              uri: 'https://storage.googleapis.com/ishro.com/uploads/62287fa82c2a3.png',
            }}
            style={{
              width: '100%',
              height: '30%',
              marginVertical: 12,
              borderRadius: 14,
            }}
          />
          <Text size={'xnormal'}>{'Name'}</Text>
          <Text size={'normal'} color={'black'} style={{paddingBottom: 8}}>
            {'Tomin  Tom'}
          </Text>
          <Text size={'xnormal'}>{'Mobile'}</Text>
          <Text size={'normal'} color={'black'} style={{paddingBottom: 8}}>
            {'+971564266125'}
          </Text>
          <Text size={'xnormal'}>{'Delivery on'}</Text>
          <Text size={'normal'} color={'black'} style={{paddingBottom: 8}}>
            {'Jan 05, 2022 11:30 AM'}
          </Text>
          <Text size={'xnormal'}>{'Total Amount'}</Text>
          <Text size={'normal'} color={'black'} style={{paddingBottom: 8}}>
            {'100'}
          </Text>
          <Button
            title="Continue"
            textTransform="capitalize"
            weight="semibold"
            size={'xnormal'}
            onPress={openPayment}
          />
        </ImageBackground>
      </View>
    </Modal>
  ) : (
    <RNModal
      onDismiss={dismissModal}
      onRequestClose={dismissModal}
      transparent
      visible={isVisible}>
      <View style={styles.modalContainer_ios}>
        <TouchableWithoutFeedback onPress={dismissModal}>
          <View style={styles.modalBackdrop_ios} />
        </TouchableWithoutFeedback>
        <KeyboardAvoidingView enabled={handleKeyboardIOS} behavior="position">
          <Animated.View animation="slideInUp" duration={300}>
            <View style={styles.modalContent}>{children}</View>
          </Animated.View>
        </KeyboardAvoidingView>
      </View>
    </RNModal>
  );
}

BaseModal.propTypes = {
  children: PropTypes.node,
  dismissModal: PropTypes.func.isRequired,
  handleKeyboardIOS: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
};

BaseModal.defaultProps = {
  children: null,
  handleKeyboardIOS: true,
};

export default BaseModal;
