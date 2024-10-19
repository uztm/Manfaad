import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Track, useActiveTrack } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '../constants/images'
import { defaulStyles } from '../styles'
import { PlayPouseButton, SkipToNextButton } from './PlayerControls'
import { useLastActiveTrack } from '../hooks/useLastActiveTrack'
import { useRouter } from 'expo-router'

export const FloatingPlayer = () => {

    const router = useRouter()

    const activeTrack = useActiveTrack()
    const lastActiveTrack = useLastActiveTrack()

    const displayedTrack = activeTrack ?? lastActiveTrack

    if (!displayedTrack) return null

    const hendlePress = () => {
        router.navigate('/player')
    }

    return (
        <TouchableOpacity onPress={hendlePress} activeOpacity={0.7}
            style={[styles.container]}

        >
            <>
                <FastImage source={{
                    uri: displayedTrack.artwork ?? unknownTrackImageUri,
                    priority: FastImage.priority.normal,
                }}
                    style={styles.trackArtworkImage}
                />

                <View style={styles.trackTitileContainer}>
                    <Text style={styles.trackTitle}>{displayedTrack.title}</Text>
                </View>

                <View style={styles.trackControlsContainer}>
                    <PlayPouseButton iconSize={24} />
                    <SkipToNextButton iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8
    },
    trackTitle: {
        ...defaulStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10
    },
    trackTitileContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10
    },
    trackControlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,

    },
})