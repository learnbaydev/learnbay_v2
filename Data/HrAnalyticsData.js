import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export const HRCourseData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "1:1 Doubt Session",
        para: "Talk to an expert & receive real-time solutions to your queries",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "Guaranteed Interview Calls",
        para: "Boost your job prospects with referrals from 300+ hiring partners",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png",
        height: "50",
        width: "53",
        heading: "IBM Project Certificate",
        para: "Grab opportunities with a portfolio & make a smooth career transition",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png",
        height: "40",
        width: "40",
        heading: "For HR professionals",
        para: "Boost your growth & earnings with in-demand people analytics skills",
      },
    ],
    testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "Working at HCL",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
        statLogo: "140% Hike",
      },
      {
        id: "tcs",
        name: "Mohammad Israr",
        working: "Working at TCS",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png",
        sDesc:
          "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job...",
        lDesc:
          "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 400% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TCS.png",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Ritish Kumar",
        working: "Working at Capgemini",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png",
        sDesc:
          "I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay...",
        lDesc:
          "I always had a dilemma about how to switch to  IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. All Thanks to Learnbay!",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Sourabh Mourya",
        working: "Working at HCL",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png",
        sDesc:
          "Flexible classes have helped me to manage my job  schedule. Learning Data Science directly from MNC experts provided the chance ...",
        lDesc:
          "Flexible classes have helped me to manage my job schedule. Learning Data Science directly from  experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent  platform that enhanced my professional growth. Thank you very much! Learnbay.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
        statLogo: " 150% Hike",
      },
      {
        id: 6,
        name: "Abhishek Singh",
        working: "Working at AGS",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png",
        sDesc:
          "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
        lDesc:
          "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png",
        statLogo: "  132% Hike",
      },
      {
        id: 7,
        name: "Vishal",
        working: "Working at Bridge i2i",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png",
        sDesc:
          "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
        lDesc:
          "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png",
        statLogo: "  127% Hike",
      },
      {
        id: "math",
        name: "Aravind Kumar",
        working: "SA - Data Scientist",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png",
        statLogo: "142% Hike",
      },
    ],
    thirdSection: [
      {
        id: 1,
        icon: <MdOutlineCastForEducation className={styles.bIcon} />,
        heading: "Education",
        para: "Bachelor's degree with good academic performance",
      },
      {
        id: 1,
        icon: <MdOutlineWorkOutline className={styles.oIcon} />,
        heading: "Work experience",
        para: "Minimum 1 year of IT/Non-IT work experience",
      },
      {
        id: 1,
        icon: <FaUserGraduate className={styles.oIcon} />,
        heading: "Career stage",
        para: "Mid-career professionals interested in HR analytics",
      },
      {
        id: 1,
        icon: <GiStairsGoal className={styles.bIcon} />,
        heading: "Aspirations",
        para: "Preparing for future leadership role in HR domain",
      },
    ],
    fourthSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png",
        desc: "Get 1 year of job & placement support",
      },
      {
        id: 2,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png",
        desc: "Get 3 mock interviews with industry leaders",
      },
      {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png",
        desc: "Resume build up session",
      },
      {
        id: 4,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png",
        desc: "Get 5-8 interview calls",
      },
    ],
    domainSection: [
      {
        id: 1,
        p1: "#1",
        p2: "BFSI",
        btn: "Download Brochure",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "Designed for executive-level BFSI professionals, accountant, etc.",
          "Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
        ],
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
        TitleCourse: "BFSI (Banking, Finance, Services and Insurance) Domain",
      },
      {
        id: 2,
        p1: "#2",
        p2: "Manufacturing",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For production manager, quality control inspector, manufacturing engineer etc.",
          "Discover cutting-edge tech like AI and data science, and develop strategic skills as a business or data analyst",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
        TitleCourse: "Manufacturing, Mechanical and Telecom Domain",
      },

      {
        id: 3,
        p1: "#3",
        p2: "Energy, Oil and Gas",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For petroleum engineers, environmental specialists, operation managers etc.",
          "Master your data analysis skills and create a dynamic dashboard to describe your insights",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf",
        TitleCourse: "Energy, Oil and Gas Domain",
      },

      {
        id: 4,
        p1: "#4",
        p2: "Healthcare",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For pharmacists, therapists, health administrators, etc.",
          "Achieve success in a competitive market by utilizing advanced tools and methodology to leverage technology and gain a competitive edge",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
        TitleCourse: "Healthcare, Pharma and Clinical Research Domain",
      },

      {
        id: 5,
        p1: "#5",
        p2: "Supply Chain, E-Commerce & Retail",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "Learn Supply Chain, E-Commerce & Retail analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf",
        TitleCourse: "Retail, Ecommerce and Supply Chain Domain",
      },
    ],
    project: [
      {
        id: 1,
        domain: "Workforce Planning at GE",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/ge.png",
        SDesc:
          " E uses predictive analytics to forecast future talent needs and identify gaps in their workforce.....",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "HR Domain",
        Title: "Workforce Planning at GE",
        LDesc:
          "E uses predictive analytics to forecast future talent needs and identify gaps in their workforce. By analyzing HR data such as employee demographics...",
      },
      {
        id: 2,
        domain: "Management at Deloitte",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/deloite.png",
        SDesc:
          "Deloitte uses a data-driven approach to performance management....",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "HR Domain",
        Title: "Performance Management at Deloitte",
        LDesc:
          "Deloitte uses a data-driven approach to performance management. The company utilizes analytics to measure employee performance, provide feedback, and identify areas for improvement. Tools and Techniques used: Performance metrics, Feedback analysis, Continuous performance management.",
      },
      {
        id: 3,
        domain: "Diversity and Inclusion at Google",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/google.png",
        SDesc:
          "Google uses analytics to monitor and improve diversity and inclusion within the company.....",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "HR Domain",
        Title: "Diversity and Inclusion at Google",
        LDesc:
          "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills.",
      },
      {
        id: "BMW",
        domain: "Compensation Analytics at Netflix",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/netflix.png",
        SDesc:
          "Netflix uses analytics to determine employee compensation  packages......",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "HR Domain",
        Title: "Compensation Analytics at Netflix",
        LDesc:
          "Netflix uses analytics to determine employee compensation packages. By analyzing HR data such as market benchmarks, employee performance, and tenure, Netflix can offer compensation packages that are competitive and fair. Tools and Techniques used: Compensation analysis, Market benchmarking, Performance analysis.",
      },
      {
        id: 5,
        domain: "Succession Planning at AT&T",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/at%26t.png",
        SDesc:
          "AT&T uses analytics to identify high-potential employees and develop them for future leadership roles...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "HR Domain",
        Title: "Succession Planning at AT&T",
        LDesc:
          "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.",
      },
      {
        id: 6,
        domain: "Risk Management",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/JP.png",
        SDesc:
          "Develop a risk management system that uses predictive analytics to identify and assess risks in the financial sector.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Risk Management",
        Title:
          "Recommendation system with customer lifetime value analysis (CLV)",
        LDesc:
          "Develop a risk management system that uses predictive analytics to identify and assess risks in the financial sector. Tools used: SAS, Tableau. Company: JPMorgan Chase.",
      },
      {
        id: 7,
        domain: "Fraud Detection",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/american.png",
        SDesc:
          "Develop a fraud detection system that uses machine learning algorithms......",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title: "Fraud Detection",
        ProjectTitle: "HR Domain",

        LDesc:
          "Develop a fraud detection system that uses machine learning algorithms to identify potential fraud in financial transactions.",
      },
    ],
    Certificate: {
      twoCertificate: [
        {
          id: 1,
          img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Certificate-blue.png",
          title: "Course Completion Certificate from IBM",
          para: [
            "Complete your training with the internationally recognized certificate",
            "Validate your Data Science and AI skills with IBM Course Completion Certificate",
            "Get acknowledged in IT sector by adding IBM Certificate to your profile",
          ],
        },
        {
          id: 2,
          img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Microsoft-certificate-data.png",
          title: "Certification in Collaboration with Microsoft",
          para: [
            "Industry-certified Microsoft certificates",
            "Gain expertise & get recognized worldwide",
            "Boost job opportunities and earnings with Microsoft’s certification",
          ],
        },
      ],
    },
    syllabusDesc:
      "Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All sessions are covered practically with real-time industrial projects and case studies.",
    popupHead: "Download Hr Analytics Brochure",
    syllabus: [
      {
        Module0: {
          title: "Module 1 :- Human Resource Management",
          content: [
            {
              chap: {
                title:
                  "Introduction to Strategic Human Resource Management using Data Analytics",
                desc: [
                  "Data analytics in SHRM involves using statistical and analytical methods to analyze data related to HR functions such as recruitment, retention, training and development, compensation, and performance management.",
                  "Fundamentals of Data Analytics",
                  "Understanding organizational development based on analytics",
                  "Strategies of HR leadership in a data driven way",
                  "The digitized people management process",
                  "Importance of data analytics in people management",
                ],
              },
            },
            {
              chap: {
                title: "Overview of Domains",
                desc: [
                  "Introduction to Marketing, BFSI, and Sales domains",
                  "Importance of analytics in these domains",
                  "Tools and techniques for process automation",
                  "Current trends and challenges in these domains",
                  "Case studies: This section includes case studies from various industries and domains to illustrate the application of business analytics in real-world scenarios.",
                ],
              },
            },
          ],
          id: 5,
          open: true,
        },
      },
      {
        Module0: {
          title: "Term 1:- Excel",
          content: [
            {
              chap: {
                title: "Topic 1 :- Basic Excel Functions ",
                desc: [
                  "Creating a New Workbook",
                  "Navigating in Excel",
                  "Moving the Cell Pointer",
                  "Using Excel Menus",
                ],
              },
            },

            {
              chap: {
                title: "Topic 2 :- Formatting Worksheets",
                desc: [
                  "Creating Headers, Footers, and Page",
                  "Numbers",
                  "Adjusting Page Margins and Orientation",
                  "Adding Print Titles and Gridlines, rows to repeat at top of each page",
                  "Formatting Fonts & Values Adjusting Row Height and Column Width",
                  "Changing Cell Alignment Adding Borders                  ",
                  "Protecting a Workbook",
                  "Hiding Columns, Rows, and Sheets",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Data Analysis and Pivot Tables",
                desc: [
                  "Data Analysis & Pivot Tables",
                  "Creating a PivotTable",
                  "Specifying the Data a PivotTable Analyzes",
                  "Changing a PivotTable's Calculation",
                  "Grouping Dates in a PivotTable",
                ],
              },
            },

            {
              chap: {
                title: "Topic 4 :- Automation with Macros",
                desc: [
                  "Automating Tasks with Macros",
                  "Recording a Macro",
                  "Playing a Macro and Assigning a Macro Shortcut Key",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Editing and Managing Cell Data",
                desc: [
                  "Entering Date Values and using AutoComplete                  ",
                  "Editing, Clearing, and Replacing Cell Contents",
                  "Cutting, Copying, and Pasting Cells Moving and Copying Cells with Drag and Drop",
                  "Collecting and Pasting Multiple Items Using the Paste Special Command Inserting and Deleting Cells, Rows, and Columns ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Basic Formulas and Functions",
                desc: [
                  "Creating a Basic Formula",
                  "Calculating Value Totals with AutoSum",
                  "Editing & Copying Formulas                  ",
                  "Formulas with Several Operators and Cell Ranges",
                ],
              },
            },
            {
              chap: {
                title: "Topic 7 :- Advanced Functions",
                desc: [
                  "Working with the Forms Menu",
                  "Sorting, Subtotaling & Filtering Data",
                  "Copy & Paste Filtered Records",
                  "Using Data Validation",
                ],
              },
            },
            {
              chap: {
                title: "Topic 8 :- Creating Charts",
                desc: [
                  "Creating & Working with Charts",
                  "Creating a Chart",
                  "Moving and Resizing a Chart",
                  "Formatting and Editing Objects in a Chart",
                  "Changing a Chart's Source Data",
                ],
              },
            },
            {
              chap: {
                title: "CASE STUDY :- 1. HR Efficiency Analysis:",
                desc: [
                  "This case study involved the use of advanced Excel and VBA to analyze a company’s HR data. The goal of the analysis was to identify any areas in which the company was losing money due to inefficient HR practices. ",
                ],
              },
            },
            {
              chap: {
                title: "CASE STUDY :- 2. Employee Performance Analysis",
                desc: [
                  "This case study involves the use of advanced Excel and VBA to analyze a company’s employee performance. The goal of the analysis was to identify employees who were underperforming and to identify areas in their job performance that were lacking.",
                ],
              },
            },
          ],
          id: 0,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 2 :- Applied business statistics:",
          content: [
            {
              chap: {
                title: "Topic 1 :- R programming fundamentals:",
                desc: [
                  "Data types in R",
                  "Functions and arguments",
                  "Manipulating Data",
                  "Data transformation with R - the Dplyr package",
                  "Building a histogram, bar chart, box and whiskers plot with ggplot2",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Statistics",
                desc: [
                  "Variables (quantitative, categorical, discrete, continuous)                  ",
                  "Population, sample, sample size",
                  "Strings, Decisions & Loop Control",
                  "Data visualization basics and Python code (histogram, bar chart, frequency distribution)                  ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Descriptive Statistics:",
                desc: [
                  "Measures of central tendency (mean, median, mode) ",
                  "Measures of dispersion (SD, variance, range, IQR)",
                  "Symmetricity/shape measures (skewness, kurtosis)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Sampling Techniques:",
                desc: [
                  "Probabilistic & non-probabilistic ",
                  "sampling",
                  "Simple random, systematic, cluster, stratified, convenience, quota, snowball, judgement                  ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Probability:",
                desc: [
                  "Random experiments and events (mutually exclusive, joint, dependent, independent)                  ",
                  "Probability rules",
                  "Bayes' theorem ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Inferential Statistics:",
                desc: [
                  "Introduction to inferential statistics Sampling techniques (probabilistic and non-probabilistic) ",
                  "Probability rules",
                  "Bayes' theorem ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 7 :- Hypothesis testing: ",
                desc: [
                  "Definition, need, significance level, null and alternative hypothesis.                  ",
                  "One/two-tailed tests, critical value, rejection region, Type I/II errors",
                  "Advanced tests (F distribution, chi-square, ANOVA)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 8 :- Experimental Design: ",
                desc: [
                  "Types of experiments",
                  "Randomized designs",
                  "Matched-pair and Block designs",
                ],
              },
            },
            {
              chap: {
                title: "Topic 9 :- Multivariate Analysis: ",
                desc: [
                  "Principal Component Analysis (PCA)                  ",
                  "Factor Analysis                  ",
                  "Cluster Analysis",
                ],
              },
            },
            {
              chap: {
                title: "Topic 10 :- Time Series Analysis:",
                desc: [
                  "Stationarity and Autocorrelation ",
                  "Forecasting methods                  ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 11 :- Bayesian Statistics:",
                desc: [
                  "Bayesian inference",
                  "Posterior distribution",
                  "Bayesian hierarchical models",
                ],
              },
            },
            {
              chap: {
                title: "Topic 12 :- Linear Algebra:",
                desc: [
                  "Vectors (plotting, norm, addition, scalar multiplication, dot product, projection)",
                  "Matrices (indexing, types, addition, multiplication, transpose, determinant, trace)",
                ],
              },
            },
            {
              chap: {
                title: "CASE STUDY :- 1. Performance Review Analysis",
                desc: [
                  "Performance review analysis is an important application of statistics in HR analytics. This technique is used to evaluate the performance of employees by using a variety of metrics such as attendance, work efficiency, customer feedback, and productivity. Statistical analysis of these metrics helps to identify areas of improvement and track progress over time.",
                ],
              },
            },
            {
              chap: {
                title: "CASE STUDY :- 2. Salary Analysis",
                desc: [
                  "Salary analysis is another important application of statistics in HR analytics. This technique is used to analyze the salaries of employees in different roles, departments, and levels. Statistical analysis of salary data helps to identify discrepancies in salary and devise strategies to ensure fairness and equity in compensation.",
                ],
              },
            },
          ],
          id: 1,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 3 :- Data Science and Artificial Intelligence",
          content: [
            {
              chap: {
                title: "Topic 1 :- Introduction to Data Science and AI:",
                desc: [
                  "Definition, history, and applications.                  ",
                  "Key components of Data Science and AI (data, algorithms, computing power).",
                  "Popular programming languages (Python, R) and development tools (Jupyter Notebook, Spyder).",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Machine Learning Fundamentals:",
                desc: [
                  "Supervised, unsupervised, and reinforcement learning.",
                  "Bias-variance tradeoff, overfitting, and underfitting.",
                  "Model selection and evaluation metrics (accuracy, precision, recall, F1 score, ROC curve, AUC).",
                  "Hyperparameter tuning and model optimization techniques.",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Natural Language Processing (NLP):",
                desc: [
                  "Text processing techniques (tokenization, stemming, lemmatization).",
                  "Sentiment analysis, document classification, and information retrieval",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Advanced NLP Techniques:",
                desc: [
                  "Named Entity Recognition (NER), ",
                  "Topic Modeling, Text Generation.",
                  "Pre-trained language models (BERT, GPT, XLNet) and Transfer Learning in NLP.",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :-Popular ML Libraries:",
                desc: [
                  "scikit-learn, XGBoost, LightGBM, TensorFlow, Keras, PyTorch. ",
                  "Model optimization techniques (Grid search, Random search, Bayesian optimization).",
                ],
              },
            },
            {
              chap: {
                title: "Case Study :- Image Classification",
                desc: [
                  "Develop an AI model that can accurately classify images into different categories. Use popular datasets like MNIST or CIFAR-10 and a machine learning library like TensorFlow or PyTorch.",
                ],
              },
            },
            {
              chap: {
                title: "Case Study :- Sentiment Analysis",
                desc: [
                  "Develop an AI model that can classify text into positive, negative, or neutral sentiment. Use popular datasets like IMDb or Twitter sentiment analysis dataset and a machine learning library like scikit-learn or Keras.",
                ],
              },
            },
            {
              chap: {
                title:
                  "Case Study :- Decision Tree Analysis for Employee Management",
                desc: [
                  "Use decision trees to identify the best course of action for a given situation, such as whether to terminate an employee or provide additional training.",
                ],
              },
            },
            {
              chap: {
                title: "Case Study :- Chatbot",
                desc: [
                  "Build an AI-powered chatbot that can communicate with users and respond to their queries in a natural language. You can use a natural language processing library like NLTK or SpaCy and a conversational AI platform like Dialogflow or Rasa.",
                ],
              },
            },
            {
              chap: {
                title:
                  "Case Study :- Employee Outcome Prediction and Optimization",
                desc: [
                  "Predict employee outcomes such as performance, turnover, or job satisfaction, optimize employee scheduling or to develop more effective training programs.",
                ],
              },
            },
          ],
          id: 2,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 4 :- Data Visualization using Tableau",
          content: [
            {
              chap: {
                title: "Topic 1 :- Introduction to Tableau",
                desc: [
                  "Overview of Tableau and its key features",
                  "Introduction to data visualization concepts and techniques",
                  "Understanding the Tableau interface and its main components",
                  "JSON Data & CRUD",
                  "Programming with SQL",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Connecting to Data Sources",
                desc: [
                  "Connecting to different data sources and importing data into Tableau",
                  "Working with different data types and formats",
                  "Cleaning and transforming data in Tableau",
                ],
              },
            },

            {
              chap: {
                title:
                  "Topic 3 :- Creating basic visualizations using Tableau, including: ",
                desc: [
                  "Bar chart",
                  "Line chart",
                  "Scatter plot",
                  "Heat map",
                  "Different chart types and features in Tableau, such as",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Visual Analytics in Tableau",
                desc: [
                  "Understanding visual analytics concepts and techniques",
                  "Sorting and grouping data in Tableau",
                  "Using sets and set actions in Tableau",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Forecasting and Clustering in Tableau",
                desc: [
                  "Using forecasting and clustering techniques in Tableau                  ",
                  "Creating calculated columns and using them in visualizations, such as",
                  "Histograms",
                  "Using Tableau's trend lines to analyze data",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Dashboard and Stories in Tableau",
                desc: [
                  "Creating interactive dashboards in Tableau",
                  "Using sheets and objects to design effective dashboards",
                  "Adding filters, legends, and quick filters to dashboards",
                  "Creating stories in Tableau to present data in a narrative format",
                ],
              },
            },
            {
              chap: {
                title: "Topic 7 :- Mapping in Tableau",
                desc: [
                  "Using Tableau's mapping capabilities to visualize data on maps",
                  "Using sheets and objects to design effective dashboards",
                  "Creating custom geocoding in Tableau",
                  "WMS and background images for maps",
                ],
              },
            },
            {
              chap: {
                title:
                  "Case Study :- Generating reports on employee performance using Tableau",
                desc: [
                  "Tableau can be used to generate reports on employee performance by creating visualizations using data from performance reviews or evaluation forms. These visualizations can be used to compare performance against company goals, identify areas of improvement, and track progress over time.",
                ],
              },
            },
          ],
          id: 3,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 5 :- Business Intelligence Tool: PowerBI",
          content: [
            {
              chap: {
                title: "Topic 1 :- Introduction to Power BI",
                desc: [
                  "What is Power BI and why use it?",
                  "Getting familiar with the Power BI interface",
                  "Understanding data sources and connections",
                ],
              },
            },
            {
              chap: {
                title:
                  "Topic 2 :- Data Transformation and Modeling                ",
                desc: [
                  "Importing and cleaning data",
                  "Transforming data with Power Query Editor",
                  "Creating calculated columns and measures",
                  "Creating relationships between tables",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Data Visualization and Exploration",
                desc: [
                  "Creating basic charts (bar, line, pie, etc.)",
                  "Enhancing visualizations with formatting and design",
                  "Using interactive features (filters, slicers, drill down/up)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Advanced Analytics with DAX",
                desc: [
                  "Understanding DAX formulas and functions",
                  "Creating complex calculations and expressions",
                  "Using time intelligence functions",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Power BI Service and Collaboration",
                desc: [
                  "Publishing reports to the Power BI service",
                  "Sharing and collaborating with others",
                  "Using Power BI mobile app",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Power BI Integration with other tools",
                desc: [
                  "Integrating Power BI with Excel Using Power BI with SharePoint and Teams",
                  "Connecting to other data sources (Azure, SQL Server, etc.)",
                ],
              },
            },
            {
              chap: {
                title:
                  "Case Study :- Generating reports on recruitment trends using PowerBi:",
                desc: [
                  "PowerBI can be used to generate reports on recruitment trends by creating visualizations using data from job postings or recruitment processes. These visualizations can be used to compare recruitment efforts against company goals, identify areas of improvement, and track progress over time.",
                ],
              },
            },
          ],
          id: 4,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 6 :- Deployment (AWS+Azure)",
          content: [
            {
              chap: {
                title:
                  "Module 1 :- Introduction to AWS and Azure Machine Learning Services:",
                desc: [
                  "Overview of AWS SageMaker and Azure Machine Learning",
                  "Key features and benefits of using these platforms",
                  "Understanding different types of machine learning algorithms and use cases",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Setting up the Environment:",
                desc: [
                  "Creating AWS and Azure accounts",
                  "Configuring the required tools and SDKs (e.g. AWS CLI, Azure CLI, Azure PowerShell)",
                  "Understanding the infrastructure requirements for training and deploying models (e.g. EC2 instances, GPU instances, Azure ML Compute)",
                ],
              },
            },
            {
              chap: {
                title: "Module 3 :- Data Preparation and Feature Engineering:",
                desc: [
                  "Understanding the data requirements for machine learning models (e.g. structured vs unstructured data, data size, data quality)",
                  "Data cleaning and preprocessing techniques (e.g. missing value imputation, feature scaling, encoding categorical variables)",
                  "Feature selection and engineering techniques (e.g. PCA, feature importance)",
                ],
              },
            },
            {
              chap: {
                title: "Module 4 :- Model Training and Evaluation:",
                desc: [
                  "Choosing the right machine learning algorithm and model (e.g. regression, classification, clustering)",
                  "Training models using AWS SageMaker and Azure Machine Learning (e.g. using built-in algorithms, custom code)",
                  "Evaluating model performance and tuning hyperparameters (e.g. cross-validation, hyperparameter optimization)",
                ],
              },
            },
            {
              chap: {
                title: "Module 5 :- Model Deployment and Management:",
                desc: [
                  "Deploying trained models on AWS SageMaker and Azure Machine Learning (e.g. creating endpoints, batch inference)",
                  "Monitoring model performance and managing versions (e.g. model drift, A/B testing)",
                  "Integration with other services and applications (e.g. AWS Lambda, Azure Functions)",
                ],
              },
            },
            {
              chap: {
                title:
                  "Module 6 :- Advanced Topics in Machine Learning on AWS and Azure:",
                desc: [
                  "Deep learning techniques and architectures (e.g. neural networks, convolutional neural networks, recurrent neural networks)",
                  "Natural Language Processing (NLP) use cases (e.g. text classification, sentiment analysis, language translation)",
                  "Understanding the costs and pricing models for machine learning on AWS and Azure (e.g. instance pricing, storage pricing, model deployment pricing)",
                ],
              },
            },
          ],
          id: 6,
          open: false,
        },
      },
    ],
    faq: [
      {
        id: 0,
        sectionName: "Course Related",
        data: [
          {
            id: 0,
            ques: "What are the prerequisites for the HR Program?",
            ans: "There are no prerequisites for this HR certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
            open: true,
          },
          {
            id: 1,
            ques: "What if I miss a few classes due to an emergency?",
            ans: "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a Flexi Subscription in the HR Program?",
            ans: `Those who enroll for HR live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of the HR Program?",
            ans: `The duration of this HR Course is about 6 months (180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on weekdays and weekend batches.
              Weekday batch – 5 months, Monday to Friday – 2 hours/day,
              Weekend batch – 6.5 months, Saturday & Sunday – 3.5 hours/day.`,
            open: false,
          },
          {
            id: 4,
            ques: "What is the mode of HR training at Learnbay?",
            ans: "We provide both classroom and online HR training modes. Based on your requirement, you can choose your preferred mode.",
            open: false,
          },
          {
            id: 5,
            ques: "How can I opt for a Hybrid mode of learning?",
            ans: "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions.",
            open: false,
          },
        ],
      },
      {
        id: 1,
        sectionName: "Domain Electives",
        data: [
          {
            id: 0,
            ques: "What is domain specialization?",
            ans: "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices.",
            open: true,
          },
          {
            id: 1,
            ques: "What are the available elective domain options?",
            ans: "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc.",
            open: false,
          },
          {
            id: 2,
            ques: "Which domain elective is best suited for me?",
            ans: `You can select your domain based on your prior work experience, academics, and career goals.`,
            open: false,
          },
          {
            id: 3,
            ques: "Why is domain specialization important?",
            ans: "After enrolling in the AI and ML with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge which is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset’s attributes. Furthermore, the model will be more observable in a real-world situation.",
            open: false,
          },
          {
            id: 4,
            ques: "Can I select multiple domain electives and do I need to pay extra charges?",
            ans: "You can select up to 4 domain electives based on your interest and career goals. No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum.",
            open: false,
          },
          {
            id: 5,
            ques: "What if I don’t have any prior experience in any domain?",
            ans: "If you don’t have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects.",
            open: false,
          },
          {
            id: 6,
            ques: "Can I change my domain electives later?",
            ans: "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration.",
            open: false,
          },
        ],
      },
      {
        id: 2,
        sectionName: "Payments and Scholarships",
        data: [
          {
            id: 0,
            ques: "What is the total fee for the HR Program?",
            ans: "We offer industry-specific full-stack HR modules, via which you learn the respective industry’s best practices.The total program fee for the HR Program is INR 89,000 + 18% GST.",
            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for INR 89,000 + 18% GST ?",
            ans: "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 8,752/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: "Is there any scholarship/discount available for the HR Program? What is Group Discount?",
            ans: `Learnbay offers a 15 – 20% scholarship for early birds occasionally.
              Please check our websites or contact our sales team to know more about the applicable discounts.
              
              Group Discount :
              Group Discount is applicable only if you’re joining with your friends.
              5% extra discount: Group of 2,
              8% extra discount: Group of 3,
              Max 10% discount: Group of 4+.`,
            open: false,
          },
          {
            id: 3,
            ques: "What is the refund policy for the HR Program at Learnbay?",
            ans: "Candidates are advised to read  ",
            linkText1: "Learnbay’s Refund/Cancellation Policy",
            link1: "/refund-cancellation-policy",
            ansAfter: " before enrolling in the program.",
            link: true,

            open: false,
          },
        ],
      },
      {
        id: 3,
        sectionName: "Capstone and Real-Time Projects",
        data: [
          {
            id: 0,
            ques: "How many real-time projects/case studies will be there?",
            ans: "We have a set of 8 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc.",
            linkText1: " Click here to download the list of the projects.",
            link1:
              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf",
            link: true,

            open: true,
          },
          {
            id: 1,
            ques: "How will the project be executed?",
            ans: "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance.",
            open: false,
          },
        ],
      },

      {
        id: 5,
        sectionName: "Job Assistance",
        data: [
          {
            id: 0,
            ques: "What’s the eligibility for a job assistance program at Learnbay?",

            ans: `You should have completed the course with :
              A minimum score of 70% in assessments.
              Should have completed the assignments and case studies.
              Worked and successfully completed the minimum recommended number of real-time projects.`,
            open: true,
          },
          {
            id: 1,
            ques: "How many interview calls will I get at Learnbay?",
            ans: "You’ll be provided 5 interview calls after the completion of the course.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a job-readiness program?",
            ans: `Job-readiness program helps you prepare for interviews which include:
              Resume preparation sessions,
              Preparing projects for a strong portfolio,
              Interview guidance and prep sessions,
              1:1 Mock interviews based on targeted companies and roles.`,
            open: false,
          },
          {
            id: 3,
            ques: "Will I get job referrals at Learnbay?",
            ans: "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies.",
            open: false,
          },
        ],
      },
      {
        id: 6,
        sectionName: "Mentorship",
        data: [
          {
            id: 0,
            ques: "Until when will the students get the facility of mentorship?",

            ans: "Our mentors will provide data science training to the students until the completion of the course.",
            open: true,
          },
          {
            id: 1,
            ques: "Can a Learnbay student choose to study from their desired mentor?",
            ans: "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors.",
            open: false,
          },
        ],
      },
      {
        id: 7,
        sectionName: "Support",
        data: [
          {
            id: 0,
            ques: "When is the job assistance provided at Learnbay and how long will I get it?",

            ans: "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company.",
            open: true,
          },
          {
            id: 1,
            ques: "How long will I get Job referrals?",
            ans: "You’ll be provided with job assistance after the completion of the course for a period of 1 year.",
            open: false,
          },
        ],
      },
    ],
  },
];
