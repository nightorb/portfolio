export const projects = [
  {
    id: 1,
    title: 'myFlix',
    subtitle: 'SPA with routing, rich interactions, several interface views, and a polished user experience',
    stack: [
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    description: '"myFlix" is a single-page, responsive application with routing, rich interactions, several interface views, and a polished user experience. The app provides users with access to information about different movies, directors, genres, and actors. Users are able to sign up, update their personal information, and create a list of their favorite movies.',
    liveDemo: [
      'If you don\'t want to create an account, you can login with the demo user:',
      'Username: demouser',
      'Password: Demo_1234',
      'Please note that you shouldn\'t change the username or password when using the demo user.'
    ],
    coverImage: 'myFlix_ProjectCard',
    projectImages: [
      'myFlix_LoginView',
      'myFlix_MoviesPage',
      'myFlix_MovieDetails',
      'myFlix_DirectorView',
      'myFlix_GenresList',
      'myFlix_UserProfile'
    ],
    caseStudy: 'Case-Study_myFlix',
    ghUrl: 'https://github.com/nightorb/myFlix-client',
    liveUrl: 'https://nightorbs-myflix.netlify.app/'
  },
  {
    id: 2,
    title: 'Meet',
    subtitle: 'Serverless PWA built with React following a TDD workflow',
    stack: [
      'React',
      'AWS',
      'Google Calendar API',
      'Jest'
    ],
    description: '"Meet" is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
    coverImage: 'Meet_ProjectCard',
    caseStudy: null,
    ghUrl: 'https://github.com/nightorb/meet',
    liveUrl: 'https://nightorb.github.io/meet/'
  },
  {
    id: 3,
    title: 'HelloChat',
    subtitle: 'Chat app for mobile devices built with React Native',
    stack: [
      'React Native',
      'Expo',
      'Firebase',
      'Gifted Chat'
    ],
    description: '"HelloChat" is a chat app for mobile devices created with React Native. The app provides users with a chat interface and options to share images and their location.',
    coverImage: 'HelloChat_ProjectCard',
    caseStudy: null,
    ghUrl: 'https://github.com/nightorb/hello-chat',
    liveUrl: null
  },
  {
    id: 4,
    title: 'Pok??dex App',
    subtitle: 'Small web application that loads data from an external API',
    stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap'
    ],
    description: 'The Pok??dex App is a small web application that loads data from an external API and enables the viewing of details about each Pok??mon. It contains the original 150 Pok??mon and displays basic data such as height, weight, types, abilities and an image of the Pok??mon.',
    coverImage: 'Pokedex_ProjectCard',
    caseStudy: null,
    ghUrl: 'https://github.com/nightorb/pokedex-app',
    liveUrl: 'https://nightorb.github.io/pokedex-app/'
  }
];

export const frontendSkills = [
  'HTML, CSS, JavaScript, TypeScript',
  'React, Redux, Axios',
  'Bootstrap, Sass/SCSS',
  'React Native, Expo',
  'Angular, Material'
]

export const backendSkills = [
  'Node, Express',
  'APIs (JSON, Postman)',
  'MongoDB, Mongoose',
  'AWS, Firestore, Heroku, Netlify'
]

export const otherSkills = [
  'Responsive Design, Color Theory',
  'Sketching & Illustration, Photoshop',
  'Maya, ZBrush, Unreal Engine, Substance Designer & Painter',
]
