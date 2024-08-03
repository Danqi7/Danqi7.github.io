import React from 'react';
import { createRoot } from 'react-dom/client';

import {NavBar, MyNavMenu} from './NavBar';

interface ContentProps {
  children?: React.ReactNode;
}


const BioContent: React.FC = () => {
  return (
    <div>
    <div className='my-6 w-full font-nanum' id='bio'>
        <h2 className="text-xl mb-2 inline-block font-semibold">About Danqi
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
      My research interests include <b>geometric learning, manifold learning, and deep learning</b>.
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

function App(): JSX.Element {
  return (
    <div className="flex justify-center h-screen"> 
    <div className="container max-w-4xl mx-auto p-4 flex rounded">
        <MyNavMenu />
        <Content>
          <BioContent />

        </Content>
    </div>
    </div>
  );
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);