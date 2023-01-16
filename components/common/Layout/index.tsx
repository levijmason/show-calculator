import { Box } from './Box'
import { Navigation } from './Navigation'

export const Layout = ({ children }: any) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    <Navigation />
    <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>{children}</Box>
  </Box>
)
