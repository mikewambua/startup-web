import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Micaiah',
      email: 'mike@gmail.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'Sharon',
      email: 'sharry@gmail.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      title: 'Project Management',
      slug: 'project-management',
      category: 'Management',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 100,
      rating: 4.5,
      numReviews: 10,
      content:
        "What is project management? Definition Project management is the application of processes, methods, skills, knowledge and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters. Project management has final deliverables that are constrained to a finite timescale and budget. A key factor that distinguishes project management from just 'management' is that it has this final deliverable and a finite timespan, unlike management which is an ongoing process. Because of this a project professional needs a wide range of skills; often technical skills, and certainly people management skills and good business awareness.",
      description:
        'Business managers should be aware of the entire process of project management. Effective project management skills drive the organization towards success and sustainable business opportunities',
    },
    {
      // _id: '2',
      title: 'Strategic Management in the 21st Century',
      slug: 'strategic-management-in-the-21st-century',
      category: 'Human Resource',
      image: '/images/p2.jpg',
      price: 170,
      countInStock: 20,
      rating: 5.0,
      numReviews: 14,
      content:
        'Strategic management can also be defined as a bundle of decisions and acts which a manager undertakes and which decides the result of the firm’s performance. The manager must have a thorough knowledge and analysis of the general and competitive organizational environment so as to take right decisions.The managers should conduct a SWOT Analysis (Strengths, Weaknesses, Opportunities, and Threats) in order to - make the best possible utilization of strengths, minimize the organizational weaknesses, make use of arising opportunities from the business environment and shouldn’t ignore the threats. Strategic management is nothing but planning for both predictable as well as unfeasible contingencies. It is applicable to both small as well as large organizations as even the smallest organization face competition and, by formulating and implementing appropriate strategies, they can attain sustainable competitive advantage. It is a way in which strategists set the objectives and proceed about attaining them. It deals with making and implementing decisions about future direction of an organization. It helps us to identify the direction in which an organization is moving.',
      description:
        "Agility in management is critical towards achieving a company's goals. The dynamic shifts in the business environment call for business owners and managers to adopt innovative strategies to remain competitive in the ever evolving environment.",
    },
    {
      // _id: '3',
      title: 'Effective Communication for Organizations',
      slug: 'effective-communication-for-organizations',
      category: 'Business',
      image: '/images/p3.jpg',
      price: 70,
      countInStock: 5,
      rating: 4.0,
      numReviews: 18,
      content:
        'Good communication is an essential tool in achieving productivity and maintaining strong working relationships at all levels of an organisation- and this has been particularly important since the Covid-19 outbreak forced many people to work remotely. Employers who invest time and energy into delivering clear lines of communication will rapidly build trust among employees, leading to increases in productivity, output and morale in general. Meanwhile, employees who communicate effectively with colleagues, managers and customers are always valuable assets to an organisation and it is a skill which can often set people apart from their competition when applying for jobs. Poor communication in the workplace will inevitably lead to unmotivated staff that may begin to question their own confidence in their abilities and inevitably in the organisation.',
      description:
        'Communication is key to success of the firm. Effective communication between the employees and the manager creates a conducive workplace environment for driving business growth',
    },
    {
      // _id: '4',
      title: 'Ethical Dilemma',
      slug: 'ethical-dilemma',
      category: 'Psychology',
      image: '/images/p4.jpg',
      price: 130,
      countInStock: 50,
      rating: 4.0,
      numReviews: 40,
      content:
        'Ethical Dilemma Ethics are the moral standards and principles by which entities (individuals and organizations) govern their behaviors and decision-making. When these standards and principles conflict with each other in a decision-making situation, an ethical dilemma may occur. What is an Ethical Dilemma? An ethical dilemma takes place in a decision-making context where any of the available options requires the agent to violate or compromise on their ethical standards. We observe that ethical dilemmas can be characterized by the following three elements:The agent must be faced with a choice or the need to make a decision.The agent must have more than one course of action available. The agent recognizes that all available courses of action require them to compromise on some personally held ethical standard or value. Ethical standards are the moral frameworks that individuals and organizations use to guide their decision-making and differentiate between right and wrong. Companies and professional organizations may adopt their own ethical standards and require that employees/members adopt those standards as part of their personal business ethics.',
      description:
        "Knowing how to act in different scenarios depend on the individuals' ability to cognitively distinguish each action's positive and negative consequences.",
    },
  ],
};
export default data;
