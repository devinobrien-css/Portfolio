import { GithubProject } from '../types/Project';

export const frontend_tags = [
  'Angular',
  'React',
  'Svelte',
  'Typescript',
  'Javascript', // 'Vue',
];
export const backend_tags = [
  'Python',
  'Go',
  'C#',
  'Flask',
  'GraphQL',
  'Apollo Server',
  'Node',
  'Express', //'Django'
];
export const cloud_tags = [
  'AWS',
  'CDK',
  'Amplify', // 'GCP', 'Azure',
];
export const database_tags = [
  'PostgreSQL',
  'SQL Server',
  'DynamoDB', // 'MongoDB', 'MySQL', 'SQLite'
];
export const devops_tags = [
  'Docker',
  'Netlify', //'Github Actions',
];
export const design_tags = [
  'CSS',
  'SCSS',
  'Tailwind', //'Bootstrap', 'Material UI'
];
// const other_tags = [
//   'C', 'C++', 'Java', 'Rust', 'TCP', 'UDP', 'Rest', 'API', 'Geo', 'Maps', 'WebSockets'
// ];

export const projects: GithubProject[] = [
  {
    title: 'Angular Sample',
    image: 'https://access-portfolio-images.s3.amazonaws.com/angular-bg.webp',
    github: 'https://github.com/devinobrien-css/angular-sample',
    demo: '',
    skills: [
      {
        name: 'Angular',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/angular-icon.png',
      },
      {
        name: 'Typescript',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/typescript-icon.png',
      },
      {
        name: 'Tailwind',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/tailwind-icon.png',
      },
    ],
    description:
      'A sample project using Angular and Tailwind providing a simple UI over a RESTful server',
    tags: ['Angular', 'Typescript', 'Tailwind', 'Javascript'],
  },
  {
    title: 'Neuroexed',
    image: 'https://access-portfolio-images.s3.amazonaws.com/neuroexed-bg.png',
    github: 'https://github.com/devinobrien-css/neuroexed',
    demo: 'https://neuroexed.com/',
    skills: [
      {
        name: 'React',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/react-icon.png',
      },
      {
        name: 'Typescript',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/typescript-icon.png',
      },
      {
        name: 'Tailwind',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/tailwind-icon.png',
      },
    ],
    description:
      'An lab website built with React and Typescript, utilizes a Python API and other AWS services.',
    tags: [
      'React',
      'Typescript',
      'Tailwind',
      'DynamoDB',
      'AWS',
      'Netlify',
      'Javascript',
    ],
  },
  {
    title: 'Svelte Sample',
    image: 'https://access-portfolio-images.s3.amazonaws.com/svelte-bg.jpeg',
    github: 'https://github.com/devinobrien-css/svelte-sample',
    demo: '',
    skills: [
      {
        name: 'Svelte',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/svelte-icon.png',
      },
      {
        name: 'Typescript',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/typescript-icon.png',
      },
      {
        name: 'Tailwind',
        icon: 'https://access-portfolio-images.s3.amazonaws.com/tailwind-icon.png',
      },
    ],
    description:
      'A sample project using Svelte and Tailwind providing a simple UI over a RESTful server',
    tags: ['Svelte', 'Typescript', 'Tailwind', 'Javascript'],
  },
  {
    title: 'Object Detection',
    image: 'https://access-portfolio-images.s3.amazonaws.com/python-bg.jpeg',
    github: 'https://github.com/devinobrien-css/image-object-detection',
    demo: '',
    skills: [
      {
        name: 'Python',
        icon: '',
      },
      {
        name: 'OpenCV',
        icon: '',
      },
      {
        name: 'Numpy',
        icon: '',
      },
    ],
    description:
      'An object detection project using Python and OpenCV. This project uses a pre-trained model to detect objects in an image.',
    tags: ['Python', 'OpenCV'],
  },
  {
    title: 'CDK Infrastructure',
    image: 'https://access-portfolio-images.s3.amazonaws.com/aws-bg.png',
    github: 'https://github.com/devinobrien-css/aws-cdk-example/',
    demo: '',
    skills: [
      {
        name: 'AWS',
        icon: '',
      },
      {
        name: 'CDK',
        icon: '',
      },
      {
        name: 'Lambda',
        icon: '',
      },
      {
        name: 'RDS',
        icon: '',
      },
      {
        name: 'S3',
        icon: '',
      },
    ],
    description:
      'An AWS CDK example to deploy a serverless infrastructure with Lambda, API Gateway, RDS, and S3.',
    tags: ['AWS', 'CDK'],
  },
  {
    title: 'Python Flask Server',
    image: 'https://access-portfolio-images.s3.amazonaws.com/python-bg-1.jpeg',
    github: 'https://github.com/devinobrien-css/python-flask-sample',
    demo: '',
    skills: [
      {
        name: 'Python',
        icon: '',
      },
      {
        name: 'Flask',
        icon: '',
      },
      {
        name: 'Rest',
        icon: '',
      },
      {
        name: 'PostgreSQL',
        icon: '',
      },
    ],
    description:
      'A RESTful server example using Python and Flask. This project uses a PostgreSQL instance that is built locally using Docker.',
    tags: ['Python', 'Flask', 'Rest', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Go Server Sample',
    image: 'https://access-portfolio-images.s3.amazonaws.com/go-bg.png',
    github: 'https://github.com/devinobrien-css/golang-sample',
    demo: '',
    skills: [
      {
        name: 'Go',
        icon: '',
      },
      {
        name: 'Rest',
        icon: '',
      },
      {
        name: 'PostgreSQL',
        icon: '',
      },
      {
        name: 'Docker',
        icon: '',
      },
    ],
    description: 'A RESTful server example using Go',
    tags: ['Go', 'Rest', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'C# Server Sample',
    image: 'https://access-portfolio-images.s3.amazonaws.com/csharp.png',
    github: 'https://github.com/devinobrien-css/c-sharp-asp-net-server',
    demo: '',
    skills: [
      {
        name: 'C#',
        icon: '',
      },
      {
        name: '.NET',
        icon: '',
      },
      {
        name: 'Rest',
        icon: '',
      },
      {
        name: 'SQL Server',
        icon: '',
      },
    ],
    description: 'A simple RESTful C# server example',
    tags: ['C#', 'Rest', 'API', 'SQL Server'],
  },
  {
    title: 'Spotify API Example',
    image: 'https://access-portfolio-images.s3.amazonaws.com/spotify-bg.png',
    github: 'https://github.com/devinobrien-css/spotify-api-sample',
    demo: 'https://spotify-api-sample.netlify.app/',
    skills: [
      {
        name: 'React',
        icon: '',
      },
      {
        name: 'Typescript',
        icon: '',
      },
      {
        name: 'Spotify',
        icon: '',
      },
      {
        name: 'Netlify',
        icon: '',
      },
    ],
    description: 'A simple project to test the use of the Spotify API',
    tags: ['Rest', 'API', 'Typescript', 'React', 'Netlify', 'Javascript'],
  },
  {
    title: 'Diversity At College',
    image: 'https://access-portfolio-images.s3.amazonaws.com/college-bg.jpeg',
    github: 'https://github.com/devinobrien-css/Diversity-at-College',
    demo: 'https://diversityatcollege.com/',
    skills: [
      {
        name: 'React',
        icon: '',
      },
      {
        name: 'Typescript',
        icon: '',
      },
      {
        name: 'Tailwind',
        icon: '',
      },
      {
        name: 'Netlify',
        icon: '',
      },
    ],
    description: 'A website using react and Typescript',
    tags: [
      'React',
      'Typescript',
      'Javascript',
      'Tailwind',
      'Netlify',
      'Javascript',
    ],
  },
  {
    title: 'Amplify Geo Maps',
    image: 'https://access-portfolio-images.s3.amazonaws.com/amplify-bg.png',
    github: 'https://github.com/devinobrien-css/Map-API-Example',
    demo: '',
    skills: [
      {
        name: 'AWS',
        icon: '',
      },
      {
        name: 'Amplify',
        icon: '',
      },
      {
        name: 'Geo',
        icon: '',
      },
      {
        name: 'Maps',
        icon: '',
      },
      {
        name: 'React',
        icon: '',
      },
    ],
    description:
      'A sample project using AWS Amplify and Geo to render maps in React',
    tags: [
      'AWS',
      'Amplify',
      'Geo',
      'Maps',
      'React',
      'Typescript',
      'Javascript',
    ],
  },
  {
    title: 'Docker Postgres',
    image: 'https://access-portfolio-images.s3.amazonaws.com/docker-pg-bg.jpeg',
    github: 'https://github.com/devinobrien-css/docker-postgres-sample',
    demo: '',
    skills: [
      {
        name: 'Docker',
        icon: '',
      },
      {
        name: 'PostgreSQL',
        icon: '',
      },
    ],
    description: 'A docker-compose example initializing a Postgres instance',
    tags: ['Docker', 'PostgreSQL'],
  },
  {
    title: 'Docker SQL Server',
    image: 'https://access-portfolio-images.s3.amazonaws.com/docker-sql-bg.png',
    github: 'https://github.com/devinobrien-css/docker-sqlserver-sample',
    demo: '',
    skills: [
      {
        name: 'Docker',
        icon: '',
      },
      {
        name: 'SQL Server',
        icon: '',
      },
    ],
    description: 'A docker-compose example initializing a SQL server instance',
    tags: ['Docker', 'SQL Server'],
  },
  {
    title: 'GraphQL Query Builder',
    image: 'https://access-portfolio-images.s3.amazonaws.com/graphql-bg.png',
    github: 'https://github.com/devinobrien-css/query-builder',
    demo: '',
    skills: [
      {
        name: 'GraphQL',
        icon: '',
      },
      {
        name: 'Node',
        icon: '',
      },
      {
        name: 'Express',
        icon: '',
      },
      {
        name: 'PostgreSQL',
        icon: '',
      },
    ],
    description:
      'GraphQL over a Postgres instance with Node, Express, Nexus/Prisma',
    tags: [
      'GraphQL',
      'Node',
      'Express',
      'PostgreSQL',
      'Typescript',
      'Javascript',
    ],
  },
  {
    title: 'Query Builder Client',
    image:
      'https://access-portfolio-images.s3.amazonaws.com/apollo-react-bg.jpeg',
    github: 'https://github.com/devinobrien-css/query-builder-UI',
    demo: '',
    skills: [
      {
        name: 'React',
        icon: '',
      },
      {
        name: 'Typescript',
        icon: '',
      },
      {
        name: 'Apollo',
        icon: '',
      },
      {
        name: 'GraphQL',
        icon: '',
      },
    ],
    description: 'A React client for the GraphQL Query Builder Server',
    tags: ['GraphQL', 'React', 'Typescript', 'Javascript', 'Apollo Server'],
  },
  {
    title: 'Logistic Regression Model',
    image:
      'https://access-portfolio-images.s3.amazonaws.com/logistic-regression-bg.jpeg',
    github: 'https://github.com/devinobrien-css/Logistic-Regression-python',
    demo: '',
    skills: [
      {
        name: 'Python',
        icon: '',
      },
      {
        name: 'Numpy',
        icon: '',
      },
      {
        name: 'Pandas',
        icon: '',
      },
    ],
    description: 'A simple logistic regression model using Python',
    tags: ['Python', 'Jupyter', 'Numpy', 'Pandas'],
  },
  {
    title: 'PCA in Python',
    image: 'https://access-portfolio-images.s3.amazonaws.com/pca-bg.png',
    github: 'https://github.com/devinobrien-css/PCA-python-example',
    demo: '',
    skills: [
      {
        name: 'Python',
        icon: '',
      },
      {
        name: 'Numpy',
        icon: '',
      },
      {
        name: 'Pandas',
        icon: '',
      },
    ],
    description: 'A simple PCA example using Python',
    tags: ['Python', 'Jupyter', 'Numpy', 'Pandas'],
  },
  {
    title: 'TCP Server',
    image: 'https://access-portfolio-images.s3.amazonaws.com/tcp-bg.jpeg',
    github: 'https://github.com/devinobrien-css/TCP-Client-Server-Example',
    demo: '',
    skills: [
      {
        name: 'C',
        icon: '',
      },
      {
        name: 'TCP',
        icon: '',
      },
    ],
    description: 'A multitenant TCP client & server example using C',
    tags: ['C', 'TCP'],
  },
  {
    title: 'UDP Server',
    image: 'https://access-portfolio-images.s3.amazonaws.com/udp-bg.png',
    github: 'https://github.com/devinobrien-css/UDP-Client-Server-Example',
    demo: '',
    skills: [
      {
        name: 'C',
        icon: '',
      },
      {
        name: 'UDP',
        icon: '',
      },
    ],
    description: 'A simple UDP client & server using C',
    tags: ['C', 'UDP'],
  },
  {
    title: 'PlayARTi',
    image: 'https://access-portfolio-images.s3.amazonaws.com/vue.png',
    demo: 'https://playarti.com/',
    skills: [
      {
        name: 'Vue',
        icon: '',
      },
      {
        name: 'Typescript',
        icon: '',
      },
      {
        name: 'Quasar',
        icon: '',
      },
      {
        name: 'AWS',
        icon: '',
      },
    ],
    description: 'A proof of concept AI powered art generator for kids',
    tags: ['Vue', 'Typescript', 'Quasar', 'AWS', 'Javascript', 'Typescript'],
  },
];
