import { Button, Link, Navbar, Spacer, Text } from '@nextui-org/react'
import { useIntl } from 'react-intl'
import { ColorModeToggle } from '../ColorModeToggle'

export const Navigation = () => {
  const navItems = [
    { title: 'Makers', route: 'https://tripthe.fan' },
    { title: 'About', route: 'https://tripthe.fan/about' },
  ]
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
        <Text h1 b color="inherit">
          {formatMessage({ id: 'appTitle' })}
          <Text small b hideIn="sm">
            {formatMessage({ id: 'createdBy' })}
          </Text>
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight activeColor="primary" hideIn="sm">
        {navItems.map((item, index) => (
          <Navbar.Link
            key={item.title}
            href={item.route}
            isActive={index === 2}
          >
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content hideIn={'sm'}>
        <ColorModeToggle />
        <Button bordered color="primary" auto>
          {formatMessage({ id: 'navButton' })}
        </Button>
      </Navbar.Content>
      <Navbar.Content showIn={'sm'}>
        <ColorModeToggle />
        <Navbar.Toggle />
      </Navbar.Content>

      <Navbar.Collapse disableBlur>
        {navItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="primary"
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={item.route}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Spacer y={2} />
        <Navbar.CollapseItem key={'contact'}>
          <Button
            bordered
            color="primary"
            css={{
              minWidth: '100%',
            }}
          >
            {formatMessage({ id: 'navButton' })}
          </Button>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  )
}
