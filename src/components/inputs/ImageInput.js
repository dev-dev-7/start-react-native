import React, { Component } from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import theme from '../../styles/theme'
import cameraIcon from '../../assets/icons/add-image.png'
import closeIcon from '../../assets/icons/close.png'
import { getPhoto } from '../../services/nativeAccessService'

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: 90,
    borderRadius:10
  },
  closeIconWrapper: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  closeIcon: {
    height: 20,
    width: 20,
    backgroundColor:'red',
    borderRadius:15
  },
  imageViewWrapper: {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.dark_light,
    padding:0,
    margin:5
  }
})

const ImageView = ({ source, onClose }) => {
  return (
    <View style={styles.imageViewWrapper}>
      <Image style={styles.image} source={source}/>
      {onClose && <View style={styles.closeIconWrapper}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Image style={styles.closeIcon} source={closeIcon} />
        </TouchableWithoutFeedback>
      </View>}
    </View>
  )
}


class ImageInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  handleSelectImage = async () => {
    const { images } = this.state
    const { onChangeValue } = this.props
    if (images.length > 7) {
      alert('Maximum image limit reached.')
      return
    }
    const response = await getPhoto()
    if (response?.uri) {
      const newImages = [...images, {
        id: Math.random().toString(36).substr(2, 9),
        uri: response.uri
      }]
      this.setState({
        images: newImages
      })

      if (onChangeValue) onChangeValue(newImages)
    }
  }

  handleCloseImage = (id) => {
    const { images } = this.state
    const { onChangeValue } = this.props
    const newImages = [...images.filter(image => image.id !== id)]
    this.setState({
      images: newImages
    })
    if (onChangeValue) onChangeValue(newImages)
  }

  render() {
    const { ...other } = this.props
    const { images } = this.state;
    return (
        <View style={{ alignItems: 'flex-start', flexGrow: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          {images.map(({ uri, id }) => <ImageView key={`images-${id}`} source={{ uri }} onClose={() => this.handleCloseImage(id)} />)}
          <TouchableWithoutFeedback onPress={() => this.handleSelectImage()}>
            <View style={{ justifyContent:'center', alignContent:'center', alignItems:'center', borderRadius:15}}>
              <ImageView source={cameraIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>
    )
  }

}

export default ImageInput
