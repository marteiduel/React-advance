import React from 'react'

import Chartbar from './ChartBar'
import './Chart.css'

const Chart = props =>{
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <Chartbar value={dataPoint.value} />)}
    </div>
}

export default Chart 