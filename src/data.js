const sectionArr = [
  {
    layout: "grid",
    data: [
      { title: "grid item 1" },
      { title: "grid item 2" },
      { title: "grid item 3" },
      { title: "grid item 4" },
      { title: "grid item 5" },
      { title: "grid item 6" },
      { title: "grid item 7" },
      { title: "grid item 8" },
    ],
  },
  {
    layout: "textBlock",
    data: "textBlock",
  },
  {
    layout: "textBlock",
    data: "textBlock",
  },
  {
    layout: "textBlock",
    data: "textBlock",
  },
];

const data = {
  header: {
    title: "Martin Crabtree",
    children: "Full-Stack Web Developer",
  },
  hero: {
    textblock: {
      title: "NEED A TITLE",
      subtitle: "IS A SUBTITLE NEEDED",
      body: "Skills: React, Jest, Storybook, Styled-components, WC3 Accessibility, Ruby, Rails, SQL, REST API, JavaScript, Redux, HTML/CSS, Java, C#, SQL, PostgreSQL, SQLite, Linux, Git, TypeScript, Express.js",
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
      },
      {
        title: "Linkedin",
      },
      {
        title: "Medium",
      },
      {
        title: "YouTube",
      },
    ],
  },
};

export default data;
