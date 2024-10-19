import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RatingType, RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10,
    })

    await TrackPlayer.updateOptions({
        ratingType: RatingType.Heart,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop
        ]
    })

    // await TrackPlayer.setVolume(0.05)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad: () => void }) => {
    const isInnitialized = useRef(false)


    useEffect(() => {
        setupPlayer().then(() => {
            isInnitialized.current = true,
                onLoad?.()
        })
            .catch(error => {
                isInnitialized.current = false,
                    console.error(error)
            })
    }, [onLoad])
}