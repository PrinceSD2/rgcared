/* Single image */

import Image7 from '../images/image-gallery/image-7.jpg';
import Image9 from '../images/image-gallery/images-9.jpeg';
import Image10 from '../images/image-gallery/images-10.jpeg';
import Image11 from '../images/image-gallery/images-11.png';
import integrity from '../images/image-gallery/integrity.avif';
import empthy from '../images/image-gallery/empthy.jpeg';
import collab from '../images/image-gallery/collab.jpeg';

const Services = [
  {
    id: 1,
    image: Image7,
    icon: 'flaticon-fund',

    title: 'Equality',
    subtitle: '',
    description:
      'We believe in providing every child with an equal opportunity to access education, irrespective of their socio-economic background, caste, religion, or gender.',
    slug: 'about',
  },
  {
    id: 2,
    image: empthy,
    icon: 'flaticon-first-aid-kit',

    title: 'Empathy',
    subtitle: '',
    description:
      'We understand the challenges faced by underprivileged children and are committed to making a meaningful difference in their lives with compassion and understanding.',
    slug: 'about',
  },
  {
    id: 3,
    image: integrity,
    icon: 'flaticon-charity',

    title: 'Integrity',
    subtitle: '',
    description:
      'We uphold the highest standards of transparency, honesty, and accountability in all our operations, ensuring that every contribution is used responsibly for the benefit of the children.',
    slug: 'about',
  },
  {
    id: 4,
    image: Image10,
    icon: 'flaticon-cardiogram',

    title: 'Excellence',
    subtitle: '',
    description:
      'We strive for excellence in our educational programs, continuously working to improve the quality of education, resources, and support we provide to the children.',
    slug: 'about',
  },
  {
    id: 5,
    image: Image9,
    icon: 'flaticon-gift-box',

    title: 'Sustainability',
    subtitle: '',
    description:
      'We are committed to creating long-term impact through sustainable educational solutions, which empower children not just for today, but for their future as well.',
    slug: 'about',
  },
  {
    id: 6,
    image: collab,
    icon: 'flaticon-graduation-cap',

    title: 'Collaboration',
    subtitle: '',
    description:
      'We believe in the power of collaboration and partnerships with communities, schools, donors, and volunteers to create a network of support that maximizes the impact of our work.',
    slug: 'about',
  },
  {
    id: 7,
    image: Image11,
    icon: 'flaticon-charity',

    title: 'Empowerment',
    subtitle: '',
    description:
      'We are dedicated to empowering children, their families, and communities by nurturing skills, encouraging self-confidence, and promoting the importance of lifelong learning.',
    slug: 'about',
  },
];
export default Services;
