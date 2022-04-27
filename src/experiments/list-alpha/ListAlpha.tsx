import React, { useState, CSSProperties, TransitionEvent } from 'react'
import cn from 'classnames'
import './styles.scss'
import { FullScreenResizer } from '../../components/resizer'

export const ListAlpha = (props: ISelectBoxAlphaProps) => {
  const { items } = props
  const [selectedItem, setSelectedItem] = useState<IData>()
  const [reverse, setReverse] = useState(false)
  const [selectedRect, setSelectedRect] = useState<IPositioning>()
  const onItemClick = (item: IData, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSelectedItem(item)
    setSelectedRect(rect)
  }
  const onFullScreenAnimEnd = (
    e: TransitionEvent<HTMLDivElement>,
    isFullScreen: boolean,
  ) => {
    if (!isFullScreen) {
      setSelectedItem(undefined)
      setReverse(false)
    }
  }

  return (
    <>
      <div className="list-alpha p-2 overflow-auto">
        {items.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            onClick={(e) => onItemClick(item, e)}
            className="cursor-pointer"
          />
        ))}
        {/* Selected */}
        {selectedItem && selectedRect && (
          <FullScreenResizer
            top={`${selectedRect.top}px`}
            width={`${selectedRect.width}px`}
            height={`${selectedRect.height}px`}
            left={`${selectedRect.left}px`}
            reverse={reverse}
            onAnimationEnd={onFullScreenAnimEnd}
          >
            <Item
              text={selectedItem.text}
              onClick={() => setReverse(true)}
              fullHeight
            />
          </FullScreenResizer>
        )}
      </div>
    </>
  )
}

interface IData {
  text: string
  id: number
}
interface ISelectBoxAlphaProps {
  items: IData[]
}

interface IPositioning {
  top: number
  width: number | string
  height: number | string
  left: number
}

interface IImageProps {}
export const Image: React.FC<IImageProps> = () => {
  return (
    <div className="list-image-alpha rounded-full h-20 w-20 flex-shrink-0" />
  )
}

interface IItemProps {
  text: string
  fullHeight?: boolean
  className?: string
  style?: CSSProperties
  onClick?: (event: React.MouseEvent) => void
}
export const Item: React.FC<IItemProps> = (props) => {
  const { text, onClick, className, style, fullHeight = false } = props
  return (
    <div
      className={cn(className, 'list-item-alpha mb-2 p-3 flex', {
        'h-full': fullHeight,
      })}
      onClick={onClick}
      style={style}
    >
      <Image />
      <div
        className={cn(
          'ml-2 color-2 h-20 overflow-hidden leading-relaxed',
          fullHeight ? 'h-full' : 'h-20',
        )}
      >
        {text}
      </div>
    </div>
  )
}
