import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Axis, Bar, Chart, Tooltip } from 'viser-react';

function RankChart({data, yTitle, title}) {

    const scale = [{
        dataKey: 'y',
        tickInterval: 20,
        alias: yTitle
        }];
        
       useEffect(() => {
            ReactDOM.render((
                <Chart 
                    forceFit 
                    height={400} 
                    data={data} 
                    scale={scale}
                >
                    <Tooltip />
                    <Axis />
                    <Bar position="x*y" />
                </Chart>
            ), document.getElementById('mountNode'+title));
       }, [data]);
        

    return (
        <div>
            <h2>{title}</h2>
            <div id={'mountNode'+title}></div>
        </div>
    );
}

export default RankChart;