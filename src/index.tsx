import React from 'react';
import { createRoot } from 'react-dom/client';

import {NavBar, MyNavMenu} from './NavBar';
import PublicationList from './PubPost';
import ProjectList from './ProjectPost';

interface iconProps {
  className?: string;
  ariaHidden?: boolean;
}

const footer_navigations = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/DanqiLiao73090',
    icon: (props: iconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Danqi7/',
    icon: (props:iconProps) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footer_navigations.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 font-nanum font-bold">
            &copy; 2023 Danqi Liao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const PubContent: React.FC = () => {
  return (
    <div>
    <div className='my-6 w-full' id='pub'>
        <h2 className="text-xl mb-2 inline-block font-nanum font-semibold">Publications
        <span className='block bg-slate-300 border-l-0 border-r-0 h-1 mt-1'>{""}</span>
        </h2>
        <div className='my-6 w-full text-base font-nanum'>
          <ul>
            <li>Sentence Embeddings using Supervised Contrastive Learning</li>
            <li>Selective Feature Aggregation for Single Frame Supervised Temporal Action Localization</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const ProjectContent: React.FC = () => {
  return (
    <div>
    <div className='my-6 w-full' id='project'>
        <h2 className="text-xl mb-2 inline-block font-nanum font-semibold">Project
        <span className='block bg-slate-300 border-l-0 border-r-0 h-1 mt-1'>{""}</span>
        </h2>
        <div className='my-6 w-full text-base font-nanum'>
          <ul>
            <li>Peer to Peer Proxy Network</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const TeachingContent: React.FC = () => {
  return (
    <div>
    <div className='my-6 w-full font-inter font-medium' id='teaching'>
        <h2 className="text-xl mb-2 inline-block font-nanum font-semibold">Teaching (as TA/Head TA)
        <span className='block bg-slate-300 border-l-0 border-r-0 h-1 my-1'>{""}</span>
        </h2>
        <div className='my-6 w-full text-base font-nanum'>
          <li>
            <b>COS429: Computer Vision</b>, Princeton University, Fall 21
          </li>
          <li>
            <b>COS326: Functional Programming</b>, Princeton University, Fall 20
          </li>
          <li>
            <b>EECS324 Operating System</b>, Northwestern University, Spring 18
          </li>
          <li>
            <b>EECS321 Programing Language</b>, Northwestern University, Fall 17
          </li>
          <li>
            <b>COS324: Advanced Programming Technique</b>, Princeton University, Spring 22
          </li>
          <li>
            <b>COS226: Data Structures & Algorithms</b>, Princeton University, Spring 20
          </li>
        </div>
      </div>
    </div>
  )
}

const BioContent: React.FC = () => {
  return (
    <div>
    <div className='my-6 w-full font-nanum' id='bio'>
        <h2 className="text-xl mb-2 inline-block font-semibold">About Danqi,
        <span className='block bg-slate-200 border-l-0 border-r-0 h-1 my-1'>{""}</span>
        </h2>
      </div>

      <div className='my-6 w-full text-lg font-nanum'>
      <p>
      I am currently a Ph.D. student in the Computer Science department at Yale University, advised by
      <a href='https://krishnaswamylab.org' className=" hover:underline hover:font-semibold hover:bg-blue-500"> Prof. Smita Krishnaswamy</a>.
      </p>
      <br />
      <p>
      My research interests include <b>geometric, manifold learning, and deep learning</b>.
      Specifically, I am interested in studying the characteristics that make <b>expressive and 
      generalizable embeddings</b> and developing efficient and principled methods to achieve 
      such representations. I am also interested in <b>ML/AI for biosciences discovery</b>.
      </p>
      <br />
      <p>
      I graduated Magna Cum Laude from Northwestern University and obtained my master's degree from Princeton University. 
      While at Princeton, I worked on computer perception and video recognition 
      in <a href='https://visualai.princeton.edu' className="hover:underline hover:font-semibold hover:bg-orange-500">Prof. Olga Russakovsky's</a> lab. 
      </p>
      <br />
      <p>Before Princeton, I worked as a software engineer at Meta for two years. </p>
      </div>
    </div>
  )
}

interface ContentProps {
  children?: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({children}) => {
  return (
    <div className="w-3/4 p-4 ml-4 ">
      {children}
    </div>
  );
}

const NavMenu: React.FC = () => {
  return (
    <div className="w-1/4 p-4 text-right text-xl font-nanum">

      <div className="mb-4 mt-4 float-right">
        <img src="./profile-sq.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-lg shadow-sm" />
      </div>

      <div className='float-right'>
      <h2 className="text-xl text-gray-400 ">home page of</h2>
      <h1 className="text-2xl mb-2 text-teal-500 font-extrabold">Danqi Liao</h1>
      </div>

      <div className='mt-4 float-right font-nanum'>
      <ul>
        <li className="mb-2"><a href="index.html#bio" className="text-teal-500 hover:underline selection:font-bold">Bio</a></li>
        <li className="mb-2"><a href="index.html#pub" className="text-teal-500 hover:underline">Publication</a></li>
        {/* <li className="mb-2"><a href="#teaching" className="text-teal-500 hover:underline">Teaching</a></li> */}
        <li className="mb-2"><a href="index.html#project" className="text-teal-500 hover:underline">Project</a></li>
        {/* <li className="mb-2"><a href="#contact" className="text-teal-500 hover:underline">Contact</a></li> */}
      </ul>
      </div>
    </div>
  );
}

// const Footer: React.FC = () => {
//   return (
//     <div className="my-2">
//       <div className="w-full float-left text-gray-500 font-nanum font-light">
//         <p>© 2023 Danqi Liao</p>
//       </div>
//     </div>
//   );
// }

function App(): JSX.Element {
  return (
    <div className="flex justify-center h-screen"> 
    <div className="container max-w-4xl mx-auto p-4 flex rounded mb-10">
        {/* <NavMenu /> */}
        {/* <NavBar /> */}
        <MyNavMenu />
        <Content>
          <BioContent />
          {/* <PubContent /> */}
          <PublicationList />
          {/* <ProjectContent /> */}
          <ProjectList />
          <TeachingContent />
          <Footer />
        </Content>
    </div>
    </div>
  );
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);