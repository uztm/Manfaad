export const formateSecondsToMinute = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    const formatedMiutes = String(minutes).padStart(2, '0')
    const formatedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${formatedMiutes}:${formatedSeconds}`


}