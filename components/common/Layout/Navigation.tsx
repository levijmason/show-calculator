import { Navbar, Text } from '@nextui-org/react'
import { useIntl } from 'react-intl'

export const Navigation = () => {
  const { formatMessage } = useIntl()

  return (
    <Navbar variant="sticky" disableBlur disableShadow>
      <Navbar.Brand
        css={{
          '@sm': {
            w: '12%',
          },
        }}
      >
        <Text h1 b>
          {formatMessage({ id: 'appTitle' })}
        </Text>
      </Navbar.Brand>
    </Navbar>
  )
}
