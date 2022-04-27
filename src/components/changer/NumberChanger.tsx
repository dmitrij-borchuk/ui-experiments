import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { ChangerTranslateDetailed } from './ChangerTranslate'
import { getNumbersArray } from '../../utils/common'

interface IProps {
  value: number
  direction: 'up' | 'down'
}
export const NumberChanger: React.FC<IProps> = ({ value, direction }) => {
  const numbers = getNumbersArray(value)
  const [currentNumbers, setCurrentNumbers] = useState(numbers)
  const [previousValue, setPreviousValue] = useState(value)
  const [values, setValues] = useState<string[][]>([])

  useEffect(() => {
    setValues((values) => [...values, getNumbersArray(value)])
  }, [value])

  return (
    <div className="flex">
      {values.map((number, valueIndex) => (
        <div className="flex w-0 justify-center">
          {number.map((digit, i) => {
            const isCurrent = valueIndex === values.length - 1

            return (
              <ChangerTranslateDetailed
                key={i}
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
