import { Button, Link, Navbar, Spacer, Text } from '@nextui-org/react'
import { useIntl } from 'react-intl'
import { AcmeLogo } from './AcmeLogo'
import { ColorModeToggle } from './ColorModeToggle'

export const Navigation = () => {
  const collapseItems = ['Trip the Fan', 'Services', 'Publishing', 'About']
  const { formatMessage } = useIntl()

  return (
    <Navbar variant="sticky" disableBlur disableShadow>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <AcmeLogo />
        <Text h1 b color="inherit" hideIn="xs">
          {formatMessage({ id: 'appTitle' })}
          <Text small b>
            {formatMessage({ id: 'createdBy' })}
          </Text>
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link href="https://tripthe.fan">Makers</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Publishing</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn={'xs'}>
        <ColorModeToggle />
        <Button bordered color="primary" auto>
          Reach Out
        </Button>
      </Navbar.Content>
      <Navbar.Content showIn={'xs'}>
        <ColorModeToggle />
      </Navbar.Content>

      <Navbar.Collapse disableBlur>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Spacer y={2} />
        <Navbar.CollapseItem key={'contact'}>
          <Button
            bordered
            color="secondary"
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
