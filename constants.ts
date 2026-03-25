
import { Course, FacultyType, NewsItem, EventItem, Faculty } from './types';

export const FACULTIES: Faculty[] = [
  {
    id: 'science-agriculture',
    name: FacultyType.SCIENCE_AGRICULTURE,
    description: 'The Faculty of Science, Engineering and Agriculture is dedicated to excellence in teaching, research and community engagement in the fields of natural sciences, engineering and agricultural sciences.',
    dean: {
      name: 'Prof. Natasha Potgieter',
      title: 'Executive Dean',
      bio: 'Prof. Potgieter is a renowned researcher in water and health, with extensive experience in environmental microbiology.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-science.jpg',
      contact: {
        email: 'natasha.potgieter@univen.ac.za',
        phone: '+27 15 962 8000',
        office: 'Science Building, Block D, Room 12'
      }
    },
    departments: [
      {
        id: 'biological-sciences',
        name: 'Biological Sciences',
        about: 'The Department of Biological Sciences offers a range of programs focusing on the study of living organisms and their interactions with the environment, including botany, zoology, and microbiology.',
        contact: {
          email: 'biology@univen.ac.za',
          phone: '+27 15 962 8011',
          office: 'Science Building, Block B, Room 22'
        },
        programmes: [
          { name: 'Bachelor of Science in Biological Sciences', level: 'Undergraduate', duration: '3 Years' },
          { name: 'Bachelor of Science Honours in Botany', level: 'Postgraduate', duration: '1 Year' },
          { name: 'Master of Science in Microbiology', level: 'Postgraduate', duration: '2 Years' }
        ],
        modules: [
          { code: 'BIO111', name: 'Introduction to Biology', credits: 12 },
          { code: 'BIO121', name: 'Cell Biology', credits: 12 },
          { code: 'BOT211', name: 'Plant Anatomy', credits: 16 },
          { code: 'ZOO221', name: 'Animal Physiology', credits: 16 }
        ],
        shortCourses: ['Basic Laboratory Techniques', 'Environmental Impact Assessment', 'Microbial Water Quality Testing'],
        staff: [
          { name: 'Dr. Sarah Mulaudzi', role: 'Head of Department', email: 'sarah.mulaudzi@univen.ac.za' },
          { name: 'Prof. James Smith', role: 'Professor', email: 'james.smith@univen.ac.za' },
          { name: 'Dr. L. Netshikweta', role: 'Senior Lecturer', email: 'l.netshikweta@univen.ac.za' },
          { name: 'Ms. T. Ramabulana', role: 'Lecturer', email: 't.ramabulana@univen.ac.za' }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        about: 'The Department of Chemistry is committed to excellence in chemical education and research, preparing students for careers in industry, academia, and research.',
        contact: {
          email: 'chemistry@univen.ac.za',
          phone: '+27 15 962 8012',
          office: 'Science Building, Block C, Room 15'
        },
        programmes: [
          { name: 'Bachelor of Science in Chemistry', level: 'Undergraduate', duration: '3 Years' },
          { name: 'Bachelor of Science Honours in Chemistry', level: 'Postgraduate', duration: '1 Year' }
        ],
        modules: [
          { code: 'CHE111', name: 'General Chemistry I', credits: 12 },
          { code: 'CHE121', name: 'General Chemistry II', credits: 12 },
          { code: 'ORG211', name: 'Organic Chemistry I', credits: 16 }
        ],
        shortCourses: ['Chemical Safety', 'Analytical Instrumentation'],
        staff: [
          { name: 'Dr. Robert Khoza', role: 'Head of Department', email: 'robert.khoza@univen.ac.za' },
          { name: 'Prof. A. M. Gericke', role: 'Professor', email: 'am.gericke@univen.ac.za' },
          { name: 'Dr. S. S. Mnyakeni-Moleele', role: 'Senior Lecturer', email: 'ss.mnyakeni@univen.ac.za' },
          { name: 'Mr. M. J. Madzivhandila', role: 'Lecturer', email: 'mj.madzivhandila@univen.ac.za' }
        ]
      },
      {
        id: 'physics',
        name: 'Physics',
        about: 'The Department of Physics provides a solid foundation in physical principles and their applications in technology and research.',
        contact: {
          email: 'physics@univen.ac.za',
          phone: '+27 15 962 8013',
          office: 'Science Building, Block A, Room 10'
        },
        programmes: [
          { name: 'Bachelor of Science in Physics', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'PHY111', name: 'Mechanics and Properties of Matter', credits: 12 },
          { code: 'PHY121', name: 'Electricity and Magnetism', credits: 12 }
        ],
        shortCourses: ['Renewable Energy Systems', 'Radiation Protection'],
        staff: [
          { name: 'Prof. T. S. Mulaudzi', role: 'Head of Department', email: 'ts.mulaudzi@univen.ac.za' },
          { name: 'Dr. N. E. Maluta', role: 'Senior Lecturer', email: 'ne.maluta@univen.ac.za' },
          { name: 'Dr. J. N. Edokpayi', role: 'Senior Lecturer', email: 'jn.edokpayi@univen.ac.za' },
          { name: 'Mr. M. S. Nemangwele', role: 'Lecturer', email: 'ms.nemangwele@univen.ac.za' }
        ]
      },
      {
        id: 'computer-science',
        name: 'Computer Science and Information Systems',
        about: 'The Department of Computer Science and Information Systems prepares students for the rapidly evolving digital world through rigorous training in software development, data science, and networking.',
        contact: {
          email: 'csis@univen.ac.za',
          phone: '+27 15 962 8014',
          office: 'Science Building, Block E, Room 5'
        },
        programmes: [
          { name: 'Bachelor of Science in Computer Science', level: 'Undergraduate', duration: '3 Years' },
          { name: 'Bachelor of Science in Information Systems', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'CSC111', name: 'Introduction to Programming', credits: 12 },
          { code: 'CSC121', name: 'Data Structures and Algorithms', credits: 12 },
          { code: 'INF211', name: 'Database Systems', credits: 16 }
        ],
        shortCourses: ['Web Development Bootcamp', 'Cybersecurity Essentials', 'Data Analytics with Python'],
        staff: [
          { name: 'Dr. M. Mphephu', role: 'Head of Department', email: 'm.mphephu@univen.ac.za' },
          { name: 'Prof. O. S. Adeola', role: 'Professor', email: 'os.adeola@univen.ac.za' },
          { name: 'Dr. B. Moyo', role: 'Senior Lecturer', email: 'b.moyo@univen.ac.za' },
          { name: 'Ms. N. P. Netshidzivhe', role: 'Lecturer', email: 'np.netshidzivhe@univen.ac.za' }
        ]
      },
      {
        id: 'mathematics',
        name: 'Mathematics and Applied Mathematics',
        about: 'The Department of Mathematics and Applied Mathematics provides high-quality mathematical education and research, supporting various disciplines across the university.',
        contact: {
          email: 'maths@univen.ac.za',
          phone: '+27 15 962 8015',
          office: 'Science Building, Block F, Room 2'
        },
        programmes: [
          { name: 'Bachelor of Science in Mathematics', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'MAT111', name: 'Calculus I', credits: 12 },
          { code: 'MAT121', name: 'Linear Algebra I', credits: 12 }
        ],
        shortCourses: ['Mathematical Modeling', 'Statistical Analysis for Research'],
        staff: [
          { name: 'Prof. S. Moyo', role: 'Head of Department', email: 's.moyo@univen.ac.za' },
          { name: 'Dr. A. J. M. Silaibi', role: 'Senior Lecturer', email: 'ajm.silaibi@univen.ac.za' },
          { name: 'Dr. J. C. Ndogmo', role: 'Senior Lecturer', email: 'jc.ndogmo@univen.ac.za' },
          { name: 'Mr. T. J. Mphephu', role: 'Lecturer', email: 'tj.mphephu@univen.ac.za' }
        ]
      },
      {
        id: 'earth-sciences',
        name: 'Earth Sciences',
        about: 'The Department of Earth Sciences focuses on the study of the Earth, including geology, mining, and environmental geology.',
        contact: {
          email: 'earth@univen.ac.za',
          phone: '+27 15 962 8016',
          office: 'Science Building, Block G, Room 1'
        },
        programmes: [
          { name: 'Bachelor of Science in Geology', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'GLG111', name: 'Introduction to Geology', credits: 12 },
          { code: 'GLG211', name: 'Mineralogy', credits: 16 }
        ],
        shortCourses: ['GIS for Earth Sciences', 'Mining Safety'],
        staff: [
          { name: 'Dr. F. Amponsah-Dacosta', role: 'Head of Department', email: 'f.amponsah@univen.ac.za' },
          { name: 'Prof. J. S. Ogola', role: 'Professor', email: 'js.ogola@univen.ac.za' },
          { name: 'Dr. N. S. Mpanza', role: 'Senior Lecturer', email: 'ns.mpanza@univen.ac.za' },
          { name: 'Mr. M. R. Phala', role: 'Lecturer', email: 'mr.phala@univen.ac.za' }
        ]
      }
    ],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/9.png'
  },
  {
    id: 'health-sciences',
    name: FacultyType.HEALTH_SCIENCES,
    description: 'The Faculty of Health Sciences aims to produce competent health professionals who can address the health needs of the community through innovative teaching and research.',
    dean: {
      name: 'Prof. Tshilidzi Mulaudzi',
      title: 'Executive Dean',
      bio: 'Prof. Mulaudzi is a specialist in nursing science and community health, dedicated to improving healthcare delivery in rural areas.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-health.jpg',
      contact: {
        email: 'tshilidzi.mulaudzi@univen.ac.za',
        phone: '+27 15 962 8100',
        office: 'Health Sciences Building, Room 205'
      }
    },
    departments: [
      {
        id: 'nursing',
        name: 'Nursing',
        about: 'The Department of Nursing Science is dedicated to providing high-quality nursing education and training, focusing on clinical excellence and compassionate care.',
        contact: {
          email: 'nursing@univen.ac.za',
          phone: '+27 15 962 8111',
          office: 'Health Sciences Building, Room 101'
        },
        programmes: [
          { name: 'Bachelor of Nursing Science', level: 'Undergraduate', duration: '4 Years' },
          { name: 'Master of Nursing Science', level: 'Postgraduate', duration: '2 Years' }
        ],
        modules: [
          { code: 'NUR111', name: 'Fundamentals of Nursing', credits: 16 },
          { code: 'NUR121', name: 'Anatomy and Physiology for Nurses', credits: 16 }
        ],
        shortCourses: ['First Aid Level 1', 'Wound Care Management', 'Palliative Care'],
        staff: [
          { name: 'Prof. Mary Ndlovu', role: 'Head of Department', email: 'mary.ndlovu@univen.ac.za' },
          { name: 'Dr. Julia Langanani Mafumo', role: 'Senior Lecturer', email: 'julia.mafumo@univen.ac.za' },
          { name: 'Ms. T. G. Tshitangano', role: 'Lecturer', email: 'tg.tshitangano@univen.ac.za' },
          { name: 'Mr. M. J. Netshikweta', role: 'Lecturer', email: 'mj.netshikweta@univen.ac.za' }
        ]
      },
      {
        id: 'public-health',
        name: 'Public Health',
        about: 'The Department of Public Health focuses on population-based health promotion, disease prevention, and health systems management.',
        contact: {
          email: 'publichealth@univen.ac.za',
          phone: '+27 15 962 8112',
          office: 'Health Sciences Building, Room 105'
        },
        programmes: [
          { name: 'Bachelor of Public Health', level: 'Undergraduate', duration: '3 Years' },
          { name: 'Master of Public Health (MPH)', level: 'Postgraduate', duration: '2 Years' }
        ],
        modules: [
          { code: 'PBH111', name: 'Introduction to Public Health', credits: 12 },
          { code: 'PBH211', name: 'Epidemiology', credits: 16 }
        ],
        shortCourses: ['Health Promotion in Communities', 'Epidemiological Surveillance'],
        staff: [
          { name: 'Dr. S. G. Asihel', role: 'Head of Department', email: 'sg.asihel@univen.ac.za' },
          { name: 'Prof. V. O. Netshikweta', role: 'Professor', email: 'vo.netshikweta@univen.ac.za' },
          { name: 'Dr. J. T. Mabunda', role: 'Senior Lecturer', email: 'jt.mabunda@univen.ac.za' },
          { name: 'Ms. H. N. Shilubane', role: 'Lecturer', email: 'hn.shilubane@univen.ac.za' }
        ]
      },
      {
        id: 'psychology',
        name: 'Psychology',
        about: 'The Department of Psychology offers programs that explore human behavior and mental processes, preparing students for careers in counseling, research, and human resources.',
        contact: {
          email: 'psychology@univen.ac.za',
          phone: '+27 15 962 8113',
          office: 'Health Sciences Building, Room 210'
        },
        programmes: [
          { name: 'Bachelor of Psychology', level: 'Undergraduate', duration: '4 Years' },
          { name: 'Bachelor of Arts Honours in Psychology', level: 'Postgraduate', duration: '1 Year' }
        ],
        modules: [
          { code: 'PSY111', name: 'General Psychology', credits: 12 },
          { code: 'PSY211', name: 'Developmental Psychology', credits: 16 }
        ],
        shortCourses: ['Basic Counseling Skills', 'Stress Management'],
        staff: [
          { name: 'Dr. P. Mudau', role: 'Head of Department', email: 'p.mudau@univen.ac.za' },
          { name: 'Prof. T. S. Mashau', role: 'Professor', email: 'ts.mashau@univen.ac.za' },
          { name: 'Dr. M. P. Mulaudzi', role: 'Senior Lecturer', email: 'mp.mulaudzi@univen.ac.za' },
          { name: 'Ms. N. V. Sepeng', role: 'Lecturer', email: 'nv.sepeng@univen.ac.za' }
        ]
      },
      {
        id: 'nutrition',
        name: 'Nutrition',
        about: 'The Department of Nutrition focuses on the science of food and its impact on human health, preparing students for careers in dietetics and community nutrition.',
        contact: {
          email: 'nutrition@univen.ac.za',
          phone: '+27 15 962 8114',
          office: 'Health Sciences Building, Room 215'
        },
        programmes: [
          { name: 'Bachelor of Science in Nutrition', level: 'Undergraduate', duration: '4 Years' }
        ],
        modules: [
          { code: 'NUT111', name: 'Introduction to Human Nutrition', credits: 12 },
          { code: 'NUT211', name: 'Community Nutrition', credits: 16 }
        ],
        shortCourses: ['Healthy Eating for Families', 'Nutrition in Sports'],
        staff: [
          { name: 'Dr. X. G. Mbhenyane', role: 'Head of Department', email: 'xg.mbhenyane@univen.ac.za' },
          { name: 'Prof. N. J. Ramakuela', role: 'Professor', email: 'nj.ramakuela@univen.ac.za' },
          { name: 'Dr. T. J. Mashau', role: 'Senior Lecturer', email: 'tj.mashau@univen.ac.za' },
          { name: 'Ms. S. E. Mushaphi', role: 'Lecturer', email: 'se.mushaphi@univen.ac.za' }
        ]
      }
    ],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/10.png'
  },
  {
    id: 'management-law',
    name: FacultyType.MANAGEMENT_LAW,
    description: 'The Faculty of Management, Commerce and Law provides high-quality education in business, economics, and legal studies, preparing students for leadership roles in various sectors.',
    dean: {
      name: 'Prof. Joseph Francis',
      title: 'Executive Dean',
      bio: 'Prof. Francis is an expert in rural development and management, with a focus on sustainable livelihoods and economic growth.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-management.jpg',
      contact: {
        email: 'joseph.francis@univen.ac.za',
        phone: '+27 15 962 8200',
        office: 'Management Building, Block A, Room 5'
      }
    },
    departments: [
      {
        id: 'accounting',
        name: 'Accounting',
        about: 'The Department of Accounting provides professional education in accounting, auditing, and taxation, accredited by major professional bodies.',
        contact: {
          email: 'accounting@univen.ac.za',
          phone: '+27 15 962 8211',
          office: 'Management Building, Block B, Room 10'
        },
        programmes: [
          { name: 'Bachelor of Commerce in Accounting', level: 'Undergraduate', duration: '3 Years' },
          { name: 'Bachelor of Commerce Honours in Accounting', level: 'Postgraduate', duration: '1 Year' }
        ],
        modules: [
          { code: 'ACC111', name: 'Financial Accounting I', credits: 16 },
          { code: 'AUD211', name: 'Auditing I', credits: 16 }
        ],
        shortCourses: ['Basic Bookkeeping', 'Taxation for Small Businesses', 'Financial Literacy'],
        staff: [
          { name: 'Dr. David Mabunda', role: 'Head of Department', email: 'david.mabunda@univen.ac.za' },
          { name: 'Prof. K. A. Olaokun', role: 'Professor', email: 'ka.olaokun@univen.ac.za' },
          { name: 'Dr. S. K. M. Kabanda', role: 'Senior Lecturer', email: 'skm.kabanda@univen.ac.za' },
          { name: 'Mr. M. J. Netshiswinzhe', role: 'Lecturer', email: 'mj.netshiswinzhe@univen.ac.za' }
        ]
      },
      {
        id: 'business-management',
        name: 'Business Management',
        about: 'The Department of Business Management focuses on developing entrepreneurial and managerial skills for the modern business environment.',
        contact: {
          email: 'business@univen.ac.za',
          phone: '+27 15 962 8212',
          office: 'Management Building, Block C, Room 12'
        },
        programmes: [
          { name: 'Bachelor of Commerce in Business Management', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'BUS111', name: 'Introduction to Business Management', credits: 12 },
          { code: 'MKT211', name: 'Marketing Management', credits: 16 }
        ],
        shortCourses: ['Entrepreneurship Skills', 'Project Management'],
        staff: [
          { name: 'Prof. J. J. Dhliwayo', role: 'Head of Department', email: 'jj.dhliwayo@univen.ac.za' },
          { name: 'Dr. T. K. S. Letsoalo', role: 'Senior Lecturer', email: 'tks.letsoalo@univen.ac.za' },
          { name: 'Dr. M. S. Radzilani', role: 'Senior Lecturer', email: 'ms.radzilani@univen.ac.za' },
          { name: 'Ms. N. R. Rammutla', role: 'Lecturer', email: 'nr.rammutla@univen.ac.za' }
        ]
      },
      {
        id: 'law',
        name: 'Law',
        about: 'The Department of Law offers a comprehensive legal education, preparing students for various roles in the legal profession, including advocates, attorneys, and legal advisors.',
        contact: {
          email: 'law@univen.ac.za',
          phone: '+27 15 962 8213',
          office: 'Law Building, Room 102'
        },
        programmes: [
          { name: 'Bachelor of Laws (LLB)', level: 'Undergraduate', duration: '4 Years' },
          { name: 'Master of Laws (LLM)', level: 'Postgraduate', duration: '2 Years' }
        ],
        modules: [
          { code: 'LAW111', name: 'Introduction to Law', credits: 12 },
          { code: 'CON211', name: 'Constitutional Law', credits: 16 },
          { code: 'CRI311', name: 'Criminal Law', credits: 16 }
        ],
        shortCourses: ['Legal Ethics', 'Alternative Dispute Resolution'],
        staff: [
          { name: 'Prof. A. K. Dombo', role: 'Head of Department', email: 'ak.dombo@univen.ac.za' },
          { name: 'Dr. N. B. Ndlovu', role: 'Senior Lecturer', email: 'nb.ndlovu@univen.ac.za' },
          { name: 'Dr. T. V. Warinda', role: 'Senior Lecturer', email: 'tv.warinda@univen.ac.za' },
          { name: 'Mr. L. S. Mulaudzi', role: 'Lecturer', email: 'ls.mulaudzi@univen.ac.za' }
        ]
      },
      {
        id: 'economics',
        name: 'Economics',
        about: 'The Department of Economics provides a deep understanding of economic theories and their applications in policy-making and business.',
        contact: {
          email: 'economics@univen.ac.za',
          phone: '+27 15 962 8214',
          office: 'Management Building, Block D, Room 4'
        },
        programmes: [
          { name: 'Bachelor of Commerce in Economics', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'ECO111', name: 'Microeconomics I', credits: 12 },
          { code: 'ECO121', name: 'Macroeconomics I', credits: 12 }
        ],
        shortCourses: ['Economic Policy Analysis', 'Financial Markets for Beginners'],
        staff: [
          { name: 'Dr. S. K. M. Kabanda', role: 'Head of Department', email: 'skm.kabanda@univen.ac.za' },
          { name: 'Prof. J. Francis', role: 'Professor', email: 'j.francis@univen.ac.za' },
          { name: 'Dr. T. K. S. Letsoalo', role: 'Senior Lecturer', email: 'tks.letsoalo@univen.ac.za' },
          { name: 'Mr. M. J. Netshiswinzhe', role: 'Lecturer', email: 'mj.netshiswinzhe@univen.ac.za' }
        ]
      },
      {
        id: 'public-management',
        name: 'Public Management',
        about: 'The Department of Public Management prepares students for leadership roles in the public sector, focusing on governance, policy, and administration.',
        contact: {
          email: 'publicman@univen.ac.za',
          phone: '+27 15 962 8215',
          office: 'Management Building, Block E, Room 8'
        },
        programmes: [
          { name: 'Bachelor of Administration in Public Management', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'PUB111', name: 'Introduction to Public Administration', credits: 12 },
          { code: 'PUB211', name: 'Public Policy Studies', credits: 16 }
        ],
        shortCourses: ['Local Government Management', 'Public Sector Ethics'],
        staff: [
          { name: 'Prof. N. K. Nkuna', role: 'Head of Department', email: 'nk.nkuna@univen.ac.za' },
          { name: 'Dr. M. S. Radzilani', role: 'Senior Lecturer', email: 'ms.radzilani@univen.ac.za' },
          { name: 'Dr. T. V. Warinda', role: 'Senior Lecturer', email: 'tv.warinda@univen.ac.za' },
          { name: 'Ms. N. R. Rammutla', role: 'Lecturer', email: 'nr.rammutla@univen.ac.za' }
        ]
      }
    ],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/14.png'
  },
  {
    id: 'humanities',
    name: FacultyType.HUMANITIES,
    description: 'The Faculty of Humanities, Social Sciences and Education is a vibrant hub for critical thinking, artistic expression, and social research, fostering a deep understanding of human society.',
    dean: {
      name: 'Prof. Bongani Maponya',
      title: 'Executive Dean',
      bio: 'Prof. Maponya is a scholar in social sciences and education, committed to transformative pedagogy and social justice.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-humanities.jpg',
      contact: {
        email: 'bongani.maponya@univen.ac.za',
        phone: '+27 15 962 8300',
        office: 'Humanities Building, Room 112'
      }
    },
    departments: [
      {
        id: 'education',
        name: 'Education',
        about: 'The Department of Education is committed to producing high-quality teachers and educational leaders through innovative teaching and practical experience.',
        contact: {
          email: 'education@univen.ac.za',
          phone: '+27 15 962 8311',
          office: 'Humanities Building, Room 201'
        },
        programmes: [
          { name: 'Bachelor of Education in Foundation Phase', level: 'Undergraduate', duration: '4 Years' },
          { name: 'Bachelor of Education in Senior Phase and FET', level: 'Undergraduate', duration: '4 Years' }
        ],
        modules: [
          { code: 'EDU111', name: 'Introduction to Education', credits: 12 },
          { code: 'PSY121', name: 'Educational Psychology', credits: 12 }
        ],
        shortCourses: ['Inclusive Education', 'Educational Leadership', 'Digital Literacy for Teachers'],
        staff: [
          { name: 'Prof. John Maluleke', role: 'Head of Department', email: 'john.maluleke@univen.ac.za' },
          { name: 'Dr. S. N. Mulaudzi', role: 'Senior Lecturer', email: 'sn.mulaudzi@univen.ac.za' },
          { name: 'Dr. T. S. Mashau', role: 'Senior Lecturer', email: 'ts.mashau@univen.ac.za' },
          { name: 'Ms. N. V. Sepeng', role: 'Lecturer', email: 'nv.sepeng@univen.ac.za' }
        ]
      },
      {
        id: 'media-studies',
        name: 'Media Studies',
        about: 'The Department of Media Studies prepares students for careers in journalism, broadcasting, public relations, and digital media.',
        contact: {
          email: 'media@univen.ac.za',
          phone: '+27 15 962 8312',
          office: 'Humanities Building, Room 105'
        },
        programmes: [
          { name: 'Bachelor of Arts in Media Studies', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'MED111', name: 'Introduction to Mass Communication', credits: 12 },
          { code: 'JOU211', name: 'News Reporting', credits: 16 }
        ],
        shortCourses: ['Digital Photography', 'Video Editing', 'Social Media Management'],
        staff: [
          { name: 'Dr. T. Netshisaulu', role: 'Head of Department', email: 't.netshisaulu@univen.ac.za' },
          { name: 'Prof. M. J. Mafela', role: 'Professor', email: 'mj.mafela@univen.ac.za' },
          { name: 'Dr. L. Nemutandani', role: 'Senior Lecturer', email: 'l.nemutandani@univen.ac.za' },
          { name: 'Mr. M. J. Netshikweta', role: 'Lecturer', email: 'mj.netshikweta@univen.ac.za' }
        ]
      },
      {
        id: 'social-work',
        name: 'Social Work',
        about: 'The Department of Social Work focuses on social justice, human rights, and the empowerment of individuals and communities.',
        contact: {
          email: 'socialwork@univen.ac.za',
          phone: '+27 15 962 8313',
          office: 'Humanities Building, Room 302'
        },
        programmes: [
          { name: 'Bachelor of Social Work', level: 'Undergraduate', duration: '4 Years' }
        ],
        modules: [
          { code: 'SWK111', name: 'Introduction to Social Work', credits: 12 },
          { code: 'SWK211', name: 'Social Work Theory', credits: 16 }
        ],
        shortCourses: ['Child Protection', 'Community Development'],
        staff: [
          { name: 'Prof. L. Nemutandani', role: 'Head of Department', email: 'l.nemutandani@univen.ac.za' },
          { name: 'Dr. M. J. Mafela', role: 'Senior Lecturer', email: 'mj.mafela@univen.ac.za' },
          { name: 'Dr. T. Netshisaulu', role: 'Senior Lecturer', email: 't.netshisaulu@univen.ac.za' },
          { name: 'Ms. T. G. Tshitangano', role: 'Lecturer', email: 'tg.tshitangano@univen.ac.za' }
        ]
      },
      {
        id: 'languages',
        name: 'Languages and Communication',
        about: 'The Department of Languages and Communication offers programs in various languages and communication studies, fostering linguistic diversity and effective communication.',
        contact: {
          email: 'languages@univen.ac.za',
          phone: '+27 15 962 8314',
          office: 'Humanities Building, Room 405'
        },
        programmes: [
          { name: 'Bachelor of Arts in Languages', level: 'Undergraduate', duration: '3 Years' }
        ],
        modules: [
          { code: 'ENG111', name: 'English Communication Skills', credits: 12 },
          { code: 'AFR111', name: 'Afrikaans for Communication', credits: 12 }
        ],
        shortCourses: ['Business Writing', 'Public Speaking', 'Translation and Interpreting'],
        staff: [
          { name: 'Dr. M. J. Mafela', role: 'Head of Department', email: 'mj.mafela@univen.ac.za' },
          { name: 'Prof. L. Nemutandani', role: 'Professor', email: 'l.nemutandani@univen.ac.za' },
          { name: 'Dr. T. Netshisaulu', role: 'Senior Lecturer', email: 't.netshisaulu@univen.ac.za' },
          { name: 'Mr. M. J. Netshikweta', role: 'Lecturer', email: 'mj.netshikweta@univen.ac.za' }
        ]
      }
    ],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/03/Humanities.jpg'
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Bachelor of Commerce in Accounting',
    faculty: FacultyType.MANAGEMENT_LAW,
    duration: '3 Years',
    description: 'Prepare for a global career in finance and professional accounting with this SAICA-accredited program.',
    apsScore: 26
  },
  {
    id: '2',
    name: 'Bachelor of Science in Agriculture',
    faculty: FacultyType.SCIENCE_AGRICULTURE,
    duration: '4 Years',
    description: 'Focus on sustainable farming, animal science, and crop production in the South African context.',
    apsScore: 24
  },
  {
    id: '3',
    name: 'Bachelor of Arts in Media Studies',
    faculty: FacultyType.HUMANITIES,
    duration: '3 Years',
    description: 'Master the tools of digital journalism, broadcasting, and strategic communication for a modern world.',
    apsScore: 22
  },
  {
    id: '4',
    name: 'Bachelor of Nursing Science',
    faculty: FacultyType.HEALTH_SCIENCES,
    duration: '4 Years',
    description: 'A comprehensive professional degree focusing on nursing education, leadership, and clinical practice.',
    apsScore: 30
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    category: 'Academics',
    title: 'UNIVEN Celebrates 2026 Autumn Graduation Ceremony',
    description: 'The university successfully conferred degrees to over 3,000 graduates this season across various faculties...',
    date: 'March 10, 2026',
    imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/2.png'
  },
  {
    id: 'n2',
    category: 'Research',
    title: 'Groundbreaking Research in Sustainable Agriculture',
    description: 'Our Faculty of Science has published a new study focused on drought-resistant crop cultivation techniques...',
    date: 'March 08, 2026',
    imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/5.png'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    day: '15',
    month: 'APR',
    title: '2026 Faculty Research Symposium',
    time: '09:00 AM - 04:00 PM',
    location: 'Main Campus',
    type: 'in-person'
  },
  {
    id: 'e2',
    day: '22',
    month: 'OCT',
    title: 'Virtual Open Day for Postgrads',
    time: 'Zoom Webinar',
    location: 'Online',
    type: 'virtual'
  },
  {
    id: 'e3',
    day: '05',
    month: 'NOV',
    title: 'Alumni Homecoming Weekend',
    time: 'Main Campus',
    location: 'Thohoyandou',
    type: 'in-person'
  }
];
