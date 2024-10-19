import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '../constants/images'
import { colors, fontSize } from '../constants/tokens'
import { defaulStyles } from '../styles'
import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'
import { Entypo, Ionicons } from '@expo/vector-icons'
import LoaderKit from 'react-native-loader-kit'

export type TrackListItemProps = {
    track: Track,
    onTrackSelect: (track: Track) => void
}

export default function TrackListItem({ track, onTrackSelect: hendleTrackSeletc }: TrackListItemProps) {
    // const { playing } = useIsPlaying()
    const isActiveTrack = useActiveTrack()?.url === track.url

    return (
        <TouchableHighlight onPress={() => hendleTrackSeletc(track)}>
            <View style={styles.trackItemContainer}>
                <View>
                    <FastImage source={{
                        uri: track.artwork ?? unknownTrackImageUri,
                        priority: FastImage.priority.normal,
                    }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />

                    {/* {isActiveTrack &&
                        (playing ? (<LoaderKit style={styles.trackPlayingIconIndicator} name='lineScaleParty' color={colors.icon} />) : (<Ionicons name='play' size={24} color={colors.icon} />))
                    } */}
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '100%' }}>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.trackTitleText,
                                color: isActiveTrack ? colors.primary : colors.text
                            }}
                        >{track.title}</Text>

                        {track.artist && (
                            <Text numberOfLines={1} style={styles.trackArtistText}>{track.artist}</Text>
                        )}
                    </View>

                    <Entypo name='dots-three-horizontal' size={18} color={colors.icon} />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaulStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%'
    },
    trackPlayingIconIndicator:{
        position: 'absolute',
        top: 10,
        left: 16,
        width: 16,
        height: 16
    },
    trackArtistText: {
        ...defaulStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4
    },
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
    }
})