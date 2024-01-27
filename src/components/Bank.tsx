type BankProps = {
  amount: number
}

export const Bank = ({ amount }: BankProps) => {
  const arrAmount = Intl.NumberFormat('en-US').format(amount).split(',')
  const [big, ...other] = arrAmount
  return (
    <div className="flex items-baseline">
      <div className="text-2xl">{big}</div>
      <div className="opacity-60 text-lg">
        {other.length !== 0 ? ',' : ''}
        {other.join(',')}
      </div>
    </div>
  )
}
