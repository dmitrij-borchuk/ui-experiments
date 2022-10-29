import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import * as d3 from 'd3'

// TODO: close the color picker when the user clicks outside of it
// TODO: close after a timeout if the mouse is not over the color picker
// TODO: picker color
// TODO: button animation on click

type Props = {
  onChange?: (color: string) => void
}
export const ColorPicker = (props: Props) => {
  const [p, setP] =
    useState<d3.Selection<SVGPathElement, number, d3.BaseType, unknown>>()
  const [open, setOpen] = useState(false)
  // const svg = useMemo(() => d3
  // .create('svg'), [])
  useEffect(() => {
    const p = d3
      .select('#colors')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('stroke', 'black')
      .attr('fill', (_, i) => d3.interpolateRainbow(i / n))
      .attr('d', sectors(40, 41))

    p.exit().remove()
    setP(p)
  }, [])
  function onClick() {
    p?.transition()
      .duration(500)
      .attr('d', sectors(40, open ? 41 : 240))
      .delay((_, i) => i * 50)

    if (open) {
      p?.on('mouseover', null)
      p?.on('mouseout', null)
    } else {
      p?.on('mouseover', handleMouseOver)
      p?.on('mouseout', handleMouseOut)
    }

    setOpen(!open)
  }

  // d3.select("body").transition()
  //   .style("background-color", "black");

  return (
    <div className="relative">
      <svg
        id="colors"
        viewBox="-260 -260 520 520"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '260px',
          height: '260px',
          transform: 'translate(-50%, -50%)',
        }}
      ></svg>
      <button
        onClick={onClick}
        className="rounded-full border-2 border-black h-10 w-10 relative"
      >
        <FontAwesomeIcon icon={faEyeDropper} />
      </button>
    </div>
  )
}

const n = 12
const data = Array.from({ length: n }, (_, i) => i)
const arc = d3
  .arc<[number, number, number, number]>()
  .innerRadius(([inner, outer, startAngle, endAngle]) => inner)
  .outerRadius(([inner, outer, startAngle, endAngle]) => outer)
  .startAngle(([inner, outer, startAngle, endAngle]) => startAngle)
  .endAngle(([inner, outer, startAngle, endAngle]) => endAngle)
const sectors = (rFrom: number, rTo: number) => (_: any, i: number) => {
  const startSector = 2
  return arc([
    rFrom,
    rTo,
    ((i + startSector) / n) * 2 * Math.PI,
    ((i + startSector + 1) / n) * 2 * Math.PI,
  ])
}
function handleMouseOver(this: Element, d: number[], i: number) {
  d3.select(this).transition().duration(100).attr('d', sectors(40, 260)(d, i))
}
function handleMouseOut(this: Element, d: number[], i: number) {
  d3.select(this).transition().duration(100).attr('d', sectors(40, 240)(d, i))
}
