import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.ts'

export const { theme } = resolveConfig(tailwindConfig)
