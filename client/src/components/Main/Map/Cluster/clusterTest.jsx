/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useState, useMemo, useCallback, useEffect} from "react";
 import { ForceGraph3D } from "react-force-graph";
 import clusterData from './clustdata'
 import './cluster.scss'

 
 
 
 export const NetworkCluster = () => {
  const [isZoomEnabled, setIsZoomEnabled] = [true];
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);
  const [data, setData] = useState({ nodes: [
    {
      id: 0,
      name: 'Home',
      link: "Home",
    }], links: [] });

  const NODE_R = 6;

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node && node.neighbors) {
      highlightNodes.add(node);
      node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      node.links.forEach(link => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
  };

  const handleNodeClick = node => {
    if (node && node.link) {
      window.open(`/${node.link}`, "_self");
    } 
  }

  const handleLinkHover = link => {
    highlightNodes.clear();
    highlightLinks.clear();

    if (link) {
      highlightLinks.add(link);
      highlightNodes.add(link.source);
      highlightNodes.add(link.target);
    }

    updateHighlight();
  };



  useEffect(() => {
    setInterval(() => {
      // Add a new connected node every second
      setData(({ nodes, links }) => {
        debugger;
        const id = nodes.length;
        return {
          nodes: [...nodes, { id }],
          links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
        };
      });
    }, 1000);
  }, []);

    // const paintRing = useCallback((node, ctx) => {
  //   // add ring just for highlighted nodes
  //   ctx.beginPath();
  //   ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
  //   ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
  //   ctx.fill();
  // }, [hoverNode]);

   return (
    <ForceGraph3D 
      // graphData={genRandomTree(30)} 
      graphData={data}
      backgroundColor={"Black"}
      enableNavigationControls={isZoomEnabled}
      // linkWidth={1}
      // linkOpacity={1}
      // linkColor={'#272D38'}
      // nodeOpacity={1}
      // nodeRelSize={NODE_R}
      // nodeOpacity={.9}
      autoPauseRedraw={false}
      linkWidth={link => highlightLinks.has(link) ? 5 : 1}
      linkDirectionalParticles={4}
      linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
      // nodeThreeObjectExtend={node => highlightNodes.has(node) ? 'before' : undefined}
      // nodeThreeObject={paintRing}
      onNodeHover={handleNodeHover}
      onNodeClick={handleNodeClick}
      onLinkHover={handleLinkHover}
    />

   );
 }

export default NetworkCluster;