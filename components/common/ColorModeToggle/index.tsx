import { Switch, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

export const ColorModeToggle = () => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  return (
    <>
      <Switch
        checked={isDark}
        name={'colorModeToggle'}
        size={'lg'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOff={<SunIcon filled={undefined} size={undefined} height={undefined} width={undefined} label={undefined} />}
        iconOn={<MoonIcon filled={undefined} size={undefined} height={undefined} width={undefined} label={undefined} />}
      />
    </>
  )
}
