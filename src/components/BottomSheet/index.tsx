import { Animated, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  visible: boolean;
  handelDismiss: () => void;
}

const BottomSheet = (props: Props) => {
  const {
    visible,
    handelDismiss
  } = props;
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={handelDismiss}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.container]}>

        </Animated.View>
      </View>
    </Modal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
})