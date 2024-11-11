export const VOTE_EVENTS = [
  {
    id: "aFWdHRn39TAxjJZ9Hgb3MjkF",
    title: "Presidential Election",
    subtitle: "Nationwide",
    voteCount: 8357693,
    timeLeft: new Date(Date.now() + 8 * 60 * 60 * 1000),
    imageSource: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    voted: false,
    isActive: true,
    candidates: ["cpq6QBa3BS8aCDxnsP64QgxW", "cprHr58324o2yd62ECr3hSsv"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "aFbcWWD3P5s5ESYyhqsQbdNd",
    title: "Nigeria Election",
    subtitle: "Lagos",
    voteCount: 783140,
    timeLeft: new Date(Date.now() + 5.5 * 60 * 60 * 1000),
    imageSource: "https://images.unsplash.com/photo-1684853693031-ab9e3f8c9d5e",
    voted: true,
    isActive: true,
    candidates: ["dCTpR5f3KqHA4ZaiYTFu2QCK", "dCYGQFp3wHfbQ82q9wd9gdcY"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "aFZ3Q1V3P2Gq7Rz6Fk9V5sYt",
    title: "School Board Elections",
    subtitle: "California",
    voteCount: 1247,
    timeLeft: new Date(Date.now() + 17 * 60 * 60 * 1000),
    imageSource:
      "https://images.unsplash.com/photo-1709483372751-39cc94c9e358?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    voted: false,
    isActive: true,
    candidates: ["dFF3riY3EM3ptEh35u2v8RBX", "dFJn95b3iN3QNA35XArFBd3r"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "aFZQ9Pj3wfPKwdCDdfh9KHri",
    title: "MP Election",
    subtitle: "Taj Mahal",
    voteCount: 345923,
    timeLeft: new Date(Date.now() + 5 * 60 * 60 * 1000),
    imageSource: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    voted: true,
    isActive: true,
    candidates: ["dG9ZfD23Q6WCnAALDkwPhR4y", "dGFn2xM3K5Cppr36Car35BwS"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "aFf8W2vKy1Ks7iN3Dmj3Q9z4",
    title: "National Youth Election",
    subtitle: "Sub-Saharan Africa",
    voteCount: 1945278,
    timeLeft: new Date(Date.now() + 20 * 60 * 60 * 1000),
    imageSource: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    voted: false,
    isActive: true,
    candidates: ["dHGHqrM33xBmaWg3hGa3K9QH", "dHHMBTm34yrf5o4HWcY3RYMT"],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export const CANDIDATES = {
  cpq6QBa3BS8aCDxnsP64QgxW: {
    id: "cpq6QBa3BS8aCDxnsP64QgxW",
    name: "Donald Trump",
    party: "Republican",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg",
    manifesto: [
      {
        title: "Economy",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus cupiditate vitae saepe veritatis, sequi doloremque molestiae voluptatem provident totam!",
      },
      {
        title: "Healthcare",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus cupiditate vitae saepe veritatis, sequi doloremque molestiae voluptatem provident totam!",
      },
      {
        title: "Education",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus cupiditate vitae saepe veritatis, sequi doloremque molestiae voluptatem provident totam!",
      },
      {
        title: "Foreign Policy",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus cupiditate vitae saepe veritatis, sequi doloremque molestiae voluptatem provident totam!",
      },
      {
        title: "Environment",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus cupiditate vitae saepe veritatis, sequi doloremque molestiae voluptatem provident totam!",
      },
    ],
    feedback: [
      {
        user: "dEWP7Mc3qeB3TGmfA8nzZfWp",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem temporibus velit labore dicta natus numquam incidunt eos? Quaerat, ipsum cumque. Quo, placeat. Veritatis?",
        date: new Date(Date.now() - 30 * 60 * 1000),
      },
      {
        user: "dEdefpW39ckf68qNM6b3hfC4",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem temporibus velit labore dicta natus numquam incidunt eos? Quaerat, ipsum cumque. Quo, placeat. Veritatis?",
        date: new Date(Date.now() - 5 * 60 * 60 * 1000),
      },
      {
        user: "dEeYcr33t7kuzC8toSm6nbjB",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem temporibus velit labore dicta natus numquam incidunt eos? Quaerat, ipsum cumque. Quo, placeat. Veritatis?",
        date: new Date(Date.now() - 8 * 60 * 60 * 1000),
      },
      {
        user: "dEfRe5Q3R3FQH8yhfucPM5Le",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem temporibus velit labore dicta natus numquam incidunt eos? Quaerat, ipsum cumque. Quo, placeat. Veritatis?",
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    ],
  },
  cprHr58324o2yd62ECr3hSsv: {
    id: "cprHr58324o2yd62ECr3hSsv",
    name: "Kamala Harris",
    party: "Democratic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/800px-Kamala_Harris_Vice_Presidential_Portrait.jpg",
    manifesto: [
      {
        title: "Social Justice",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat asperiores architecto exercitationem mollitia odio laborum cum, nihil numquam eveniet.",
      },
      {
        title: "Technology",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat asperiores architecto exercitationem mollitia odio laborum cum, nihil numquam eveniet.",
      },
      {
        title: "Jobs and Economy",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat asperiores architecto exercitationem mollitia odio laborum cum, nihil numquam eveniet.",
      },
      {
        title: "Infrastructure",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat asperiores architecto exercitationem mollitia odio laborum cum, nihil numquam eveniet.",
      },
      {
        title: "National Security",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat asperiores architecto exercitationem mollitia odio laborum cum, nihil numquam eveniet.",
      },
    ],
    feedback: [
      {
        user: "dEmirYA3t7vnLA2TR9gQgdur",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste debitis assumenda omnis. Sapiente, esse?",
        date: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
      {
        user: "dErqFtt3nNanS8DuAXFmnqAq",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste debitis assumenda omnis. Sapiente, esse?",
        date: new Date(Date.now() - 10 * 60 * 60 * 1000),
      },
      {
        user: "dEvGDFo3JzEs73kHixLTtZYa",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste debitis assumenda omnis. Sapiente, esse?",
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      {
        user: "dEvv68J3oepNLDF8N3G6Kh8R",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum iste debitis assumenda omnis. Sapiente, esse?",
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
    ],
  },

  dCTpR5f3KqHA4ZaiYTFu2QCK: {
    id: "dCTpR5f3KqHA4ZaiYTFu2QCK",
    name: "Akeem Samuel",
    party: "PAP",
    imageUrl: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484",
    manifesto: [
      {
        title: "Economic Development",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Anti-Corruption",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Security",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Education Reform",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Healthcare",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
    ],
    feedback: [
      {
        user: "dF375sN3KbzDWuzcyfvAXS8G",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 45 * 60 * 1000),
      },
      {
        user: "dF4wzwo3uC5qyKzP4Qn9SYcZ",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 5 * 60 * 60 * 1000),
      },
      {
        user: "dF5rZRJ3EWxZ6eTp52qJsLyv",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 12 * 60 * 60 * 1000),
      },
    ],
  },
  dCYGQFp3wHfbQ82q9wd9gdcY: {
    id: "dCYGQFp3wHfbQ82q9wd9gdcY",
    name: "Surprise Femi",
    party: "AGO",
    imageUrl: "https://images.unsplash.com/photo-1533108344127-a586d2b02479",
    manifesto: [
      {
        title: "Job Creation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Education",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Healthcare Access",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Infrastructure Development",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Youth Empowerment",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
    ],
    feedback: [
      {
        user: "dF92GSQ3cmXocXJSckEhtpPu",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
      {
        user: "dF9x6ph3iZnPP4BhK7P5GPkm",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 6 * 60 * 60 * 1000),
      },
      {
        user: "dFAy7aC3EteTyPqk3HYrJG5N",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 15 * 60 * 60 * 1000),
      },
    ],
  },

  dFF3riY3EM3ptEh35u2v8RBX: {
    id: "dFF3riY3EM3ptEh35u2v8RBX",
    name: "Emily Johnson",
    party: "Community for Change",
    imageUrl: "https://images.unsplash.com/photo-1541717782351-e9acfdc4f0ab",
    manifesto: [
      {
        title: "School Safety",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Curriculum Development",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Teacher Support",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Mental Health Resources",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Community Involvement",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
    ],
    feedback: [
      {
        user: "dFkLsnY3XyYEDLMk76qFEPfj",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 30 * 60 * 1000),
      },
      {
        user: "dFmRgjm3egKAgANRgws9wNnh",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
    ],
  },
  dFJn95b3iN3QNA35XArFBd3r: {
    id: "dFJn95b3iN3QNA35XArFBd3r",
    name: "Michael Chen",
    party: "Progress for All",
    imageUrl: "https://images.unsplash.com/photo-1591605555749-d25cfd47e981",
    manifesto: [
      {
        title: "Improving Facilities",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Budget Transparency",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Extracurricular Activities",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Digital Learning",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
    ],
    feedback: [
      {
        user: "dG5nHPz3F5PfMeYmEeGmDZoP",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
    ],
  },

  dG9ZfD23Q6WCnAALDkwPhR4y: {
    id: "dG9ZfD23Q6WCnAALDkwPhR4y",
    name: "Rajesh Kumar",
    party: "People's Alliance",
    imageUrl: "https://images.unsplash.com/photo-1639329570034-6368f70b8766",
    manifesto: [
      {
        title: "Regional Development",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Job Creation",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Healthcare Access",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Education Reform",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
    ],
    feedback: [
      {
        user: "dGfHxE63BwQeA7Yvhwk3udQN",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 20 * 60 * 1000),
      },
      {
        user: "dGkCEdg3aKhN3fNrNsKjffYT",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 8 * 60 * 60 * 1000),
      },
      {
        user: "dGks4473azL5my5ZXRXALwhZ",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 19 * 60 * 60 * 1000),
      },
    ],
  },
  dGFn2xM3K5Cppr36Car35BwS: {
    id: "dGFn2xM3K5Cppr36Car35BwS",
    name: "Fatima Aslam",
    party: "National Progress Party",
    imageUrl: "https://images.unsplash.com/photo-1646979200272-b76a262249b8",
    manifesto: [
      {
        title: "Women's Rights",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Education",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Environmental Protection",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Improving Public Transportation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "National Security",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
    ],
    feedback: [
      {
        user: "dGvzbzA38D3CEfWonAy3Xwgh",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 10 * 60 * 60 * 1000),
      },
      {
        user: "dGyXStB3J65PGppeFokWTtH6",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 20 * 60 * 60 * 1000),
      },
    ],
  },

  dHGHqrM33xBmaWg3hGa3K9QH: {
    id: "dHGHqrM33xBmaWg3hGa3K9QH",
    name: "Sipho Maseko",
    party: "Future Leaders Party",
    imageUrl:
      "https://images.unsplash.com/photo-1684669518674-43db6d3af3b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    manifesto: [
      {
        title: "Affordable Education",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Youth Employment",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Mental Health Support",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
      {
        title: "Tech Innovation",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laborum ducimus ea reprehenderit molestias, nesciunt deserunt nihil facere eligendi odit a voluptate iure enim ab accusamus accusantium necessitatibus sed. Rem, quia ducimus?",
      },
    ],
    feedback: [
      {
        user: "dHXJnWh33M7QFJmNmAAMiJBF",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
      {
        user: "dHbkMMk3JhkCmdji3p43gMJe",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 8 * 60 * 60 * 1000),
      },
      {
        user: "dHbgj873AEXhyTEogXSmiusn",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi.",
        date: new Date(Date.now() - 16 * 60 * 60 * 1000),
      },
    ],
  },
  dHHMBTm34yrf5o4HWcY3RYMT: {
    id: "dHHMBTm34yrf5o4HWcY3RYMT",
    name: "Thandiwe Mbatha",
    party: "Youth Empowerment Coalition",
    imageUrl:
      "https://images.unsplash.com/photo-1605602517387-ec78b947335e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvdXRoJTIwYWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D",
    manifesto: [
      {
        title: "Free Skills Training",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Social Justice",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Gender Equality",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
      {
        title: "Affordable Housing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum pariatur animi cumque quos eveniet delectus nesciunt sint assumenda quam rerum, at neque commodi ratione quibusdam eum aliquid.",
      },
    ],
    feedback: [
      {
        user: "dHsGG9c3WEuBefg3iyjpurys",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
      {
        user: "dHtfEcR3SCjgiooEWkD2KRWh",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam totam eos!",
        date: new Date(Date.now() - 12 * 60 * 60 * 1000),
      },
    ],
  },
};
