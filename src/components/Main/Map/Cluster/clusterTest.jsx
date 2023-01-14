/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useState, useLayoutEffect, useEffect, useRef} from "react";
 import { ForceGraph3D, ForceGraph2D } from "react-force-graph";
 import * as d3 from "d3";
 import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force'
//  import { isMobile } from "react-device-detect";

 import clusterData from './clustdata'
 import SizeMe from 'react-sizeme'
 import './cluster.scss'
 import { createContext } from "react";

 
 let posY = 0;
 let isMobileCluster = false;
 
 export const NetworkCluster = (props) => {
  const [isZoomEnabled, setIsZoomEnabled] = [false];
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);
  const [tickNum, setTickNum] = useState(0);
  const [landingWidth, setLandingWidth] = useState(0);
  const [landingHeight, setLandingHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const {landingRef, page, isMobile} = props;
  const data = {
    nodes: clusterData.nodes,
    links: clusterData.links
  };
  if (isMobile) {
    // data.nodes.map(node => node.val*=1.2);
      // {
    //   return {
    //     ...node, 
    //     // val:((node?.val)*2 || 1)
    //     val:node.val
    //   }
    // })  
  }

  const clusterNodeHash = {};
  clusterData.nodes.forEach(node => clusterNodeHash[node.id] = node);
  clusterDataColorSetter(clusterNodeHash, page);

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
    // if (node && node.neighbors) {
    if (node && node.catagoryNodes) {

      highlightNodes.add(node);
      node.catagoryNodes.forEach(catagoryNode => highlightNodes.add(clusterNodeHash[catagoryNode.id]||null));
      // node.links.forEach(link => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
    // fg.stopAnimation(true);
  };

  const handleNodeClick = node => {
    const link = node.link || node.parent;
    if (node && link) {
      window.open(`/${link}`, "_self");
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
    fg.d3Force('link').distance((link) => {
      let distance = link.distance||30;
      // if (isMobile) {
      //   distance *= 1.5;
      // }
      if (link.layer) {
        if (isMobile) {
          distance+=(link.layer*6.5);
        } else {

          distance+=(link.layer*15);
        }
        
      }
      return distance;
    })
    .iterations(4);

    if (isMobile) {
      fg.d3Force('charge').strength(-10).distanceMax(50);
      fg.d3Force('center').strength(1).y(-landingHeight/8).x(0);
    } else {
      
      fg.d3Force('charge').strength(-10).distanceMax(50);
      fg.d3Force('center').strength(1).y(-landingHeight/4).x(0);
    }

  }, [landingHeight, landingWidth])



  const paintRing = (node, ctx) => {
    // add ring just for highlighted nodes
    // ctx.beginPath();
    // ctx.arc(node.x, node.y, 50, 10, 2 * Math.PI);
    // ctx.stroke();
    if (highlightNodes.has(node)) {
      let radius = node.val||1;
      ctx.arc(node.x, node.y, radius * 1.5 + 3.5, 0, 2 * Math.PI, false);
      ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
      ctx.fill();
      ctx.fillStyle = 'black';
    } else {
      
    }

  }; 

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
      if (highlightNodes.has(target)) {
        ctx.lineWidth = 2;
      } else {
        ctx.lineWidth = 1;
      }
      if (isMobile) ctx.lineWidth = ctx.lineWidth/1.2;
      // ctx.lineWidth=5;
      // ctx.strokeStyle = "rgba(0,0,0,.5)";
      let lineColor = target.color || 'gray';
      if (target.id === page) {
        lineColor = 'rgba(241,125,76)';
      }
      if (lineColor.includes('rgba')) ctx.strokeStyle = lineColor.slice(0, lineColor.length -1) + ",.5)";
      if (target.id == arcTarget.id) {  //Checks if same target to make a full circle
        ctx.arc(gx, gy, r, 0, 2*Math.PI);
      } else {
        ctx.arc(gx, gy, r, Math.atan2(sy - gy, sx - gx), Math.atan2(ty - gy, tx-gx), link.counterClockwise||false);
      }
      ctx.stroke();
    }
  }

  function clusterDataColorSetter(data, page) {
    if (page === "Home") {
      for (const key in data) {
        data[key].color = data[key].homeColor;
      }
    } else if (page && data[page]) {
      for (const key in data) {
        data[key].color = "rgba(75,75,145)";
      }
      const pageNode = data[page];
      pageNode?.catagoryNodes?.map(catagoryNode => {
        data[catagoryNode.id].color = "rgba(241,125,76)";
      })
      data[page].color = "red";
    }
  }


  useLayoutEffect(() => {
    setLandingWidth(landingRef?.current?.offsetWidth || window.innerWidth);
    setLandingHeight(landingRef?.current?.offsetHeight || window.innerHeight);
  }, []);

  useEffect(() => {
    function handleResize() {
      setLandingWidth(landingRef?.current?.offsetWidth || window.innerWidth);
      setLandingHeight(landingRef?.current?.offsetHeight || window.innerHeight);
    } 
    window.addEventListener('resize', () => handleResize);
    return () => window.removeEventListener('resize', handleResize)
  });

  // useEffect(() => {
  //   if (forceRef) {
  //     debugger;

  //   }

  // }, [forceRef]);

  useEffect(() => {
    const fg = forceRef.current;
    let rightGrav = clusterNodeHash["Right-Grav"];
    let leftGrav = clusterNodeHash["Left-Grav"];
    let homeNode = clusterNodeHash["Home"];
    let contactNode = clusterNodeHash['Contact'];
    // const screenDiv = 4;
    rightGrav.fx = landingWidth/screenDiv;
    // rightGrav.fy = (landingHeight*4/screenDiv - 20);
    rightGrav.fy = -landingHeight/40;
    leftGrav.fx = -(landingWidth/screenDiv);
    leftGrav.fy = -(landingHeight/2);
    if (isMobile) {
      leftGrav.fy = -landingHeight/4;
      // rightGrav.fy = landingHeight/40;
      rightGrav.fy = -landingHeight/10;
    }
    homeNode.fx = leftGrav.fx + (landingWidth/screenDiv)/8;
    homeNode.fy = leftGrav.fy + (landingHeight/screenDiv)/8;
    // homeNode.fx = 0
    // homeNode.fy=-landingHeight/4;
    contactNode.fx = rightGrav.fx - (landingWidth/screenDiv)/12;
    contactNode.fy = rightGrav.fy - (landingHeight/screenDiv)/12;
    

    clusterLinks.forEach(link => {
      link.distance = link.initialDistance/1000*landingWidth;
      if (isMobile) {
        link.distance *= 1.5;
      }
    })
    // fg.current.centerAt(0, landingHeight/4);



  },[landingHeight, landingWidth])

  // function handleTouchEvent(e) {
  //   if (e.target.localName === 'canvas') {
  //     e.preventDefault();
  //     // slide_down();
      
  //   }

  // }
  // document.addEventListener('scroll', handleTouchEvent, true);
  // const canvas = document.querySelector('canvas');
  // if (canvas) {
  //   const events = ['mousedown', 'touchstart', 'touchmove', 'touchend', 'touchcancel'];
  //   for (const event of canvas.__on) {
  //     canvas.removeEventListener(event.type, event.listener);
  //   }
  // }

  useEffect(() => {
  //  const forceGraphContainer = document.getElementsByClassName('force-graph-container')[0];
  //  const clusterContainer = document.getElementById('cluster-container');
  //  forceGraphContainer.addEventListener('pointerdown', (ev) => {
  //   // console.log('pointerdown pageY is ' + ev.pageY)
  //   posY = ev.pageY;
  //   console.log(posY);
  //   setScrollY(ev.pageY);
  //   // console.log(ev);
  // });
  // forceGraphContainer.addEventListener('pointermove', (ev) => {
  //   // window.scrollBy(0,(scrollY-ev.pageY));
  //   // console.log('scrollY is '+scrollY);
  //   // console.log('pageY is ' + ev.pageY);
  //   setScrollY(ev.pageY);
  //   posY= ev.pageY;
  //   console.log(posY);
  // });
  // forceGraphContainer.addEventListener('pointerup', (ev) => {
  //   // console.log(ev);
  // });

  })


   return (
      <ForceGraph2D 
      enableNavigationControls={isZoomEnabled}
      enableZoomInteraction={isZoomEnabled}
      // enablePointerInteraction={false}
      graphData={data}
      nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'after' : undefined}
      nodeCanvasObject={paintRing}
      nodeVisibility={node => !node.invis}
      // nodeWidth={'width'}
      // nodeRelSize={1}
      onNodeHover={handleNodeHover}
      // onLinkHover={handleLinkHover}
      // cooldownTicks={400}
      // onNodeDragEnd={handleNodeDragEnd}
      // onNodeDrag={handleNodeDrag}
      id='test'
      minZoom={2}
      autoPauseRedraw={false}
      linkWidth={link => {
        let width = highlightLinks.has(link) ? 5 : 1
        width = link.width||width;
        return width;
      }}
      height={isMobile?landingHeight:landingHeight*2}
      // height={landingHeight}
      width={landingWidth}
      
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