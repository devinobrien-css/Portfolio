import { ProjectCardProps } from './Card';

export const projects: ProjectCardProps[] = [
  {
    title: 'Maro for Schools',
    subtitle: 'A Mental Health App',
    content: 'This webapp helps schools better locate and provide help for at risk students',
    description: 'Maro is a start-up company based in Sacremento, CA. They are a mental health focused group that sought a platform for schools to better locate and provide help for at risk students. The platform is designed to be a one-stop shop for schools to manage their students mental health needs.',
    skills: [
      {
        title: 'React',
        icon: 'logos:react',
        description: 'React was used for the user interface for its ease of use and responsiveness.'
      },
      {
        title: 'Tailwind',
        icon: 'devicon:tailwindcss',
        description: 'Tailwind was used for the styling for its ease of use and the ability to create a consistent look and feel.'
      },
      {
        title: 'TypeScript',
        icon: 'logos:typescript-icon',
        description: 'TypeScript was used for both the frontend and backend for its strict typing and ability to create a more maintainable codebase.'
      },
      {
        title: 'Node.js',
        icon: 'logos:nodejs-icon-alt',
        description: 'Node.js was used for the backend for its ability to create a scalable and maintainable server.'
      },
      {
        title: 'Express',
        icon: 'devicon:express',
        description: 'Express was used for the backend for simplified routing and middleware.'
      },
      {
        title: 'PostgreSQL',
        icon: 'logos:postgresql',
        description: 'PostgreSQL was used for the database for a reliable, relational database.'
      },
      {
        title: 'Docker',
        icon: 'logos:docker-icon',
        description: 'Docker was used for containerizing the database and API for a consistent deployment and local development.'
      },
      {
        title: 'AWS',
        icon: 'logos:aws',
        description: 'AWS was used for hosting the webapp and several other cloud resources used by the API (S3, Lambda, CloudFront).'
      }
    ],
  },
  {
    title: 'NeuroExed',
    subtitle: 'A Neuroscience Lab Website',
    content: 'This webapp features a blog, podcast and many more fun features!',
    description: 'Jim Stellar\'s NeuroExed Research Lab is made up of an interdisciplinary team of neuroscience enthusiasts. A common interest in the importance of experiential learning and the brain basis of decision making unites us to explore this challenging yet exciting area. This web application serves as their main platform for sharing their research and findings through news posts, blogs, podcasts and more.',
    skills: [
      {
        title: 'React',
        icon: 'logos:react',
        description: 'React was used for the user interface for its ease of use and responsiveness.'
      },
      {
        title: 'Python',
        icon: 'vscode-icons:file-type-python',
        description: 'Python was used for the API as a lightweight and efficient language for the server.'
      },
      {
        title: 'DynamoDB',
        icon: 'skill-icons:dynamodb-light',
        description: 'DynamoDB was used for the database for its high performance and cost efficiency.'
      },
      {
        title: 'Lambda',
        icon: 'logos:aws-lambda',
        description: 'Lambda was used for the API to establish a serverless architecture.'
      },
      {
        title: 'S3',
        icon: 'logos:aws-s3',
        description: 'S3 was used for storing the webapp\'s static files and media.'
      },
      {
        title: 'CloudFront',
        icon: 'logos:aws-cloudfront',
        description: 'CloudFront was used for serving the webapp to the internet.'
      }
    ]
  },
  {
    title: 'PlayARTI',
    subtitle: 'An image generator for kids',
    content: 'This production application hits the midjourney API to allow kids to create custom generated images through emoji clicks.',
    description: 'PlayARTI is a web application that allows kids to create custom generated images through emoji clicks. The app is designed to be a fun and interactive way for kids to express themselves through art. The app is built on top of the midjourney API, which provides the emoji images and the ability to generate new images from the user\'s selections.',
    skills: [
      {
        title: 'Vue',
        icon: 'logos:vue',
        description: 'Vue was used for the user interface for its ease of use and reliability with SVGs.'
      },
      {
        title: 'SCSS',
        icon: 'logos:sass',
        description: 'SCSS was used for the styling for its ability to create a consistent look and feel, and have more control over  animations and transitions.'
      },
      {
        title: 'AWS',
        icon: 'logos:aws',
        description: 'AWS was used for hosting the webapp and the midjourney API.'
      },
      {
        title: 'OpenAI',
        icon: 'logos:openai',
        description: 'OpenAI was used for the emoji images and the ability to generate custom images from the user\'s selections.'
      }
    ]
  },
  {
    title: 'Diversity at College',
    subtitle: 'An informative site for college diversity',
    content: 'Diversity at College is an advertising site for a book written by a number of collegiates with a passion for a better student experience.',
    description: 'Diversity at College is an advertising site for a book written by a number of collegiates with a passion for a better student experience. The site is designed to be a resource for students and faculty to learn more about the book and the authors.',
    skills:[
      {
        title: 'React',
        icon: 'logos:react',
        description: 'React was used for the user interface for its ease of use and responsiveness.'
      },
      {
        title: 'Tailwind',
        icon: 'devicon:tailwindcss',
        description: 'Tailwind was used for the styling for its ease of use and the ability to create a consistent look and feel.'
      },
      {
        title: 'AWS',
        icon: 'logos:aws',
        description: 'AWS was used for hosting the webapp and the book\'s media.'
      }
    ]
  },
  {
    title: 'S&H Portal',
    subtitle: 'Tracked outbound orders for print jobs',
    content: 'Provided full management for outgoing print jobs from cutting the paper to when it ships',
    description: 'This Shipping and Handling Management Portal is a web application that provides full management for outgoing print jobs for Content Critical Solutions. It would track orders on the production line from cutting the paper to loading onto the delivery truck. The app is designed to be a one-stop shop for managing the print jobs and the shipping process.',
    skills: [
      {
        title: 'PHP',
        icon: 'logos:php',
        description: 'PHP was used for the UI for its security and reliability.'
      },
      {
        title: 'Laravel',
        icon: 'logos:laravel',
        description: 'Laravel was used for simplifying the development of the PHP UI.'
      },
      {
        title: 'Python',
        icon: 'vscode-icons:file-type-python',
        description: 'Python was used for the API as a lightweight and efficient language for the server.'
      },
      {
        title: 'MySQL',
        icon: 'logos:mysql',
        description: 'MySQL was used for the database for a reliable and secure relational database.'
      },
      {
        title: 'Azure',
        icon: 'logos:azure',
        description: 'Azure was used for hosting the webapp and the API.'
      }
    ]
  },
];
