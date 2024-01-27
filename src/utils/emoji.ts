export const emoji = (seed: string) => {
  const supportedEmojisRange = [0x1f600, 0x1f64f]
  const hashValue = seed
    .split('')
    .reduce((hash, char) => hash + char.charCodeAt(0), 0)
  const positiveHash = hashValue >= 0 ? hashValue : hashValue + 2 ** 32
  const emojiIndex =
    positiveHash % (supportedEmojisRange[1] - supportedEmojisRange[0] + 1)
  return String.fromCodePoint(supportedEmojisRange[0] + emojiIndex)
}
