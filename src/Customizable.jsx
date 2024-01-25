import React from 'react'
import GridLayout, { WidthProvider } from "react-grid-layout";
import './Customizable.css'

const ReactGridLayout = WidthProvider(GridLayout);

const Customizable = () => {

    const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2},
    { i: "b", x: 0, y: 1, w: 1, h: 2},
    { i: "c", x: 1, y: 0, w: 1, h: 2},
    { i: "d", x: 1, y: 1, w: 1, h: 2},
    { i: "e", x: 2, y: 0, w: 1, h: 2},
    { i: "f", x: 2, y: 1, w: 1, h: 2},
    { i: "g", x: 3, y: 0, w: 1, h: 2},
    { i: "h", x: 3, y: 1, w: 1, h: 2}
  ];
  return (
    <div className='x'>
        <ReactGridLayout
            className="layout"
            layout={layout}
            cols={4}
            rowHeight={30}
        >
            <div key="a" className='card1'>a</div>
            <div key="b" className='card2'>b</div>
            <div key="c" className='card3'>c</div>
            <div key="d" className='card4'>d</div>
            <div key="e" className='card4'>e</div>
            <div key="f" className='card4'>f</div>
            <div key="g" className='card4'>g</div>
            <div key="h" className='card4'>h</div>
        </ReactGridLayout>
    </div>
  )
}

export default Customizable