import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { ChangerTranslateDetailed } from './ChangerTranslate'
import { getNumbersArray } from '../../utils/common'

interface IProps {
  value: number
  direction: 'up' | 'down'
}
export const NumberChanger: React.FC<IProps> = ({ value, direction }) => {
  const [values, setValues] = useState<{ digits: string[]; id: number }[]>([])
  useEffect(() => {
    setValues((values) => {
      counter += 1
      return [
        ...values,
        {
          digits: getNumbersArray(value),
          id: counter,
        },
      ].slice(-5)
    })
  }, [value])

  return (
    <div className="flex">
      {values.map((number, valueIndex) => (
        <div className="flex w-0 justify-center" key={`${number.id}`}>
          {number.digits.map((digit, i) => {
            const isCurrent = valueIndex === values.length - 1

            return (
              <ChangerTranslateDetailed
                key={`${number.digits.join()}-${i}`}
                fade={isCurrent ? 'in' : 'out'}
                direction={direction}
                noPointer={!isCurrent}
              >
                <div className={cn('flex text-3xl justify-center')}>
                  {digit}
                </div>
              </ChangerTranslateDetailed>
            )
          })}
        </div>
      ))}
    </div>
  )
}
let counter = 0
