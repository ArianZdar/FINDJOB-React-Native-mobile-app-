import React from 'react'
import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './company.style'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ 
            uri:  
              companyLogo 
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onError={() => {
            console.log(`Failed to load image for: ${companyName}`);
          }}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle} numberOfLines={1}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={companyName} >{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName} numberOfLines={1}>{location}</Text>
        </View>

      </View>

    </View>
  )
}

export default Company
