const nodesData = [
    {
      id: 'Home',
    //   color: 'black',
      name: 'Home',
      link: "Home",
    },
    {
      id: 'Services',
    //   color: 'blue',
      name: 'Services',
      link: "Services",
    },
    {
      id: 'Products',
    //   color: 'blue',
      name: 'Products',
      link: "Products",
    },
    {
      id: 'Industries',
    //   color: 'blue',
      name: 'Industries',
      link: "Industries",
    },
    {
      id: 'Technologies',
      color: 'blue',
      name: 'Technologies',
      link: "Technologies"
    },
    {
      id: 'Contact',
      color: 'Red',
      name: 'Contact',
      link: "Contact"
    },
    {
      id: 'Web Development',
      color: 'Green',
      name: '',
    },
    {
      id: 'Product Design',
      color: 'Green',
      name: '',
    },
    {
      id: 'Quality Assurance',
      color: 'Green',
      name: '',
    },
    {
      id: 'Product Ideation',
      color: 'Green',
      name: '',
    },
    {
      id: 'Fintech',
      color: 'Green',
      name: '',
    },
    {
      id: 'Edtech',
      color: 'Green',
      name: '',
    },
    {
      id: 'Medical',
      color: 'Green',
      name: '',
    },
    {
      id: 'Hospitality',
      color: 'Green',
      name: '',
    },
    {
      id: 'Android',
      color: 'Green',
      name: '',
    },
    {
      id: 'IOS',
      color: 'Green',
      name: '',
    },
    {
      id: 'Frontend',
      color: 'Green',
      name: '',
    },
    {
      id: 'Backend',
      color: 'Green',
      name: '',
    },
    {
      id: 'Cross-platform',
      color: 'Green',
      name: '',
    },
    {
      id: 'Artificial Intelligence',
      color: 'Green',
      name: '',
    },
    {
      id: 'React Developers',
      color: 'Yellow',
      name: '',
    },
    {
      id: 'Python Developers',
      color: 'Yellow',
      name: '',
    },
    {
      id: 'UI Designers',
      color: 'Yellow',
      name: '',
    },
    {
      id: 'UX Designers',
      color: 'Yellow',
      name: '',
    },
    {
      id: 'Automated QA',
      color: 'Yellow',
      name: '',
    },
    {
      id: 'Manual QA',
      color: 'Yellow',
      name: '',
    },

  ];

  const nodes = nodesData.map(node => {
    return {
        id: node.id,
        color: node.color,
        name: node.link?node.name:`<div className="cluster-node-text">Test<div>NExt level</div> <span>span2</span><div>`,
        link: node.link,

    }
  });

  const links = [
    {
      color: "#272D38",
      source: 'Home',
      target: 'Services'
    },
    {
      color: "#272D38",
      source: 'Home',
      target: 'Products'
    },
    {
      color: "#272D38",
      source: 'Home',
      target: 'Industries'
    },
    {
      color: "#272D38",
      source: 'Home',
      target: 'Technologies'
    },
    {
      color: "grey",
      source: 'Home',
      target: 'Contact',
      width: 10,
    },
    {
      color: "Green",
      source: 'Services',
      target: 'Web Development'
    },
    {
      color: "Green",
      source: 'Services',
      target: 'Product Design'
    },
    {
      color: "Green",
      source: 'Services',
      target: 'Quality Assurance'
    },
    {
      color: "Green",
      source: 'Services',
      target: 'Product Ideation'
    },
    {
      color: "Green",
      source: 'Industries',
      target: 'Fintech'
    },
    {
      color: "Green",
      source: 'Industries',
      target: 'Edtech'
    },
    {
      color: "Green",
      source: 'Industries',
      target: 'Medical'
    },
    {
      color: "Green",
      source: 'Industries',
      target: 'Hospitality'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'Android'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'IOS'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'Frontend'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'Backend'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'Cross-platform'
    },
    {
      color: "Green",
      source: 'Technologies',
      target: 'Artificial Intelligence'
    },
    {
      color: "black",
      source: 'Web Development',
      target: 'React Developers'
    },
    {
      color: "black",
      source: 'Web Development',
      target: 'Python Developers'
    },
    {
      color: "black",
      source: 'Product Design',
      target: 'UI Designers'
    },
    {
      color: "black",
      source: 'Product Design',
      target: 'UX Designers'
    },
    {
      color: "black",
      source: 'Quality Assurance',
      target: 'Automated QA'
    },
    {
      color: "black",
      source: 'Quality Assurance',
      target: 'Manual QA'
    },

  ];

const clusterData = {
    nodes: nodes,
    links: links
}

clusterData.links.forEach(link => {
    const a = clusterData.nodes.find(el => el.id === link.source);
    const b = clusterData.nodes.find(el => el.id === link.target);
    !a.neighbors && (a.neighbors = []);
    !b.neighbors && (b.neighbors = []);
    a.neighbors.push(b);
    b.neighbors.push(a);

    !a.links && (a.links = []);
    !b.links && (b.links = []);
    a.links.push(link);
    b.links.push(link);
  });

export default clusterData;