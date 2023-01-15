import { zodResolver } from '@hookform/resolvers/zod'
import { Card, Grid, Input, Progress, Spacer, Text } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { z } from 'zod'
import { Box } from './common/Box'

const ShowCalculatorValidation = z.object({
  venueCapacity: z.number().min(1, { message: 'Venue capacity is required' }),
  averageTicketPrice: z
    .number()
    .min(1, { message: 'Average ticket price is required' }),
  artistPay: z.number(),
  productionCost: z.number(),
  marketingCost: z.number(),
  otherCost: z.number(),
})

type ShowDataTypes = z.infer<typeof ShowCalculatorValidation>

const Content = () => {
  const initialValues = {
    venueCapacity: 350,
    averageTicketPrice: 25,
    artistPay: 300,
    productionCost: 200,
    marketingCost: 200,
    otherCost: 100,
  }
  const { formatMessage, formatNumber } = useIntl()
  const [showData, setShowData] = useState<ShowDataTypes | null>(initialValues)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ShowDataTypes>({
    resolver: zodResolver(ShowCalculatorValidation),
  })

  const venueCapacityLive = Number(watch('venueCapacity'))
  const averageTicketPriceLive = Number(watch('averageTicketPrice'))
  const artistPayLive = Number(watch('artistPay'))
  const productionCostLive = Number(watch('productionCost'))
  const marketingCostLive = Number(watch('marketingCost'))
  const otherCostLive = Number(watch('otherCost'))

  const potentialGross = venueCapacityLive * averageTicketPriceLive
  const totalExpenses =
    artistPayLive + productionCostLive + marketingCostLive + otherCostLive
  const breakEven = Math.ceil(totalExpenses / averageTicketPriceLive)

  const onSubmit: SubmitHandler<ShowDataTypes> = (data) => setShowData(data)

  return (
    <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={6} sm={3}>
          <Card variant="bordered" css={{ mw: '300px' }}>
            <Card.Header>
              <Text h3 b>
                {formatMessage({ id: 'potentialGross' })}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text h3 color="primary">
                {formatNumber(potentialGross, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={3}>
          <Card variant="bordered" css={{ mw: '300px' }}>
            <Card.Header>
              <Text h3 b>
                {formatMessage({ id: 'totalExpenses' })}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text h3 color="primary">
                {formatNumber(totalExpenses, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={3}>
          <Card variant="bordered" css={{ mw: '300px' }}>
            <Card.Header>
              <Text h3 b>
                {formatMessage({ id: 'breakEven' })}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text h3 color="primary">
                {formatNumber(breakEven)}{' '}
                {breakEven == 1 ? 'ticket' : 'tickets'}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Progress
        value={totalExpenses}
        max={potentialGross}
        squared
        color="error"
        status="error"
      />
      <Spacer y={1} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={4}>
          <Grid>
            <Input
              id="venueCapacity"
              label={formatMessage({ id: 'venueCapacity' })}
              defaultValue={showData?.venueCapacity}
              type="number"
              labelRight="people"
              bordered
              {...register('venueCapacity')}
            />
          </Grid>
          <Grid>
            <Input
              id="averageTicketPrice"
              label={formatMessage({ id: 'averageTicketPrice' })}
              defaultValue={showData?.averageTicketPrice}
              type="number"
              labelLeft="$"
              bordered
              {...register('averageTicketPrice')}
            />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={4}>
          <Grid>
            <Input
              id="artistPay"
              label={formatMessage({ id: 'artistPay' })}
              defaultValue={showData?.artistPay}
              type="number"
              labelLeft="$"
              bordered
              {...register('artistPay')}
            />
          </Grid>
          <Grid>
            <Input
              id="productionCost"
              label={formatMessage({ id: 'productionCost' })}
              defaultValue={showData?.productionCost}
              type="number"
              labelLeft="$"
              bordered
              {...register('productionCost')}
            />
          </Grid>
          <Grid>
            <Input
              id="marketingCost"
              label={formatMessage({ id: 'marketingCost' })}
              defaultValue={showData?.marketingCost}
              type="number"
              labelLeft="$"
              bordered
              {...register('marketingCost')}
            />
          </Grid>
          <Grid>
            <Input
              id="otherCost"
              label={formatMessage({ id: 'otherCost' })}
              defaultValue={showData?.otherCost}
              type="number"
              labelLeft="$"
              bordered
              {...register('otherCost')}
            />
          </Grid>
        </Grid.Container>
      </form>
    </Box>
  )
}

export default Content
