/**************************************
 ** 3rd Party components and libraries
 ***************************************/
 import React, {useEffect, useState, useLayoutEffect, useRef} from "react";
 import ForceGraph3D from 'react-force-graph-3d';
//  import {useHistory} from 'react-router-dom'; 
//  import 'react-dates/initialize';
 /**************************************
  ** Internal cpnts, libs, helpers
  ***************************************/
//  import { useIsMounted } from "app/helpers/global-helpers";
 import clusterData from "./clustdata";
 
 /**************************************
 ** Component styles
 ***************************************/
 import './cluster.scss';
 
 
 let currentSimulationMode = false;
 
 export const NetworkCluster = () => {
   const isMounted = useIsMounted();
 
  //  const history = useHistory();
   const clusterContainer = useRef(null);
   const [dataSet, setDataSet] = useState({
     nodes: [],
     links: []
   });

   const generateTextColor = (score) => {
    if (score >= 0 && score < 25) {
      return '#ff0000';
    } else if (score >= 25 && score < 50) {
      return '#d633ff';
    } else if (score >=50 && score < 75) {
      return '#4d88ff';
    } else {
      return '#106DC7';
    }
  };
 
   // Get Cluster list after the initial load
  //  const {
  //    clusterTiersList,
  //    simulationMode,
  //    simulationId
  //  } = useSelector((state) => {
  //    return {
  //      clusterTiersList: state.clusterTiersList,
  //      simulationMode: state.simModeActive,
  //      simulationId: state.currentSimulator.id
  //    };
  //  });
 
  //  const [loadingData, setLoadingData] = useState(true);
   const nodesArray = [];
   const linksArray = [];
   const [dimensions, setDimensions] = useState({
     width: 0,
     height: 0,
   });
 
   useEffect(() => {
     if (!isMounted.current) return;
    loadTierArray();
    function loadTierArray() {
 
       if (clusterData.length > 0) {
         clusterData.forEach((tier1Obj) => {
           //Iterate through company tiers list
           let nodeColor = "red";
           tier1Obj.networkCompanyInfoQueryResults.forEach((tier1Array) => {
             if (tier1Array.companyRiskScore >= 0 && tier1Array.companyRiskScore <= 25) {
               nodeColor = "#FF0000";
             } else if (tier1Array.companyRiskScore <= 50) {
               nodeColor = "purple";
             } else if (tier1Array.companyRiskScore <= 75) {
               nodeColor = "#1E90FF";
             } else {
               nodeColor = "#106DC7";
             }
             nodesArray.push(
               {
                 "id": tier1Array.companyName,
                 "name": `<div align="left" class="leaflet-popup-content-wrapper tooltip_cluster" >
                   <div class="leaflet-popup-content">
                     <b>${tier1Array.companyName}</b>
                     <div>Tier: ${tier1Obj.companyTier}<div>
                     <div>Type: ${tier1Array.companyFunction}</div>
                     <div style="color: ${generateTextColor(tier1Array?.companyRiskScore)}">
                       Risk score: ${Number((tier1Array.companyRiskScore)?.toFixed(1))}
                     </div>
                     ${
                      //  simulationMode ?
                      //  `<table key={"cluster1"+${tier1Array.companyName}}>
                      //    <tbody>
                      //      <tr>
                      //        <td>
                      //          <p style="color: ${generateTextColor(tier1Array?.companySimRiskScore)}">
                      //            <b>Sim Risk score :</b>
                      //            ${Number((tier1Array.companySimRiskScore)?.toFixed(1))}
                      //          </p>
                      //        </td>
                      //        <td>
                      //          <p style="color: ${getPercentageChangeColor(tier1Array?.companyRiskScore,tier1Array?.companySimRiskScore).textColor}">
                      //          &ensp;(${getPercentageChangeColor(tier1Array?.companyRiskScore,tier1Array?.companySimRiskScore).percentageChange})
                      //          </p>
                      //        </td>
                      //      </tr>
                      //    </tbody>
                      //  </table>`
                      //  :
                       ""
                     }
                     <div style="color: ${generateTextColor(tier1Array?.companyImpactScore)}">
                       Impact Score: ${Number((tier1Array.companyImpactScore)?.toFixed(1))}
                     </div>
                     ${
                    //  simulationMode ?
                    //  `<table key={"cluster2"+${tier1Array.companyName}}>
                    //    <tbody>
                    //      <tr>
                    //        <td>
                    //        <p style="color: ${generateTextColor(tier1Array?.companySimImpactScore)}">
                    //          <b>Sim Impact Score :</b>
                    //            ${Number((tier1Array.companySimImpactScore)?.toFixed(1))}
                    //          </p>
                    //        </td>
                    //        <td>
                    //          <p style="color: ${getPercentageChangeColor(tier1Array?.companyImpactScore,tier1Array?.companySimImpactScore).textColor}">
                    //          &ensp;(${getPercentageChangeColor(tier1Array?.companyImpactScore,tier1Array?.companySimImpactScore).percentageChange})
                    //          </p>
                    //        </td>
                    //      </tr>
                    //    </tbody>
                    //  </table>`
                    //  :
                     ""
                     }
                   </div>
                 </div>`,
                 "color":nodeColor,
                 "val": 10,
                 "obj": tier1Array,
                 "tier": "TIER " + tier1Obj.companyTier
               }
             )
             tier1Array.parentName && tier1Array.companyName && linksArray.push({
               "source": tier1Array.parentName,
               "target": tier1Array.companyName
             })
           })
         })
       }
 
       const myData = {
         "nodes": nodesArray,
         "links": linksArray
       }
 
       setDataSet(myData);
     }
 
   }, []);
 
  //  const resizeObserver = new ResizeObserver(entries => {
  //    if (!isMounted.current){
  //      resizeObserver && resizeObserver.unobserve(clusterContainer.current);
  //      return;
  //    }
 
  //    if (entries[0]) {
  //      setDimensions({
  //        width: entries[0].contentRect.width,
  //        height: entries[0].contentRect.height,
  //      });
  //    }
  //  });
 
  //  useEffect (() => {
  //    if (!isMounted.current) return;
 
    //  resizeObserver.observe(clusterContainer.current);
    //  return () => {
    //    resizeObserver.unobserve(clusterContainer.current);
    //  }
  //  }, [clusterContainer.current]);
 
   const onNodeClickEvent = (node) => {
    //  node?.obj?.companyName && history.push(`/companies/${node.obj.companyName}`);
   }
 
   function onClusterLegendClick () {
    //  const legend = document.getElementById('cluster-legend')
    //  if (legend.classList.contains('expanded')) {
    //    legend.classList.remove('expanded');
    //  } else {
    //    legend.classList.add('expanded');
    //  }
   }
 
   const clusterlegend = (
     <>
       <p><b>Timing Scores</b></p>
       <i style={{background:'#FF0000'}}></i> 0&ndash;24<br/>
       <i style={{background:'#F19CBB'}}></i> 25&ndash;49<br/>
       <i style={{background:'#1E90FF'}}></i> 50&ndash;74<br/>
       <i style={{background:'#106DC7'}}></i> 75&ndash;100<br/>
     </>
   )
 
   const clusterSimLegend =  (
     <>
       <p><b>Risk Percentage Change</b></p>
       <i style={{background:'#FF0000'}}></i>down by 20%<br/>
       <i style={{background:'#F19CBB'}}></i> down by 10%<br/>
       <i style={{background:'#6f6f70'}}></i> 0%<br/>
       <i style={{background:'#1E90FF'}}></i> up by 10%<br/>
       <i style={{background:'#106DC7'}}></i> up by 20%<br/>
     </>
   )
 
   let windowResizeListener = null;
   let windowOrientationListener = null;
   let windowWidth = clusterContainer?.current?.offsetWidth || 0;
   let windowHeight = clusterContainer?.current?.offsetHeight || 0;
 
   useLayoutEffect(() => {
     if (!isMounted.current) return;
 
     function handleResize(){
       const newWindowWidth = clusterContainer?.current?.offsetWidth || 0;
       const newWindowHeight = clusterContainer?.current?.offsetHeight || 0;
       console.log(windowWidth + "- " + windowHeight +  ' = ' + dimensions.width +  " - " + dimensions.height);
       if (windowWidth !== newWindowWidth || windowHeight !== newWindowHeight){
         windowWidth = newWindowWidth;
         windowHeight = newWindowHeight;
         setDimensions({
           width: windowWidth,
           height: windowHeight,
         });
         console.log("SET " + windowWidth + "- " + windowHeight);
       }
     }
 
     function handleOrientation(e){
       console.log(e);
     }
 
     if (!windowResizeListener) windowResizeListener = clusterContainer.current.addEventListener('resize', handleResize, false);
     if (!windowOrientationListener) clusterContainer.current.addEventListener("orientationchange", handleOrientation, false);
 
     return () => {
       clusterContainer.current && clusterContainer.current.removeEventListener('resize', handleResize, false);
       clusterContainer.current && clusterContainer.current.removeEventListener("orientationchange", handleOrientation, false);
     };
   }, []);
 
   return (
     <>
       {/* <NetworkSpinner className={`overlaySVG ${loadingData ? 'overlaySVGShown' : ''}`}/> */}
       <div className="clusterContainer" ref={clusterContainer} data-testid="clusterContainer" title="" id="cluster-container">
         <span>test 2</span>
         {
           dataSet.nodes && dataSet.nodes.length > 0 ?
             <ForceGraph3D
              //  width={dimensions.width}
              //  height={dimensions.height}
               graphData={dataSet}
               onZoom={()=>console.log('test')}
               linkColor={"#000000"}
              //  backgroundColor={"White"}
              //  showNavInfo={false}
              //  linkColor={"black"}
              //  linkVisibility={true}
              //  linkWidth={4}
              //  linkDirectionalParticleSpeed={0.01}
              //  onNodeClick={onNodeClickEvent}
             /> : ""
         }
         {/* <div className='clusterInfo legendCluster' id="cluster-legend"
           onClick={(e) => onClusterLegendClick()}
         >
           {clusterlegend}
         </div> */}
       </div>
     </>
   );
 }

 function getTextColor(score, indicator) {
  switch (indicator) {
    case 'up':
      return score > 0 && score <= 10 ? '#1E90FF' : '#106DC7';
    case 'down':
      return score > 0 && score <= 10 ? '#F19CBB' : '#FF0000';
  }
}

function getPercentageChange(score1, score2) {
  return ((score1 - score2) / score1) * 100;
}

function getPercentageChangeColor(score, simScore) {
  return score > simScore ? {
    textColor: getTextColor(getPercentageChange(score, simScore), "down"),
    percentageChange: "Down by " + getPercentageChange(score, simScore).toFixed(1) + ' %'
  }
    : score < simScore ? {
      textColor: getTextColor(getPercentageChange(score, simScore), "up"),
      percentageChange: "Up by " + (-1 * getPercentageChange(score, simScore)).toFixed(1) + ' %'
    }
      : {
        textColor: '#6f6f70',
        percentageChange: '0 %'
      }
}

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return (() => {
      isMounted.current = false;
    });
  }, []);

  return isMounted;
}
 
 export default NetworkCluster;
 