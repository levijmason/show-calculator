import { Card, Grid, Input } from '@nextui-org/react'
import { useIntl } from 'react-intl'

export const Form = ({ register }: any) => {
  const { formatMessage } = useIntl()

  return (
    <Card variant="bordered" css={{ p: '$6', mw: '100%' }}>
      <form>
        <Grid.Container gap={3} justify="flex-start">
          <Grid xs={6} sm={3}>
            <Input
              id="venueCapacity"
              label={formatMessage({ id: 'venueCapacity' })}
              type="number"
              labelRight="people"
              width={'100%'}
              bordered
              {...register('venueCapacity')}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <Input
              id="averageTicketPrice"
              label={formatMessage({ id: 'averageTicketPrice' })}
              type="number"
              labelLeft="$"
              width={'100%'}
              bordered
              {...register('averageTicketPrice')}
            />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={3} justify="flex-start">
          <Grid xs={6} sm={3}>
            <Input
              id="artistPay"
              label={formatMessage({ id: 'artistPay' })}
              type="number"
              labelLeft="$"
              width={'100%'}
              bordered
              {...register('artistPay')}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <Input
              id="productionCost"
              label={formatMessage({ id: 'productionCost' })}
              type="number"
              labelLeft="$"
              width={'100%'}
              bordered
              {...register('productionCost')}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <Input
              id="marketingCost"
              label={formatMessage({ id: 'marketingCost' })}
              type="number"
              labelLeft="$"
              width={'100%'}
              bordered
              {...register('marketingCost')}
            />
          </Grid>
          <Grid xs={6} sm={3}>
            <Input
              id="otherCost"
              label={formatMessage({ id: 'otherCost' })}
              type="number"
              labelLeft="$"
              width={'100%'}
              bordered
              {...register('otherCost')}
            />
          </Grid>
        </Grid.Container>
      </form>
    </Card>
  )
}
