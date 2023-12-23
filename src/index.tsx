import React from 'react';
import { createRoot } from 'react-dom/client';

import {NavBar, MyNavMenu} from './NavBar';
import PublicationList from './PubPost';
import ProjectList from './ProjectPost';

interface ContentProps {
  children?: React.ReactNode;
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
        <li className="mb-2"><a href="#bio" className="text-teal-500 hover:underline selection:font-bold">Bio</a></li>
        <li className="mb-2"><a href="#pub" className="text-teal-500 hover:underline">Publication</a></li>
        {/* <li className="mb-2"><a href="#teaching" className="text-teal-500 hover:underline">Teaching</a></li> */}
        <li className="mb-2"><a href="#project" className="text-teal-500 hover:underline">Project</a></li>
        {/* <li className="mb-2"><a href="#contact" className="text-teal-500 hover:underline">Contact</a></li> */}
      </ul>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <div className="my-2">
      <div className="w-full float-left text-gray-500 font-nanum font-light">
        <p>© 2023 Danqi Liao</p>
      </div>
    </div>
  );
}

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