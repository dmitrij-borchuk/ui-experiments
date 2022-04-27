import React, { useCallback, useState } from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Scaler } from '../../components/scaler/Scaler'
import { NumberChanger } from '../../components/changer'
import './styles.css'

// https://www.pinterest.com/pin/140806228654104/

// TODO: fast clicking
// TODO: range validation
// TODO: forbid to go out of the range
// TODO: controlled component
// TODO: control size outside
// TODO: keyboard (up/down arrows)
// TODO: inline usage( 9 -> 10, 99 -> 100)
interface INumberSelectAlphaProps {
  defaultValue?: number
}
export const NumberSelectAlpha: React.FC<INumberSelectAlphaProps> = (props) => {
  const { defaultValue = 0 } = props
  const [value, setValue] = useState(defaultValue)
  const [previousValue, setPreviousValue] = useState(defaultValue)
  const updateValue = useCallback(
    (v: number) => {
      setValue(v)
      setPreviousValue(value)
    },
    [value],
  )
  const upBtn = useCallback(
    (trigger: () => void) => {
      return (
        <button
          onClick={() => {
            trigger()
            updateValue(value + 1)
          }}
          className={cn('focus:outline-none w-full')}
        >
          <FontAwesomeIcon icon={faAngleUp} size="3x" />
        </button>
      )
    },
    [updateValue, value],
  )
  const downBtn = useCallback(
    (trigger: () => void) => {
      return (
        <button
          onClick={() => {
            trigger()
            updateValue(value - 1)
          }}
          className={cn('focus:outline-none w-full')}
        >
          <FontAwesomeIcon icon={faAngleDown} size="3x" />
        </button>
      )
    },
    [updateValue, value],
  )

  return (
    <div className={cn('flex flex-col items-center')}>
      <Scaler className={cn('w-full')}>{upBtn}</Scaler>
      <NumberChanger
        value={value}
        direction={previousValue > value ? 'up' : 'down'}
      />
      <Scaler className={cn('w-full')}>{downBtn}</Scaler>
    </div>
  )
}
