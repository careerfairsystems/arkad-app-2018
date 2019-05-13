const initialState = {
  aboutUs:
    'With 190 exhibiting companies and 300 volunteers, ARKAD is the largest career fair in Scandinavia. On the 14th and 15th of November Lund University, Faculty of Engineering will be crowded with thousands of students and exhibitors eager to meet new people and seize future opportunities. We hope to see you all there!',
  openingHours: [
    { date: '14 November', time: '10:00-16:00' },
    { date: '15 November', time: '10:00-15:00' }
  ],
  aboutArkadTeam:
    'The ARKAD organization consist of the Project Group, Coordinators and Hosts. All together we are almost 300 people and together we have been working very hard to make this year’s fair be the best one ever.',
  arkadTeam: [
    {
      title: 'Project group',
      data: [
        {
          key: '0',
          name: 'Nicolas Munke Cilano',
          role: 'Project Manager',
          image: require('../../resources/img/arkadTeam/IMG_3758.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/nicolas-munke-cilano/'
        },
        {
          key: '1',
          name: 'Daniel Tovesson',
          role: 'Head of IT',
          image: require('../../resources/img/arkadTeam/IMG_3537.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/danieltovesson/'
        },
        {
          key: '2',
          name: 'Madeleine Arkenius',
          role: 'Head of Marketing and Communication',
          image: require('../../resources/img/arkadTeam/IMG_3550.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/madeleine-arkenius-60a34117a/'
        },
        {
          key: '3',
          name: 'Matilda Holmberg',
          role: 'Head of Gasque and Event',
          image: require('../../resources/img/arkadTeam/IMG_3781.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/matilda-holmberg-a595a217a/'
        },
        {
          key: '4',
          name: 'Martin Andersson-Plyming',
          role: 'Head of Fait and Logistics',
          image: require('../../resources/img/arkadTeam/IMG_3795.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/mvap/'
        },
        {
          key: '5',
          name: 'Viktor Claesson',
          role: 'Internal Systems Manager',
          image: require('../../resources/img/arkadTeam/IMG_3798.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/viktor-claesson-26a666129/'
        },
        {
          key: '6',
          name: 'Alexander Mjöberg',
          role: 'External Systems Manager',
          image: require('../../resources/img/arkadTeam/IMG_3495.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/alexander-mj%C3%B6berg/'
        },
        {
          key: '7',
          name: 'Filippa Melin',
          role: 'Art Director',
          image: require('../../resources/img/arkadTeam/IMG_3811.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/filippa-melin-b2673713b/'
        },
        {
          key: '8',
          name: 'Johan Ternerot',
          role: 'Information Manager',
          image: require('../../resources/img/arkadTeam/IMG_3743.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/johan-ternerot-852102183/'
        },
        {
          key: '9',
          name: 'Johan Ravnborg',
          role: 'Recruitment Manager',
          image: require('../../resources/img/arkadTeam/IMG_3676.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/johan-ravnborg-69267617b/'
        },
        {
          key: '10',
          name: 'Emma Sandin',
          role: 'Banquet Manager',
          image: require('../../resources/img/arkadTeam/IMG_3659.jpg'),
          linkedInUrl: ''
        },
        {
          key: '11',
          name: 'Michael Lindberg',
          role: 'Event Manager',
          image: require('../../resources/img/arkadTeam/IMG_3714.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/michael-lindberg-9a6382153/'
        },
        {
          key: '12',
          name: 'Milda Grikainyte',
          role: 'Premises Manager',
          image: require('../../resources/img/arkadTeam/IMG_3698.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/milda-grikainyte-3624a5141/'
        },
        {
          key: '13',
          name: 'Martin Olsson',
          role: 'Premises Manager',
          image: require('../../resources/img/arkadTeam/IMG_3501.jpg'),
          linkedInUrl: ''
        },
        {
          key: '14',
          name: 'Johanna Lidholm',
          role: 'Service Manager',
          image: require('../../resources/img/arkadTeam/IMG_3719.jpg'),
          linkedInUrl: ''
        },
        {
          key: '15',
          name: 'Yusuf Qasem',
          role: 'Business Manager',
          image: require('../../resources/img/arkadTeam/IMG_3719.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/yusuf-qasem-15a17315b/'
        },
        {
          key: '16',
          name: 'Alexander Larsson',
          role: 'Business Manager',
          image: require('../../resources/img/arkadTeam/IMG_3719.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/alexander-larsson-672893166/'
        },
        {
          key: '17',
          name: 'Max Granvik',
          role: 'Business Manager',
          image: require('../../resources/img/arkadTeam/IMG_3719.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/max-granvik-44159370/'
        }
      ]
    },
    {
      title: 'IT - mobile application',
      data: [
        {
          key: '0',
          name: 'Alexander Mjöberg',
          role: 'Scrum Master',
          image: require('../../resources/img/arkadTeam/IMG_6578.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/alexander-mj%C3%B6berg/'
        },
        {
          key: '1',
          name: 'Arvid Pilhall',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6418.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/arvidpilhall/'
        },
        {
          key: '2',
          name: 'Fritjof Bengtsson',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6369.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/fritjofbengtsson/'
        },
        {
          key: '3',
          name: 'Joel Bångdal',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6407.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'IT - internal systems',
      data: [
        {
          key: '0',
          name: 'Viktor Claesson',
          role: 'Scrum Master',
          image: require('../../resources/img/arkadTeam/IMG_6361.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/viktor-claesson-26a666129/'
        },
        {
          key: '1',
          name: 'Gabriel Borglund',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6087.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/gabriel-borglund/'
        },
        {
          key: '2',
          name: 'Filip Hedén',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6545.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/filip-hed%C3%A9n-823682171/'
        },
        {
          key: '3',
          name: 'Mustafa Albayati',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6599.jpg'),
          linkedInUrl: ''
        },
        {
          key: '4',
          name: 'Nicki Berlin',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6556.jpg'),
          linkedInUrl: ''
        },
        {
          key: '5',
          name: 'Oskar Damkjaer',
          role: 'IT Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6450.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/oskar-damkjaer-771257b5/'
        }
      ]
    },
    {
      title: 'Banquet',
      data: [
        {
          key: '0',
          name: 'Ebba Johnsson',
          role: 'Decor and Purchasing Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6388.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/ebba-johnsson-37786a169'
        },
        {
          key: '1',
          name: 'Arvid Waldén Myhlback',
          role: 'Sound and Lightning Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6562.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/arvid-wald%C3%A9n-myhlback-ab8288b3/'
        }
      ]
    },
    {
      title: 'Event',
      data: [
        {
          key: '0',
          name: 'Albert Larsson',
          role: 'Administration Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6439.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/albert-larsson-273412158'
        },
        {
          key: '1',
          name: 'Matilda Holmberg',
          role: 'Administration Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6541.jpg'),
          linkedInUrl: ''
        },
        {
          key: '2',
          name: 'Johanna Engman',
          role: 'Meal Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6430.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/johanna-engman-6b0a3a15b/'
        },
        {
          key: '3',
          name: 'Linnéa Rosenbecker',
          role: 'Meal Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6573.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/linnearosenbecker/'
        }
      ]
    },
    {
      title: 'Info Desk',
      data: [
        {
          key: '0',
          name: 'Filip Farbäck',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6435.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/filip-farbäck-9b1255153'
        },
        {
          key: '1',
          name: 'Malin Lindström',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6489.jpg'),
          linkedInUrl: ''
        },
        {
          key: '2',
          name: 'Victoria Vernet',
          role: 'Info Desk Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6509.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Information',
      data: [
        {
          key: '0',
          name: 'Emma Åkerman',
          role: 'Information Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6586.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/emma-%C3%A5kerman-75695b152/'
        }
      ]
    },
    {
      title: 'Interior',
      data: [
        {
          key: '0',
          name: 'Charlotte Parnefjord Gustafsson',
          role: 'Interior Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6393.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/charlotteparnefjordgustafsson/'
        },
        {
          key: '1',
          name: 'Sofia Rokkones',
          role: 'Interior Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6363.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/sofia-rokkones-72705315a'
        }
      ]
    },
    {
      title: 'Logistics',
      data: [
        {
          key: '0',
          name: 'Elin Olofsson',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6374.jpg'),
          linkedInUrl: ''
        },
        {
          key: '1',
          name: 'Gustav Nacke',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6604.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/gustav-nacke-25665016a'
        },
        {
          key: '2',
          name: 'Martin Andersson-Plyming',
          role: 'Logistics Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6413.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Lounge',
      data: [
        {
          key: '0',
          name: 'Emma Bergman',
          role: 'Lounge Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6084.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/emma-bergman-91a278144'
        },
        {
          key: '1',
          name: 'Kristin Bobeck',
          role: 'Lounge Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6441.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Lunch',
      data: [
        {
          key: '0',
          name: 'Alice Jansson',
          role: 'Lunch Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6444.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/alice-jansson-024b45155'
        },
        {
          key: '1',
          name: 'Kristin Tiberg',
          role: 'Lunch Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6564.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Market Research',
      data: [
        {
          key: '0',
          name: 'Albin Robertsson',
          role: 'Market Research Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6591.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Network and Connection',
      data: [
        {
          key: '0',
          name: 'Patric Wargeus',
          role: 'Network and Connection Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6503.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'PR',
      data: [
        {
          key: '0',
          name: 'Viktor Stenvall',
          role: 'PR Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6463.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/viktor-stenvall-951083142'
        }
      ]
    },
    {
      title: 'Premises',
      data: [
        {
          key: '0',
          name: 'Emma Månsson',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6478.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/emma-månsson-b5a190115'
        },
        {
          key: '1',
          name: 'Jackie Berg',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6467.jpg'),
          linkedInUrl: ''
        },
        {
          key: '2',
          name: 'Linnea Hellholm',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6402.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/linnea-hellholm-531b4b140'
        },
        {
          key: '3',
          name: 'Martin Olsson',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6475.jpg'),
          linkedInUrl: ''
        },
        {
          key: '4',
          name: 'Milda Grikainyte',
          role: 'Premises Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6553.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Recruitment',
      data: [
        {
          key: '0',
          name: 'Ebba Rickard',
          role: 'Recruitment Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6526.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/ebba-rickard-92479b159'
        }
      ]
    },
    {
      title: 'Shuttle Service',
      data: [
        {
          key: '0',
          name: 'Lennart Falkman',
          role: 'Shuttle Service Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6517.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Task Force',
      data: [
        {
          key: '0',
          name: 'Otto Reerslev',
          role: 'Task Force Coordinator',
          image: require('../../resources/img/arkadTeam/IMG_6492.jpg'),
          linkedInUrl: ''
        }
      ]
    },
    {
      title: 'Hosts',
      data: [
        {
          key: '0',
          name: 'Hosts',
          role: 'Helps companies at the fair',
          image: require('../../resources/img/arkadTeam/hosts.jpg')
        }
      ]
    }
  ],
  faq: {
    forStudents: [
      {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: '0',
            question: 'Can I get involved in ARKAD 2018 now?',
            answer: 'Unfortunately it is too late to get involved now.'
          },
          {
            key: '1',
            question: 'Do I have to be prepared and bring CV or something similar to the fair?',
            answer:
              'ARKAD is for everyone and you do not have to prepare anything special. However, to get more out of the fair it is always good to know what you are looking for, which companies you are interested in or maybe some questions you want answers to. And if you don’t know any of this, ARKAD is the perfect place to find that out!'
          },
          {
            key: '2',
            question: 'What is Student Session, and how can I apply?',
            answer:
              'Student sessions are a great way to establish contact with a diverse range of companies. Generally, a session consists of a 20-25 minute one-on-one talk with a representative of a company. The topics can range from internships, trainee programs, summer jobs, thesis projects, other forms of employment and much more. It all depends on what the company is looking for and what they are offering. Applications are open until October 19th.'
          },
          {
            key: '3',
            question: 'Where are the Student Sessions taking place?',
            answer:
              'They will be in the E-building. If you are going to have a student session you will receive an email with more detailed information.'
          }
        ]
      },
      {
        key: '1',
        name: 'Events',
        list: [
          {
            key: '0',
            question: 'What events are there, and when are they?',
            answer:
              'You find all the events under “Events” in the menu on the website or in the app'
          },
          {
            key: '1',
            question: 'How do I sign up for the events?',
            answer: 'You can sign up in the app or on the website under “Events”'
          },
          {
            key: '2',
            question: 'How do I know if I have signed up for an event?',
            answer: 'You will get a confirmation sent to the email you used when you registered.'
          },
          {
            key: '3',
            question:
              'I have signed up for an event but I will not be able to attend it, what do I do?',
            answer:
              'Send an email to event.arkad@tlth.se and inform that you will not be able to make it to the event, then your spot goes to someone on the waiting list.'
          }
        ]
      },
      {
        key: '2',
        name: 'During the fair',
        list: [
          {
            key: '0',
            question: 'What else than networking with companies can ARKAD do for me?',
            answer:
              'ARKAD offers something called the Career Room.  The Career Room is a preparatory, inspiring opportunity for individual career coaching. You can ask any working life-related questions. Some examples are questions about job interviews, how to sell yourself and how to negotiate your salary. It’s completely up to you what the visit will be about. In addition to the career coaching, you get a professional CV photo. A visit takes about 15 minutes and can be booked outside the room or on the website. '
          },
          {
            key: '1',
            question:
              'How do I know which companies are interested in me, or which companies I should look for?',
            answer:
              'In the app you can see all the companies and use filters to help you find what you are looking for.'
          },
          {
            key: '2',
            question: 'Which companies will be at ARKAD?',
            answer:
              'You can find all the companies who will attend ARKAD at arkadtlth.se/companies or in the app.'
          },
          {
            key: '3',
            question: 'During what time is the fair open?',
            answer: 'Wednesday 14/11: 10.00-16.00\nThursday 15/11: 10.00 - 15.00'
          },
          {
            key: '4',
            question: 'During what times is the Info Desk open?',
            answer:
              'Tuesday 13/11: 15.00-18.00\nWednesday 14/11: 8.00-16.00\nThursday 15/11: 9.30-15.30'
          },
          {
            key: '5',
            question: 'Who gets to use the wardrobe?',
            answer:
              'The wardrobe is available for all Hosts and company representatives. The wardrobes are located in Kårhuset, Matteannexet and in Studiecentrum. These are open during the days, but we don’t take responsibility for your personal belongings.'
          },
          {
            key: '6',
            question: 'Where is ARKAD?',
            answer:
              'ARKAD is this year taking place in four houses, Matteannexet, Studiecentrum, Kårhuset and the E-building.'
          },
          {
            key: '7',
            question: 'Where is the Info Desk?',
            answer: 'There is one Info Desk in every house where the fair takes place.'
          },
          {
            key: '8',
            question: 'Can I apply for Student Sessions now?',
            answer: 'No, the application closed the 19th October.'
          }
        ]
      },
      {
        key: '3',
        name: 'Banquet',
        list: [
          {
            key: '0',
            question: 'Who gets to go to the Banquet?',
            answer:
              'Representatives from the companies and students involved in ARKAD gets invited to the Banquet.'
          },
          {
            key: '1',
            question: 'Where is the Banquet?',
            answer:
              'The Banquet is at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.'
          },
          {
            key: '2',
            question:
              'Will I as a student have the opportunity to meet and converse with company representatives during the Banquet?',
            answer:
              'Yes. You will be seated next to a company representative during the dinner, and during the mingle and the after party you have time to talk to the companies as well.'
          },
          {
            key: '3',
            question: 'What is a drink voucher?',
            answer:
              'A drink voucher is a voucher you can exchange for a drink. One voucher gives an alcohol free drink, two vouchers a beer/cider/glass of wine and three vouchers a drink or a shot.'
          },
          {
            key: '4',
            question: 'What is the dress code?',
            answer: 'Semi formal (mörk kostym)'
          }
        ]
      },
      {
        key: '4',
        name: 'Other',
        list: [
          {
            key: '0',
            question: 'How many companies are coming to ARKAD?',
            answer:
              'About 190 companies plus startups and other associations. If you want to know which companies are coming go to arkadtlth.se/companies.'
          }
        ]
      }
    ],
    forCompanies: [
      {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: '0',
            question: 'What is included in the Exhibition-package?',
            answer:
              ' - An exhibitor booth of 3x2 meters with a maximum height of 2.3 meters\n- Exposure through our website and mobile applications\n- Access to a Career Fair Host\n- Access to lounge, wardrobe and information desk\n- Breakfast, coffee and refreshments during both days of the fair\n- Lunch tickets to four (4) representatives per day\n- Two (2) tickets to the ARKAD Banquet\n- Two (2) parking tickets per day\n- Access to Wi-fi and electrical outlets\n- Low tables and chairs\n- Free shuttle service in Lund'
          },
          {
            key: '1',
            question:
              'Can we get extra supplies to our exhibitor stand area when we are at the fair?',
            answer: 'We can not guarantee extra supplies beyond what you already have ordered.'
          },
          {
            key: '2',
            question: 'At what times can we mount and prepare our exhibitor stand?',
            answer:
              'Wednesday 14/11 between 8.00 and 9.30 am if you are standing in Kårhuset. If you are in one of the other buildings you have the possibility to do it on Tuesday 13/11 15.00-18.00, or on Wednesday between 8.00 and 9.30 am.'
          },
          {
            key: '3',
            question: 'Can we apply for Student Sessions now?',
            answer: 'No, the last day of the application has already past.'
          },
          {
            key: '4',
            question: 'What is the delivery address?',
            answer:
              'Kårhuset, ARKAD\nSölvegatan 22B\n223 62 Lund\nReference: Cecilia Nordenö\nTelephone: 0763-415256'
          },
          {
            key: '5',
            question: 'At what times is the goods reception open?',
            answer: 'Friday 9/11: 13.00-17.00\nMonday 12/11: 8.00-17.00\nTuesday 13/11: 8.00-17.00'
          },
          {
            key: '6',
            question: 'Why do we have to inform about our representatives?',
            answer:
              'We have to know the names of the representatives who want to have access to the wi-fi and of those who want to go to the Banquet. If some of your representatives only attend the fair during one day, we still need you to fill in their names.'
          },
          {
            key: '7',
            question: 'Who do I contact if I want to know our placement or have other questions?',
            answer:
              'Your Career Fair Host will have all the answers you need. Your Career Fair Host will contact you before the fair.'
          },
          {
            key: '8',
            question: 'How does the shuttle service work?',
            answer:
              'Before 24/10 you can order shuttle service in the application. If you want to order Shuttle service after that, send an email to bilbokning.arkad@tlth.se. During the fair, you can book shuttle service at the info-desk in Matteannexet, but we can not guarantee that it’s always available. We offer to drive or pick up company representatives within Lund for free. We can also pick up or drop off at the airport in Malmö to an extra cost of 200 SEK, one way. The cars leave from the parking lot behind Matteannexet and they have signs which read “Shuttle Service” on them. We do not offer shuttle service to the Banquet.'
          }
        ]
      },
      {
        key: '1',
        name: 'During the fair',
        list: [
          {
            key: '0',
            question: 'Where can we park our car?',
            answer:
              'There will be several parking lots around campus, see the map for the exact positions. If you need extra parking tickets you can buy them at the Info Desks at the fair, the price is 25 SEK. You can also use the machines at the parking.'
          },
          {
            key: '1',
            question: 'During what times is the Info Desk open?',
            answer:
              'Tuesday 13/11: 15.00-18.00\nWednesday 14/11: 8.00-16.00\nThursday 15/11: 9.30-15.30'
          },
          {
            key: '2',
            question: 'Where is the closest lounge?',
            answer:
              'There are lounges in Matteannexet, Studiecentrum and in the E-building. Please see the map for the exact position of the lounges.'
          },
          {
            key: '3',
            question: 'Who do I contact if I have questions during the fair?',
            answer: 'Your Career Fair Host or the Info Desks.'
          },
          {
            key: '4',
            question:
              'Where do we get the envelope with parking tickets, Banquet tickets, wi-fi code etc?',
            answer: 'You get them at the Info desk or from your Career Fair Host.'
          },
          {
            key: '5',
            question: 'Can we buy extra lunch tickets?',
            answer:
              'There are 75 extra lunch tickets, you can buy them at the info-desk but when they are out we can not offer lunch to more people.'
          },
          {
            key: '6',
            question: 'Where is the lunch?',
            answer:
              'The lunch is served at Moroten och Piskan (MoP), a restaurant located on the second floor in Kårhuset. The seating however, will be divided between MoP and Cornelis which is located on the first floor in Kårhuset.'
          },
          {
            key: '7',
            question: 'Where can we get lunch if we don’t have lunch tickets?',
            answer:
              'There are a few lunch-places around campus, for salads you have Grönt & Gott, for pizza or falafel you have Gott & Nära, both of them situated close to Helsingkronatornet. If you want a sandwich or other cold lunches all the houses on campus have their own café where you can buy cheap and nice lunches.'
          },
          {
            key: '8',
            question:
              'Is it ok to have competitions or live demonstrations in our exhibitor stand?',
            answer:
              'Yes, however please keep in mind that you may only use your assigned space and to follow safety precautions.'
          }
        ]
      },
      {
        key: '2',
        name: 'The Banquet',
        list: [
          {
            key: '0',
            question: 'Where is the Banquet?',
            answer:
              'The Banquet is at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.\nParking is available if you would like to go there by car.'
          },
          {
            key: '1',
            question: 'Can we get extra tickets to the Banquet?',
            answer: 'The time for extra tickets has unfortunately expired.'
          },
          {
            key: '2',
            question: 'We have tickets to the Banquet that will not be used, what do we do?',
            answer: 'You can hand these in at the info desks.'
          },
          {
            key: '3',
            question: 'What is a drink voucher?',
            answer:
              'A drink voucher is a voucher you can exchange for a drink. One voucher gives a non-alcoholic drink, two vouchers a beer/cider/glass of wine and three vouchers a drink or a shot.'
          },
          { key: '4', question: 'What is the dress code?', answer: 'Semi formal (mörk kostym)' },
          {
            key: '5',
            question:
              'Will I as exhibitor representative be placed next to the students whose education is strongly connected to my corporate work at the Banquet?',
            answer:
              'We will place students and the exhibitor representatives next to each other so that they make the best of each other’s company. So the student’s education combined with the focus of area of the exhibitor will be taken into account at the placement. This to the extent possible.'
          },
          {
            key: '6',
            question:
              'Will there be an opportunity to meet and converse with students during the Banquet?',
            answer:
              'The Banquet is a chance for the exhibitor representatives to meet ambitious students in a relaxed environment. There will be opportunities for conversation during the mingle, the dinner and after party, which will offer both dance floors and lounge area.'
          }
        ]
      },
      {
        key: '3',
        name: 'Other',
        list: [
          {
            key: '0',
            question: 'What educations are there on LTH?',
            answer:
              'LTH offers a lot of different engineering and architecture educations. For a list of all educations follow the link below http://www.lth.se/utbildning/ .'
          },
          {
            key: '1',
            question: 'When can we send back goods after the fair?',
            answer: 'Thursday 15/11: 15.00-17.00\nFriday 16/11: 8.00-13.00'
          }
        ]
      }
    ]
  }
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default aboutReducer
