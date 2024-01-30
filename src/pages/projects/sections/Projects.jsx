import Project from "../../../components/project/Project";

const Projects = () => {
  return (
    <div className="horizontal-page-padding">
      <h2 className="py-5 text-center font-semibold">פרוייקטים :)</h2>
      {data.map((e, i) => (
        <Project key={e.title} i={i} data={e} />
      ))}
    </div>
  );
};

export default Projects;

const data = [
  {
    title: "Modern Residence",
    description:
      "A contemporary residential project featuring sleek design, open spaces, and state-of-the-art technology. Embracing minimalism with a touch of luxury, this modern residence is a perfect blend of aesthetics and functionality.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Cityscape, Urban",
    tags: ["בתים פרטיים", "ציבורי"],
    year: 2022,
    architect: "John Doe",
  },
  {
    title: "Urban Renewal",
    description:
      "Revitalizing urban spaces with innovative design solutions. This project focuses on sustainable architecture, transforming outdated structures into vibrant, eco-friendly environments that harmonize with the cityscape.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Downtown, Urban",
    tags: ["בתים פרטיים", "ציבורי"],
    year: 2021,
    architect: "Jane Smith",
  },
  {
    title: "Cozy Retreat",
    description:
      "Creating a cozy haven with warmth and charm. This residential project emphasizes comfort and intimacy, combining natural elements with contemporary design to provide a tranquil retreat from the hustle and bustle of daily life.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    location: "Suburb, Residential",
    tags: ["בתים פרטיים", "ציבורי"],
    year: 2020,
    architect: "Michael Johnson",
  },
  {
    title: "Commercial Oasis",
    description:
      "Designing a commercial oasis that inspires productivity and creativity. This project redefines workspaces with cutting-edge design, incorporating collaborative zones and breakout areas to foster a dynamic and engaging work environment.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    location: "Business District, Commercial",
    tags: ["בתים פרטיים", "ציבורי"],
    year: 2019,
    architect: "Emily Davis",
  },
  {
    title: "Sustainable Living",
    description:
      "Promoting sustainable living through architecture. This project integrates eco-friendly materials and energy-efficient systems to create a living space that aligns with environmental consciousness.",
    image:
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    location: "Greenbelt, Eco-friendly",
    tags: ["בתים פרטיים", "ציבורי"],
    year: 2023,
    architect: "Robert Green",
  },
];
