import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      src: "/Amazon.png",
      title: "Amazon product Analysis",
      description: "Explore insightful visualizations and data-driven conclusions showcasing my expertise in data analysis, visualization, and business intelligence.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
 
    },
    {
      src: "/tabu.png",
      title: "Nashville Housing Dashboard",
      description: "A Data Cleaning Showcase. Dive into the intricacies of Nashville's housing data as I demonstrate my expertise in data cleaning using Tableau.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/stock (1).png",
      title: "Quantitative Analysis of Stock Market",
      description: "Uncover trends, patterns, and insights using advanced statistical techniques. Harnessing Python, Pandas, and other data science tools.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/car.png",
      title: "Sales Performance Insights Dashboard",
      description: "Dive into the world of sales analytics with this comprehensive Power BI dashboard project. Explore trends, patterns, and key metrics to gain valuable insights into your sales performance.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/food.png",
      title: "Food Set Store and Product Dashboard",
      description: "Craft an immersive dashboard leveraging Power BI to track and analyze sales, inventory, and product performance for a food and beverage store, enabling data-driven decisions and optimizing operations.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/Data.png",
      title: "Data Professional Survey Analysis",
      description: "Explore comprehensive insights derived from the Data Professional Survey, unraveling key trends and patterns in the realm of data careers.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/sales.png",
      title: "Bike Sales Dashboard",
      description: "Explore the Dynamic World of Bike Sales: Uncover Trends, Optimize Strategies, and Drive Growth with Comprehensive Insights Using Excel Dashboard.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/map.png",
      title: "Unlocking Cryptocurrency Insights",
      description: "Delve into BitCoin's Volatile Landscape, Analyze Trends, and Discover Investment Opportunities with this Comprehensive Dataset.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    {
      src: "/das.png",
      title: "Food Delivery and Profitable Analysis",
      description: " Gain insights into market trends, customer behavior, and operational efficiency. Harness powerful visualizations to track sales, optimize delivery routes, and maximize profits.",
      github :"https://github.com/Suriyanand/AmaZon-product-powerBI"
    },
    
  ];

  // Function to render project cards
  const renderProjectCards = () => {
    return projects.map((project, index) => (
      <ProjectCard
        key={index}
        src={project.src}
        title={project.title}
        description={project.description}
        github={project.github} 
      />
    ));
  };

  // Splitting projects into rows of three
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-7 md:px-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((project, colIndex) => (
              <ProjectCard
                key={colIndex}
                src={project.src}
                title={project.title}
                description={project.description}
                github={project.github}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
