import { IQuizFull } from '../types';

export const QUIZ_1: IQuizFull = {
  topic: 'Topic 1',
  subject: 'Subject 1',
  questions: [
    {
      question: 'Question 1',
      answers: [
        {
          text: '0',
          explanation: null
        },
        {
          text: '2',
          explanation: null
        }
      ],
      hints: [`Hint 1`, 'Hint 2', 'Hint 3'],
      options: [
        {
          text: `Option 3`,
          index: '2'
        },
        {
          text: 'Option 2',
          index: '1'
        },
        {
          text: 'Option 5',
          index: '4'
        },
        {
          text: 'Option 4',
          index: '3'
        },
        {
          text: 'Option 1',
          index: '0'
        }
      ],
      image:
        'https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/08/reduxLogo.png?fit=1024%2C684',
      weight: 1,
      difficulty: 'Beginner',
      type: 'MS',
      time_allocated: 120,
      _id: 'quiz1.question1',
      quiz: {
        topic: 'Topic 1',
        subject: 'Subject 1',
        _id: 'quiz1'
      }
    },
    {
      question: ['Chunk 1', 'Chunk 2'],
      answers: [
        [
          {
            text: 'answer 1',
            modifiers: ['IC', 'IS'],
            regex: null,
            explanation: `\`\`\`js\nconst explanation = "Hello World";\n\`\`\``
          },
          {
            text: 'answer 1 version 2',
            modifiers: [],
            regex: {
              flags: 'gi',
              regex: 'answer1'
            },
            explanation: 'Explanation 1 for answer 2'
          }
        ],
        [
          {
            text: 'answer 2',
            modifiers: [],
            regex: null,
            explanation: null
          }
        ]
      ],
      hints: ['Hint 1', 'Hint 2', 'Hint 3'],
      options: null,
      image:
        'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
      weight: 0.5,
      difficulty: 'Beginner',
      type: 'FIB',
      time_allocated: 60,
      _id: 'quiz1.question2',
      quiz: {
        topic: 'Topic 1',
        subject: 'Subject 1',
        _id: 'quiz1'
      }
    }
  ],
  _id: 'quiz1'
};

export const QUIZ_2: IQuizFull = {
  topic: 'Topic 2',
  subject: 'Subject 2',
  questions: [
    {
      question: 'Quiz 2 Question 1',
      answers: [
        {
          text: '0',
          explanation: null
        }
      ],
      hints: ['Hint 1', 'Hint 2', 'Hint 3'],
      options: [
        {
          text: 'Option 1',
          index: '0'
        },
        {
          text: 'Option 2',
          index: '1'
        },
        {
          text: 'Option 3',
          index: '2'
        },
        {
          text: 'Option 4',
          index: '3'
        },
        {
          text: 'Option 5',
          index: '4'
        }
      ],
      image:
        'https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/08/reduxLogo.png?fit=1024%2C684',
      weight: 1,
      difficulty: 'Beginner',
      type: 'MCQ',
      time_allocated: 120,
      _id: 'quiz2.question1',
      quiz: {
        topic: 'Topic 2',
        subject: 'Subject 2',
        _id: 'quiz2'
      }
    },
    {
      question: ['Chunk 1', 'Chunk 2', 'Chunk 3'],
      answers: [
        [
          {
            text: 'answer 1',
            modifiers: [],
            regex: null,
            explanation: null
          }
        ],
        [
          {
            text: 'answer 2',
            modifiers: [],
            regex: null,
            explanation: null
          }
        ]
      ],
      hints: ['Hint 1', 'Hint 2', 'Hint 3'],
      options: null,
      image:
        'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
      weight: 1,
      difficulty: 'Beginner',
      type: 'FIB',
      time_allocated: 120,
      _id: 'quiz2.question2',
      quiz: {
        topic: 'Topic 2',
        subject: 'Subject 2',
        _id: 'quiz2'
      }
    }
  ],
  _id: 'quiz2'
};
