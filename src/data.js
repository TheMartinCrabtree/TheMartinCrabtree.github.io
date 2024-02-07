const sectionArr = [
  {
    layout: "grid",
    heading: "Skills:",
    // React, Jest, Storybook, Styled-components, WC3 Accessibility, Ruby, Rails, SQL, REST API, JavaScript, Redux, HTML/CSS, Java, C#, SQL, PostgreSQL, SQLite, Linux, Git, TypeScript, Express.js
    data: [
      { heading: "React.js" },
      { heading: "JavaScript" },
      { heading: "Typescript" },
      { heading: "Jest Testing Framework" },
      { heading: "React Storybook" },
      { heading: "Styled-components" },
      { heading: "WC3 Accessibility" },
      { heading: "Ruby on Rails" },
      { heading: "SQL" },
      { heading: "REST API" },
      { heading: "Redux" },
      { heading: "HTML/CSS" },
      { heading: "Java" },
      { heading: "C#" },
      { heading: "PostgreSQL" },
      { heading: "SQLite" },
      { heading: "Linux" },
      { heading: "Git" },
      { heading: "Express.js" },
    ],
  },
  {
    layout: "textBlock",
    heading: "Verizon Design Systems:",
    thumbnail: {
      url: "./VerizonLogo.png",
      altText: "verizon logo",
    },
    data: {
      body: "Use React and Typescript to create a component library that serve as the foundation for mobile, tablet and desktop applications across all Verizon marketing teams. Created tests utilising React testing library for validation and quality control. Created prototype and mock web pages that implement components for internal review. Work with content developers that integrate components into the Adobe Experience Manager (AEM). Making web components accessible to the vision and hearing impaired. Making the web accessible to people with disabilities using JAWS, Google talkback, and Apple voiceover.",
    },
  },
  {
    layout: "textBlock",
    heading: "Applications out in the wild:",
    data: {
      body: "myVerizon App: Used React, Typescript, Javascript and JEST testing library to develop the majority of the component library for the widely used myVerizon App. Mobile Store Platform Update: currently working on an internal project to modernised technology behind store web page’s platform, and creating a prototype through an iterative design process",
    },
  },
  {
    layout: "textBlock",
    heading: "Experience:",
    data: {
      body: "Mean Guppy, Remote, New York Software Engineer, 2020-present  Software engineering and web design as a subcontractor for Verizon Marketing Team's.  Brooklyn Game Labs, Brooklyn, New York  Instructor, 2018-2019  Instruct cohorts of 15-20 kids aged 7-13 to play and design table-top games, guiding analysis on design choices. American Institute of Certified Public Accountants (AICPA), Ewing, New Jersey  Communications Specialist, 2007 - 2012.",
    },
  },
  // {
  //   layout: "textBlock",
  //   data: {
  //     heading: "text block 1 heading",
  //     body: "testing body length: The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
  //   },
  // },
];

const data = {
  header: {
    title: "Martin Crabtree",
    children: "Full-Stack Engineer",
  },
  hero: {
    textblock: {
      title:
        "CREATING EXSTENSIBLE AND PERFORMANT APPLICATIONS FOR THE MODERN WEB.",
      // subtitle: "CREATING EXSTENSIBLE AND PERFORMANT WEB APPLICATIONS",
      body: "Skills: React, Jest, Storybook, Styled-components, WC3 Accessibility, Ruby, Rails, REST API, JavaScript, Redux, HTML/CSS, Java, C#, SQL, PostgreSQL, SQLite, Linux, Git, TypeScript, Express.js",
    },
    imageblock: {
      url: "./headshot.jpg",
      altText: "image Martin Crabtree",
    },
  },
  sections: {
    sections: sectionArr,
  },
  footer: {
    footerData: [
      {
        title: "Github",
        link: "https://github.com/TheMartinCrabtree",
      },
      {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/themartincrabtree",
      },
      {
        title: "Medium",
        link: "https://medium.com/@martin.crabtree",
      },
      {
        title: "YouTube",
        link: "https://www.youtube.com/channel/UC5e1qRCZx42UHOlDimDt5UA",
      },
    ],
  },
};

export default data;
