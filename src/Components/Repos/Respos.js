import React from 'react';
import {
  VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme
} from 'victory';

const data = [
  { quarter: 1, earnings: 12 },
  { quarter: 2, earnings: 6 },
  { quarter: 3, earnings: 2 },
  { quarter: 4, earnings: 24 }
];

const Repos = () => {

  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["HTML", "CSS", "SCSS", "JAVASCRIPT"]}
      />
      <VictoryAxis
        dependentAxis
      />
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
      />
    </VictoryChart>
  )

}

export default Repos;