const sectionArr = [
  {
    type: "grid",
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
    type: "textBlock",
    data: "textBlock",
  },
  {
    type: "textBlock",
    data: "textBlock",
  },
  {
    type: "textBlock",
    data: "textBlock",
  },
];

const data = {
  header: {
    title: "Martin Crabtree",
    children: "Full-Stack Developer",
  },
  hero: {
    textblock: {
      title: "title text",
      subtitle: "subtitle text",
      body: "React, Jest, Storybook, Styled-components, Ruby, Rails, SQL, REST API, JavaScript, Redux, HTML/CSS, Java, C#, SQL, PostgreSQL, SQLite, Linux, Git, TypeScript, Express.js",
    },
    imageblock: {},
  },
  sections: {
    sections: sectionArr,
  },
  // footer: github, medium article,  linkedin}
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
