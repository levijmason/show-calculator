import { zodResolver } from '@hookform/resolvers/zod'
import { Spacer } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DataDisplay } from './DataDisplay'
import { Form } from './Form'

export const ShowCalculatorValidation = z.object({
  venueCapacity: z
    .number()
    .min(1, { message: 'This field is required' })
    .max(350000, { message: 'What is this? A small nation?' }),
  averageTicketPrice: z
    .number()
    .min(1, { message: 'This field is required' })
    .max(500, { message: 'Your tickets are overpriced' }),
  artistPay: z.number(),
  productionCost: z.number(),
  marketingCost: z.number(),
  otherCost: z.number(),
})
export type ShowDataTypes = z.infer<typeof ShowCalculatorValidation>

export const ShowCalculator = () => {
  const {
    register,
    watch,
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
  const potentialNet = potentialGross - totalExpenses
  const breakEven = Math.ceil(totalExpenses / averageTicketPriceLive)

  return (
    <>
      <DataDisplay
        potentialGross={potentialGross}
        totalExpenses={totalExpenses}
        potentialNet={potentialNet}
        breakEven={breakEven}
      />
      <Spacer />
      <Form register={register} />
    </>
  )
}
