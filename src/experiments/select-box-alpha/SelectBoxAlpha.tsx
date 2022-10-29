import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useMemo,
} from 'react'
import cn from 'classnames'
import { Arrow } from '../../components/icons'
import { DIRECTION } from '../../components/icons/Arrow'
import './styles.css'
import { getObjByKey } from '../../utils/common'
import { Changer } from '../../components/changer'

interface IItem {
  label: string
  key: string
}
interface ISelectBoxAlphaProps {
  width?: number
  open?: boolean
  value?: string
  onOpenChanged?: (state: boolean) => void
  onChange?: (value: string | undefined) => void
  items: IItem[]
}
// TODO: Inline demo
// TODO: Items should be shown one after another
// TODO: Height bounce after closing
// TODO: a11y
// TODO: i18n
// TODO: Selected item should go to the position on close
// TODO: Placeholder color
export const SelectBoxAlpha: React.FC<ISelectBoxAlphaProps> = (props) => {
  const { width, items, open, onOpenChanged, onChange, value } = props
  const itemsRef = useRef<HTMLDivElement>(null)
  const [dropHeight, setDropHeight] = useState(0)
  const [isOpened, setIsOpened] = useState(open)
  const [currentKey, setCurrentKey] = useState(value)
  const currentDropHeight = isOpened ? dropHeight : 0
  const key2label = useMemo(() => getObjByKey('key', items), [items])
  const onSelectClick = useCallback(() => {
    setIsOpened(!isOpened)
    if (onOpenChanged) {
      onOpenChanged(!isOpened)
    }
  }, [isOpened, onOpenChanged])
  const onItemClick = useCallback(
    (key: string) => {
      setCurrentKey(key)
      if (onChange) {
        onChange(key)
      }
    },
    [onChange],
  )
  const onClearClick = useCallback(
    (e: React.MouseEvent) => {
      if (isOpened) {
        return
      }
      setCurrentKey(undefined)
      if (onChange) {
        onChange(undefined)
      }
      e.stopPropagation()
    },
    [onChange, isOpened],
  )

  useLayoutEffect(() => {
    const { current } = itemsRef
    if (current === null) {
      return
    }

    setDropHeight(current.offsetHeight)
  }, [items])

  return (
    <div
      className="select-alpha shadow text-gray-900 bg-white rounded-sm flex items-stretch justify-between text-lg cursor-pointer"
      style={{ width }}
      onClick={onSelectClick}
    >
      <div className="w-full">
        {/* Current value */}
        <div className="selected-value flex items-center px-5">
          <Changer>
            {currentKey ? key2label[currentKey].label : 'Choose'}
          </Changer>
        </div>

        {/* List */}
        <div
          ref={itemsRef}
          className="drop-items-container overflow-hidden text-gray-500"
          style={{ height: itemsRef.current ? currentDropHeight : 'auto' }}
        >
          {items.map((item) => (
            <div
              key={item.key}
              className="drop-item hover:bg-gray-100 px-5"
              onClick={() => onItemClick(item.key)}
            >
              <div className="drop-item-text flex items-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right icons */}
      <div className="py-4 px-5">
        <div
          className="flex flex-col justify-between h-full"
          onClick={onClearClick}
        >
          <span
            className={cn('animate-transform-03', {
              'make-clear-icon-top': currentKey,
            })}
          >
            <Arrow />
          </span>
          <span
            className={cn('animate-transform-03', {
              'make-clear-icon-bottom': currentKey,
            })}
          >
            <Arrow direction={DIRECTION.BOTTOM} />
          </span>
        </div>
      </div>
    </div>
  )
}
