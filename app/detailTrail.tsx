import ReturnButton from '@/components/ReturnButton'
import React from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function detailTrail() {
  return (
    <SafeAreaView className='flex-1'>
        <View className='w-full'>
            <View className="w-full">
              <ReturnButton buttonType="secondary"/>
            </View>

        <Image
                source={require('../assets/imageTrilha.jpg')}
                style={{ width: '100%', height: 100 }}
                />
                </View>
    </SafeAreaView>
  )
}

export default detailTrail