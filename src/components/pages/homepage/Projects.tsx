'use client';
import { useMemo, useState } from 'react';
import styles from '@/components/pages/homepage/homepage.module.css';

type ProjectType = {
  _id: number;
  name: string;
  description: string;
  image: string;
};

export default function Projects() {
  const projects = useMemo<ProjectType[]>(createProjects, []);
  const [showProject, setShowProject] = useState(projects[0]);

  return (
    <>
      <section className="relative h-[700px]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `url("${showProject.image}") center/cover no-repeat`,
          }}
        >
          <div className="w-full h-full bg-black/70"></div>
          <p className="w-[60%] absolute bottom-10 right-10 text-white drop-shadow-md shadow-gray-700 font-[500] text-[24px] ">
            {showProject.description}
          </p>
        </div>
        <div className="flex flex-col gap-5 text-[30px] font-[600] text-gray-300 relative z-20 py-20 px-5">
          <h4
            className="mb-5 text-[36px]"
            style={{ textShadow: '3px 3px hsl(var(--primary))' }}
          >
            Projects
          </h4>
          {projects.map((item, i) => (
            <h5
              key={i}
              onMouseEnter={() => setShowProject(item)}
              className={
                'transition-all duration-300 max-w-full ' +
                styles.prName +
                (item._id === showProject._id
                  ? ' text-white text-[36px] ' + styles.activePrName
                  : '')
              }
            >
              {item.name}
            </h5>
          ))}
        </div>
      </section>
    </>
  );
}

const createProjects = (): ProjectType[] => [
  {
    _id: 1,
    name: 'E-commerce Website',
    description:
      'An e-commerce website designed to provide users with a seamless shopping experience. Features include product browsing, search functionality, user authentication, cart management, and secure checkout.',
    image: 'https://picsum.photos/id/11/800/1200',
  },
  {
    _id: 2,
    name: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing the skills, projects, and achievements of an individual or a company. Includes sections for about me, portfolio showcase, resume/CV, and contact information.',
    image: 'https://picsum.photos/id/12/800/1200',
  },
  {
    _id: 3,
    name: 'Blog Website',
    description:
      'A blog website allowing users to publish, read, and interact with articles on various topics. Features include user authentication, article creation, editing, and commenting functionalities.',
    image: 'https://picsum.photos/id/13/800/1200',
  },
  {
    _id: 4,
    name: 'Social Media Platform',
    description:
      'A social media platform connecting users worldwide, facilitating communication, content sharing, and networking. Includes features such as user profiles, news feeds, likes, comments, and messaging.',
    image: 'https://picsum.photos/id/14/800/1200',
  },
  {
    _id: 5,
    name: 'Online Learning Platform',
    description:
      'An online learning platform providing courses on various subjects. Features include course browsing, enrollment, progress tracking, quizzes, assignments, and certification upon completion.',
    image: 'https://picsum.photos/id/15/800/1200',
  },
  {
    _id: 6,
    name: 'Booking System',
    description:
      'A booking system allowing users to schedule appointments, reservations, or bookings for services, events, or resources. Includes features such as availability checking, booking management, and notifications.',
    image: 'https://picsum.photos/id/16/800/1200',
  },
  {
    _id: 7,
    name: 'Real Estate Website',
    description:
      'A real estate website listing properties for sale, rent, or lease. Features include property search, filtering, detailed listings, maps, contact forms, and agent profiles.',
    image: 'https://picsum.photos/id/17/800/1200',
  },
];
