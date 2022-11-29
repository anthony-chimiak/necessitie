/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useState, useMemo, useCallback, useEffect, useRef} from "react";
 import { ForceGraph3D, ForceGraph2D } from "react-force-graph";
 import * as d3 from "d3";
 import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force'

 import clusterData from './clustdata'
 import SizeMe from 'react-sizeme'
 import './cluster.scss'

 
 
 
 export const NetworkCluster = (props) => {
  const [isZoomEnabled, setIsZoomEnabled] = [false];
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);
  const [tickNum, setTickNum] = useState(0);
  const data = {
    nodes: clusterData.nodes,
    links: clusterData.links
  };
  const clusterNodeHash = {};
  clusterData.nodes.forEach(node => clusterNodeHash[node.id] = node);
  const {height, width} = props;

  const forceRef = useRef(null);
  const NODE_R = 6;
  const screenDiv = 4;

  const findSlope = (x1, y1, x2, y2) => {
    if (x2 - x1 !== 0)
      return (y2 - y1) / (x2 - x1);
    return 100000;
  }

  const findDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
  }

  const findCartPoints = (x1, y1, x2, y2, d) => {
    const m = findSlope(x1, y1, x2, y2);
    const finalX = (x1 + d/Math.sqrt(1 + m**2));
    const finalY = (y1 + (d*m)/Math.sqrt(1 + m**2));
    return {x: finalX, y: finalY};
  }

  let clusterNodes = clusterData.nodes;
  const clusterLinks = clusterData.links;


  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = node => {
    const fg = forceRef.current;
    highlightNodes.clear();
    highlightLinks.clear();
    if (node && node.neighbors) {
      highlightNodes.add(node);
      node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      node.links.forEach(link => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
    fg.stopAnimation(true);
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

  const calcOrbitNodeCoords = (node, orbitNode) => {
    const gravNode = clusterNodeHash[orbitNode.gravityNode];
    // const slope = findSlope(gravNode.x, gravNode.y, orbitNode.x, orbitNode.y);
    const distance = findDistance(node.x, node.y, gravNode.x, gravNode.y);
    return findCartPoints(gravNode.x, gravNode.y, orbitNode.x, orbitNode.y, distance);
  }

  const handleNodeDragEnd = node => {
    node.fx = node.x;
    node.fy = node.y;
    node.orbitNodes.forEach(shallowOrbitNode => {
      const orbitNode = clusterNodeHash[shallowOrbitNode.id];
      const newCoords = calcOrbitNodeCoords(node, orbitNode);
      orbitNode.fx = newCoords.x;
      orbitNode.fy = newCoords.y;
    })
  }

  const handleNodeDrag = node => {
    node.orbitNodes.forEach(shallowOrbitNode => {
      const orbitNode = clusterNodeHash[shallowOrbitNode.id];
      const newCoords = calcOrbitNodeCoords(node, orbitNode);
      orbitNode.x = newCoords.x;
      orbitNode.y = newCoords.y;
    })
  }

  const customCenterFunc = (alpha) => {
    for (let i = 0; i < clusterNodes.length; ++i) {
      const node = clusterNodes[i];

      // if (node.fx == null) node.x += node.vx *= velocityDecay;
      if (node.gravityNode === 'Right-Grav' && node.id === "Services")  {
        node.vy -= 100*alpha;
      //   node.x -= 1000*alpha;
      // } else {
      //   node.y += 50*alpha
      //   node.x += 50*alpha
      }
    }
  }

  useEffect(() => {
    const fg = forceRef.current;
    // fg.d3Force('center', null);
    // fg.d3Force('charge', null);
    // fg.d3Force('link', null);
    fg.d3Force('link').distance((link) => {
      let distance = link.distance||30;
      if (link.layer) {
        distance+=(link.layer*15);
      }
      return distance;
    })
    .iterations(4);


    fg.d3Force('charge').strength(-10).distanceMax(50);
    fg.d3Force('center').strength(1).y(-height/4).x(0);
    // fg.d3Force('customCenter', customCenterFunc);

    
    // fg.pauseAnimation(true);
    // debugger;


    // fg.d3Force("border", pushInBorders);
    // function pushInBorders(alpha) {
    //   clusterNodes.forEach((node) => {
    //     const widthBorder = -width/screenDiv;
    //     const heightBorder = -(height/screenDiv + 20);
    //     if (node.x < (widthBorder - 50) ) {
    //       // debugger;
    //       // node.x += (widthBorder - node.x);
    //       node.vx += (widthBorder - node.x)/100
    //     }
    //     if (node.y < (heightBorder - 50)) {
    //       node.vy += (heightBorder - node.y)/100;
    //     }
    //   })
    // } 
    // fg.d3Force('center').strength(2);
      
    // }).strength((link) => {
    //   if (link.noForce) {
    //     return 0;
    //   }
    //   return 1;
    //   });
    // fg.d3Force('radial', d3.forceRadial(200).x(100));
    // fg.d3Force('link', customLinkFunc);
    // fg.d3Force("x", d3.forceX().strength(0).x(customForceFunc));

    // fg.d3Force('x', d3.forceX()).strength(30);

    // fg.d3Force('x', d3.forceX(node => {
    //   return node.pullX||node.vx;
    // }));
    // fg.d3Force("cluster", clustering)//<<------- CUSTOM FORCE 
    // function clustering(alpha) {
    //   clusterNodes.forEach(function(node) {
    //     if (node.orbitNodes.length) {
    //       node.orbitNodes.forEach(function(tempNode) {
    //         const secondNode = clusterNodeHash[tempNode.id];
    //         const distance = Math.sqrt((node.x - secondNode.x)**2 + (node.y - secondNode.y)**2);
    //         if (distance > 0) {
    //           const slope = findSlope(node.x, node.y, secondNode.x, secondNode.y);

    //         }
    //       })
    //     }
    //   });
    // }





    // fg.d3Force('y', d3.forceX(node => {
    //   return -50;
    // }));
    // fg.d3Force('y', d3.forceY(customYFunc));
    // fg.d3Force("x", d3.forceX().strength(0).x(customForceFunc));
    // forceRef.current.d3Force("link").strength(1).distance(20).iterations(10);
    // const simulation = d3.forceSimulation(nodes)
    // .force("charge", d3.forceManyBody().strength(-30))
    // .force("link", d3.forceLink(links).strength(1).distance(20).iterations(10))
    // .on("tick", ticked);

  })



  const paintRing = useCallback((node, ctx) => {
    // add ring just for highlighted nodes
    // ctx.beginPath();
    // ctx.arc(node.x, node.y, 50, 10, 2 * Math.PI);
    // ctx.stroke();

    ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
    ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
    ctx.fill();
  }, [hoverNode]); 

  const linkArc = (link, ctx) => {

    if (link.arcTarg && link.source.id) {
      // let gravNode = source?.neighbors.find(node => node.id === link.gravity);
      let {source, target} = link;
      let arcTarget = clusterNodeHash[link.arcTarg];
      let gx = source.x;
      let gy = source.y;
      let sx = target.x;
      let sy = target.y;
      let tx = arcTarget.x;
      let ty = arcTarget.y;
      let r = Math.sqrt((sx - gx)**2 + (sy - gy)**2);
      ctx.beginPath();
      if (target.id == arcTarget.id) {
        ctx.arc(gx, gy, r, 0, 2*Math.PI);
      } else {
        ctx.arc(gx, gy, r, Math.atan2(sy - gy, sx - gx), Math.atan2(ty - gy, tx-gx), link.counterClockwise||false);
      }
      ctx.stroke();
    }
  }

  useEffect(() => {
    const fg = forceRef.current;
    let rightGrav = clusterNodeHash["Right-Grav"];
    let leftGrav = clusterNodeHash["Left-Grav"];
    let homeNode = clusterNodeHash["Home"];
    let contactNode = clusterNodeHash['Contact'];
    // const screenDiv = 4;
    rightGrav.fx = width/screenDiv;
    rightGrav.fy = (height*4/screenDiv - 20);
    rightGrav.fy = 0;
    leftGrav.fx = -(width/screenDiv);
    leftGrav.fy = -(height/2 - 10);
    homeNode.fx = leftGrav.fx + (width/screenDiv)/8;
    homeNode.fy = leftGrav.fy + (height/screenDiv)/8;
    // homeNode.fx = 0
    // homeNode.fy=-height/4;
    contactNode.fx = rightGrav.fx - (width/screenDiv)/12;
    contactNode.fy = rightGrav.fy - (height/screenDiv)/12;

    clusterLinks.forEach(link => {
      link.distance = link.initialDistance/1000*width;
    })
    // fg.current.centerAt(0, height/4);



  },[height, width])

   return (
      <ForceGraph2D 
      enableNavigationControls={isZoomEnabled}
      enableZoomInteraction={isZoomEnabled}
      graphData={data}
      nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
      nodeCanvasObject={paintRing}
      nodeVisibility={node => !node.invis}
      // centerAt={[0, -height/4, 20]}
      // nodeWidth={'width'}
      // nodeRelSize={1}
      // onNodeHover={handleNodeHover}
      // onLinkHover={handleLinkHover}
      // cooldownTicks={400}
      // onNodeDragEnd={handleNodeDragEnd}
      // onNodeDrag={handleNodeDrag}
      minZoom={2}
      autoPauseRedraw={false}
      linkWidth={link => {
        let width = highlightLinks.has(link) ? 5 : 1
        width = link.width||width;
        return width;
      }}
      height={height*2}
      
      // linkVisibility={link => !link.invis}
      // linkCurvature="curvature"
      // linkDirectionalParticles={4}
      // linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
      linkCanvasObject={linkArc}
      onNodeClick={handleNodeClick}
      onEngineTick={(a,b,c) => {
        // if (tickNum < 400) setTickNum(tickNum + 1);
        }}
      ref={forceRef}
    />
    
    

   );
 }

export default NetworkCluster;