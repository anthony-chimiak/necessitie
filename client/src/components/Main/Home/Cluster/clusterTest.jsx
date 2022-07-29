/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useState, useMemo, useCallback} from "react";
 import { ForceGraph3D } from "react-force-graph";
 import clusterData from './clustdata'
 import './cluster.scss'

 
 
 
 export const NetworkCluster = () => {
  const [isZoomEnabled, setIsZoomEnabled] = [false];
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);

  const NODE_R = 6;

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
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

  const paintRing = useCallback((node, ctx) => {
    // add ring just for highlighted nodes
    ctx.beginPath();
    ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
    ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
    ctx.fill();
  }, [hoverNode]);

  // function genRandomTree(N = 300) {
  //   return {
  //     nodes: [...Array(N).keys()].map((i) => ({ id: i, color:'black', name:`` })),
  //     links: [...Array(N).keys()]
  //       .filter((id) => id)
  //       .map((id) => ({
  //         source: id,
  //         target: Math.round(Math.random() * (id - 1)),
  //         color: "black"
  //       }))
  //   };
  // }
 
   return (
    <ForceGraph3D 
      // graphData={genRandomTree(30)} 
      graphData={clusterData}
      backgroundColor={"White"}
      enableNavigationControls={isZoomEnabled}
      // linkWidth={1}
      // linkOpacity={1}
      // linkColor={'#272D38'}
      // nodeOpacity={1}
      nodeRelSize={NODE_R}
      nodeOpacity={.9}
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