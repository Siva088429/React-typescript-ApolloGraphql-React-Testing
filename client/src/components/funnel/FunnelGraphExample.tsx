import React, { useEffect, useRef } from 'react';
import FunnelGraph from 'funnel-graph-js';

interface FunnelGraphExampleProps {
  data: Array<{ label: string, value: number }>;
}

const FunnelGraphExample: React.FC<FunnelGraphExampleProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const graphData = {
    labels: ['Impressions', 'Add To Cart', 'Buy'],
    subLabels: ['Direct', 'Social Media', 'Ads'],
    colors: [
        ['#FFB178', '#FF78B1', '#FF3C8E'],
        'red',
        ['blue']
    ],
    values: [
        [2000, 4000, 6000],
        [3000, 1000, 1700],
        [200, 30, 130]
    ]
  }

  useEffect(() => {
    if(containerRef.current && graphData) {
      const graph = new FunnelGraph({
          container: containerRef.current as HTMLDivElement,
          gradientDirection: 'horizontal',
          data: graphData,
          displayPercent: true,
          direction: 'horizontal'
      });
      console.log(containerRef.current);
      graph.draw();
    }
  }, [graphData, containerRef]);

  return (
    <div>
        <div ref={containerRef} style={{ height: '300px', width: '100%' }}>
        </div>
    </div>
  );
}

export default FunnelGraphExample;
