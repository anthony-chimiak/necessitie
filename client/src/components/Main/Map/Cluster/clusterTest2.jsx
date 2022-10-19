/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useState, useMemo, useCallback, useEffect} from "react";
 import { ForceGraph3D } from "react-force-graph";
//  import clusterData from './clustdata'
 import './cluster.scss'

 
 
 
 export const NetworkCluster = () => {
      const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });

      useEffect(() => {
        setInterval(() => {
          // Add a new connected node every second
          setData(({ nodes, links }) => {
            const id = nodes.length;
            return {
              nodes: [...nodes, { id }],
              links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
            };
          });
        }, 1000);
      }, []);

      const handleClick = useCallback(node => {
        const { nodes, links } = data;

        // Remove node on click
        const newLinks = links.filter(l => l.source !== node && l.target !== node); // Remove links attached to node
        const newNodes = nodes.slice();
        newNodes.splice(node.id, 1); // Remove node
        newNodes.forEach((n, idx) => { n.id = idx; }); // Reset node ids to array index

        setData({ nodes: newNodes, links: newLinks });
      }, [data, setData]);

      return <ForceGraph3D
        enableNodeDrag={false}
        onNodeClick={handleClick}
        graphData={data}
      />;
    };

export default NetworkCluster;