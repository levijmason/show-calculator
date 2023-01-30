import { Card, Grid, Progress, Text } from '@nextui-org/react'
import { useIntl } from 'react-intl'

interface DataDisplayProps {
  potentialGross: number
  totalExpenses: number
  breakEven: number
  potentialNet: number
}

export const DataDisplay = ({
  potentialGross,
  totalExpenses,
  breakEven,
  potentialNet,
}: DataDisplayProps) => {
  const data = [
    { id: 'potentialGross', value: potentialGross },
    { id: 'totalExpenses', value: totalExpenses },
    { id: 'breakEven', value: breakEven },
    { id: 'potentialNet', value: potentialNet },
  ]
  const { formatMessage, formatNumber } = useIntl()
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {data.map(({ id, value }, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card variant="bordered" css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <Text h3 b>
                  {formatMessage({ id: id })}
                </Text>
              </Card.Header>
              <Card.Body>
                {id === 'breakEven' ? (
                  <Text h3 >
                    {Number.isNaN(value) ? "-- " : formatNumber(value)}
                    {value === 1 ? " ticket" : " tickets"}
                  </Text>
                ) : (
                  <Text h3>
                    {Number.isNaN(value)
                      ? "$ --.--"
                      : formatNumber(value, {
                          style: "currency",
                          currency: "USD",
                        })}
                  </Text>
                )}
              </Card.Body>
              {id === 'totalExpenses' || id === 'potentialNet' ? (
                <Card.Footer>
                  <Progress
                    value={value}
                    max={potentialGross}
                    squared
                    color={id === 'totalExpenses' ? 'error' : 'success'}
                  />
                </Card.Footer>
              ) : null}
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}
