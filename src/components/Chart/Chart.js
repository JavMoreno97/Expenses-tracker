import ChartBar from "./ChartBar"

import "./Chart.css"

const Chart = ( {datasets} ) => { 
  const valueArray = datasets.map(dataset => dataset.value)
  const maxValue = Math.max(...valueArray)

  return (
    <div className="chart">
      {datasets.map((dataset) => <ChartBar key={dataset.label} dataset={dataset} maxValue={maxValue} />)}
    </div>
  )
}

export default Chart