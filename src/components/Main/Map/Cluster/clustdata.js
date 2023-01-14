// import { isMobile } from "react-device-detect";


const distance = {
  Home: 30,
  Services: 70,
  Industries: 50,
  Technologies: 100,
  Company: 150,
  Contact: 20,
}

const isMobile = window.innerWidth<=480;

const titlePrimaryBlue = "rgba(75,75,145)";
const titlePrimaryOrange = "rgba(241,125,76)";

const nodesData = [
    {
      id: 'Right-Grav',
      fx: 0,
      fy: 0,
      homeColor: 'black',
      // val: 5,
      invis: true,
      name: 'Right-Grav',
      gravitySource: true,
    },
    {
      id: 'Left-Grav',
      name: 'Left-Grav',
      homeColor: 'red',
      width: 20,
      invis: true,
      gravitySource: true,
    },
    {
      id: 'Home',
      name: 'Home',
      link: "Home",
      homeHighlightNode: true,
      gravityNode: "Left-Grav",
      val: 2,
      distance: distance.Home,
      homeColor: 'silver',
      // counterClockwise: true,
      arcTarg: 'Home-cap',
      pullX: 30,
    },
    {
      id: 'Home-cap',
      name: 'Home',
      link: "Home",
      distance: distance.Home,
      parent: "Home",
      homeColor: 'silver',
      endCap: "Home",
    },
    {
      id: 'Services',
      name: 'Services',
      link: "Services",
      val: 2,
      layer: 2,
      distance: distance.Services,
      gravityNode: "Right-Grav",
    },
    {
      id: 'Industries',
      name: 'Industries',
      link: "Industries",
      val: 2,
      distance: distance.Industries,
      gravityNode: "Left-Grav",
      dummies: 3,
      dummyPosition: 3,
      arcTarg: 'Industries',
    },
    {
      id: 'Technologies',
      homeHighlightNode: true,
      name: 'Technologies',
      link: "Technologies",
      val: 2,
      distance: distance.Technologies,
      layer: 1,
      gravityNode: "Left-Grav",
      arcTarg: "Industries",
    },
    {
      id: 'Company',
      name: 'Company',
      link: "Company",
      homeHighlightNode: true,
      val: 2,
      distance: distance.Company,
      gravityNode: "Right-Grav",
      // arcTarg: 'Company',
    },
    {
      id: 'Contact',
      homeHighlightNode: true,
      name: 'Contact',
      link: "Contact",
      val: 2,
      // pullX: -20,
      distance: distance.Contact,
      gravityNode: "Right-Grav",
      arcTarg: 'Contact',
      dummies: 0,
      dummyPosition: 2,
    },
    {
      id: 'Web Development',
      homeColor: 'Green',
      name: '',
      text: "Create visually appealing, user-friendly websites",
      distance: 6,
      parent: "Services",
    },
    {
      id: 'Product Design',
      homeColor: 'Green',
      name: '',
      distance: 6,
      text: "Artistic designs to make your ideas match your expectations",
      layer: 1,
      parent: "Services",
    },
    {
      id: 'Quality Assurance',
      homeColor: 'Green',
      name: '',
      text: "Testing and validation, ensuring smooth deployments",
      distance: 6,
      parent: "Services",
    },
    {
      id: 'Product Ideation',
      homeColor: 'Green',
      name: '',
      parent: "Services",
      text: 'Ideation, Brainstorming, and roadmaps to add clarity to your future',
      layer: 2,
      arcTarg: 'Services'
    },
    {
      id: 'Fintech',
      homeHighlightNode: true,
      name: '',
      text: "Efficiency to make quick work of large datasets",
      parent: "Industries",
      distance: distance.Industries,
      layer: 1,
    },
    {
      id: 'Edtech',
      homeHighlightNode: true,
      name: '',
      text: "Ease of use takes center stage for students and teachers",
      parent: "Industries",
      distance: distance.Industries,
      arcTarg: 'Industries',
      layer: 1,
    },
    {
      id: 'Medical',
      homeHighlightNode: true,
      name: '',
      text: "Quality Assurance to make sure all medical tests are definitive",
      parent: "Industries",
      distance: distance.Industries,
      layer: 1,
      arcTarg: 'Hospitality'
    },
    {
      id: 'Hospitality',
      homeHighlightNode: true,
      name: '',
      text: "Combining speed and ease of use to get the data there, but make it easy to understand",
      parent: "Industries",
      distance: distance.Industries,
      layer: 1,
    },
    {
      id: 'Android',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: "Leverage the Android SDK to build robust and high-performing apps",
      // layer: 1,
    },
    {
      id: 'IOS',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: "Proficiency in Swift to create intuitive apps",
      // layer: 1,
    },
    {
      id: 'Frontend',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: 'Experts in React, Vue, Angular, and even Vanilla JS will help you choose the tool for the task',
      // layer: 1,
    },
    {
      id: 'Backend',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: 'Scalable and secure server-side infrastructure',
      // layer: 1,
    },
    {
      id: 'Cross-platform',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: "Utilizes tools such as React Native and Flutter to create multiplatform apps",
      arcTarg: "Android",
      counterClockwise: true,
      // layer: 1,
    },
    {
      id: 'Artificial Intelligence',
      homeColor: 'Green',
      parent: "Technologies",
      name: '',
      text: "Analyze and interpret data, solve complex problems, and learn and adapt over time",
      arcTarg: "IOS"
      // layer: 1,
    },
    {
      id: 'React Developers',
      homeColor: 'Yellow',
      name: '',
      text: "A huge library of reusable components help power its virtual DOM",
      parent: "Web Development",
      invis: true,
      arcTarg: "Web Development",
      dummies: 1,
    },
    {
      id: 'Python Developers',
      homeColor: 'Yellow',
      name: '',
      text: "Versatile language for data analysis, machine learning, and web development",
      parent: "Web Development",
      arcTarg: "Web Development",
    },
    {
      id: 'UI Designers',
      homeColor: 'Yellow',
      name: '',
      text: "Create visually appealing and user-friendly designs",
      parent: "Product Design",
      arcTarg: "Product Design",
      layer: 1,
    },
    {
      id: 'UX Designers',
      homeColor: 'Yellow',
      name: '',
      text: "Create user-centered designs that meet the needs of your business",
      parent: "Product Design",
      arcTarg: "Product Design",
      layer: 1,
    },
    {
      id: 'Automated QA',
      homeColor: 'Yellow',
      name: '',
      text: "Save time, reduce costs, and improve the overall quality of your software",
      parent: "Quality Assurance",
      arcTarg: 'Quality Assurance',
      layer: 2,
    },
    {
      id: 'Manual QA',
      homeColor: 'Yellow',
      name: '',
      text: "Ensure the overall quality of your software with a more hands on approach",
      parent: "Quality Assurance",
      arcTarg: 'Quality Assurance',
      layer: 2,
    },
    // {
    //   id: 'empty-space',
    //   invis: true,
    //   name: "company-deadnode",
    //   val: 0,
    //   gravityNode: "Right-Grav",
    // },
    // {
    //   id: 'Company',
    //   name: 'Company2',
    //   link: "Company",
    //   distance: distance.Company,
    //   gravityNode: "Right-Grav",
    //   // arcTarg: "Company-cap",
    // },
    {
      id: 'Company-cap',
      name: 'Company',
      homeHighlightNode: true,
      link: "Company",
      distance: distance.Company,
      gravityNode: "Right-Grav",
      arcTarg: "Company",
      // counterClockwise: true,
      
    },
    {
      id: 'Company-extra',
      name: 'Company',
      link: "Company",
      distance: distance.Company,
      gravityNode: "Right-Grav",
      layer: 1,
      arcTarg: 'Company-extra-cap',
      // counterClockwise: true,
    },
    {
      id: 'Company-extra-cap',
      name: 'Company',
      link: "Company",
      distance: distance.Company,
      gravityNode: "Right-Grav",
      layer: 1,
    },
    {
      id: 'Contact-extra',
      name: 'Contact',
      link: "Contact",
      distance: distance.Contact,
      gravityNode: "Right-Grav",
      layer: 1,
      arcTarg:"Contact-extra-cap",
      counterClockwise: true,
    },
    {
      id: 'Contact-extra-cap',
      name: 'Contact',
      link: "Contact",
      distance: distance.Contact,
      gravityNode: "Right-Grav",
      layer: 1,
    },


  ];

  const findParent = (node) => {
    if (node.parent) {
      const parentNode = nodesData.find(node2 => node2.id === node.parent);
      return findParent(parentNode);
    }
    return node;
  }

  for (let i = 0, total = nodesData.length; i < total; i++) {
    let node = nodesData[i];
    if (node.dummies) {
      const dummyNodes = [];
      for (let j = 0; j < node.dummies; j++) {
        dummyNodes.push({
          ...node,
          name: node.name,
          id: node.id + " ".repeat(j),
          // name: node.name + `-dummy${j}`,
          
          arcTarg: null,
          dummies: 0,
          dummyNode: true,
          val: .3,
        })
      }
      const startDummyNodes = dummyNodes.splice(0, node.dummyPosition||0);
      nodesData.splice(i,0,...startDummyNodes);
      i += startDummyNodes.length
      nodesData.splice(i+1,0,...dummyNodes);
    }
  }

  let nodes = nodesData.map(node => {
    const parentNode = findParent(node)||"Left-Grav";
    let val = node.val||1;
    if (isMobile) val /= 4;
    return {
        ...node,
        distance: parentNode.distance,
        gravityNode: parentNode.gravityNode,
        homeColor: node.homeHighlightNode?titlePrimaryOrange:titlePrimaryBlue,
        val: val,
        name: node.link?node.name:`<div className="cluster-node-text">${node.id}<br/><span>${node.text}</span><div>`,
    };
  });

  nodes = nodes.map(node => {
    const catagoryNodes = nodes.filter(catNode => (catNode.gravitySource === node.gravitySource)&&(catNode.distance === node.distance));
    const orbitNodes = catagoryNodes.filter(orbNode => orbNode.layer === node.layer);
    
    return {
      ...node, 
      orbitNodes:orbitNodes,
      catagoryNodes: catagoryNodes,
    }
  })

  const links = nodesData.filter(node => !node.gravitySource).map(node => {
    const parentNode = findParent(node)||"Left-Grav";


    const link = {
      color: 'black',
      source: parentNode.gravityNode,
      target: node.id,
      layer: node.layer,
      invis: true,
      distance: parentNode.distance,
      initialDistance: parentNode.distance,
      arcTarg: node.arcTarg,
      counterClockwise: node.counterClockwise,
    }
    return link;
  });

  const clusterData = {
    nodes: nodes,
    links: links
}

  // const links2 = [
  //   {
  //     color: "#272D38",
  //     source: 'Left-Grav',
  //     target: 'Home',
      
  //     // invis: true,
  //   },
  //   {
  //     color: "#272D38",
  //     source: 'Left-Grav',
  //     target: 'Home-cap',
  //     // invis: true,
  //   },
  //   {
  //     color: "#272D38",
  //     source: 'Home',
  //     target: 'Home-cap',
  //     gravity: "Left-Grav"
  //   },
  //   {
  //     color: "#272D38",
  //     source: 'Right-Grav',
  //     target: 'Services',
  //     invis: true,
  //   },

  //   {
  //     color: "#272D38",
  //     source: 'Left-Grav',
  //     target: 'Industries',
  //     invis: true,
  //   },
  //   {
  //     color: "#272D38",
  //     source: 'Industries',
  //     target: 'Industries',
  //     gravity: 'Left-Grav',
  //     invis: true,
  //   },
  //   {
  //     color: "#272D38",
  //     source: 'Left-Grav',
  //     target: 'Technologies',
  //     distance: 100,
  //     invis: true,
  //   },
  //   {
  //     color: "#272D38",
  //     source: "Right-Grav",
  //     target: "Company",
  //     invis: true,
  //   },
  //   {
  //     color: "grey",
  //     source: 'Right-Grav',
  //     target: 'Contact',
  //     width: 10,
  //     invis: true,
  //   },
  //   {
  //     color: "Green",
  //     source: 'Services',
  //     target: 'Web Development'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Services',
  //     target: 'Product Design'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Services',
  //     target: 'Quality Assurance'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Services',
  //     target: 'Product Ideation'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Industries',
  //     target: 'Fintech'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Industries',
  //     target: 'Edtech'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Industries',
  //     target: 'Medical'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Industries',
  //     target: 'Hospitality'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'Android'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'IOS'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'Frontend'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'Backend'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'Cross-platform'
  //   },
  //   {
  //     color: "Green",
  //     source: 'Technologies',
  //     target: 'Artificial Intelligence'
  //   },
  //   {
  //     color: "black",
  //     source: 'Web Development',
  //     target: 'React Developers'
  //   },
  //   {
  //     color: "black",
  //     source: 'Web Development',
  //     target: 'Python Developers'
  //   },
  //   {
  //     color: "black",
  //     source: 'Product Design',
  //     target: 'UI Designers'
  //   },
  //   {
  //     color: "black",
  //     source: 'Product Design',
  //     target: 'UX Designers'
  //   },
  //   {
  //     color: "black",
  //     source: 'Quality Assurance',
  //     target: 'Automated QA'
  //   },
  //   {
  //     color: "black",
  //     source: 'Quality Assurance',
  //     target: 'Manual QA'
  //   },
  //   {
  //     color: 'blue',
  //     source: 'Company',
  //     target: 'Company',
  //     curvature: 1,
  //     rotation: 0,
  //     orbitalDistance: 30,
  //   }

  // ];

// nodes.forEach(node => {
//   if (node.endCap) {
//     links.push({
//       color: '#FFFFFF',
//       source: node.id,
//       target: node.endCap,
//       orbitalDistance: node.orbitalDistance,
//       gravity: "Left-Grav",
//       noForce: true,
//     })
//   }
// })





// clusterData.links.forEach(link => {
//   if (link.gravity) {
//     link.gravitySource = clusterData.nodes.find(el => el.id === link.gravity);
//   }
//   const a = clusterData.nodes.find(el => el.id === link.source);
//   const b = clusterData.nodes.find(el => el.id === link.target);
//   !a.neighbors && (a.neighbors = []);
//   !b.neighbors && (b.neighbors = []);
//   a.neighbors.push(b);
//   b.neighbors.push(a);

//   !a.links && (a.links = []);
//   !b.links && (b.links = []);
//   a.links.push(link);
//   b.links.push(link);
// });

export default clusterData;