import "./ChartBar.css"

const ChartBar = ( {dataset, maxValue} ) => {
  let barFillHeight = '0%'

  console.log(dataset)
  console.log(maxValue)

  if(maxValue > 0)
    barFillHeight = Math.round(( dataset.value * 100 ) / maxValue) + '%';
  
  console.log(barFillHeight)

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{dataset.label}</div>
    </div>
  )
}

export default ChartBar