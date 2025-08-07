const description = `The RG Care Foundation, accessible at <a className="link-lower-text" href="${process.env.REACT_APP_BASE_URL}" target="_blank" rel="noopener noreferrer">www.rgcare.in</a>, is a non-governmental organization (NGO) dedicated to improving the lives of underprivileged communities. Our key focus areas include:`;
const missionText = `The foundation operates with a mission to create a positive and lasting impact on society by addressing critical issues and fostering holistic development. For more details about our programs, initiatives, and how to get involved, visit our official website: <a className="link-lower-text" href="${process.env.REACT_APP_BASE_URL}" target="_blank" rel="noopener noreferrer">www.rgcare.in</a>.`;
const about_us_points = [
  {
    id: '01',
    img: '📚',
    title: 'Education',
    Des: 'Providing educational support and resources to children from marginalized backgrounds to ensure they have access to quality learning opportunities',
  },
  {
    id: '02',
    img: '🏥',
    Des: 'Offering medical assistance, health awareness programs, and essential healthcare services to underserved populations to improve overall well-being.​',
    title: 'Healthcare',
  },
  {
    id: '03',
    img: '🔧',
    Des: 'Implementing training programs aimed at empowering individuals with vocational skills, thereby enhancing employment opportunities and promoting economic independence.​',
    title: 'Skill Development',
  },
  {
    id: '04',
    img: '🏡',
    Des: 'Engaging in various initiatives aimed at uplifting communities, including infrastructure development, sanitation projects, and promoting sustainable livelihoods.​.',
    title: 'Community Development',
  },
];

export { description, missionText, about_us_points };
