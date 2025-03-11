import React from 'react';
import { createRoot } from 'react-dom/client';

const navigation = [
  { name: 'Bio', href: '#', current: true },
  { name: 'Publication', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Teaching', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MyNavMenu: React.FC = () => {
  return (
    <div className="w-1/4 p-4 text-right text-xl font-space-mono">

      {/* <div className="mb-4 mt-4 float-right">
        <img src="./profile-sq.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-lg shadow-sm" />
      </div> */}

      <div className='float-right'>
      <h2 className="text-xl text-gray-400 "><a href='./index.html'>home page of</a></h2>
      <h1 className="text-2xl mb-2 text-teal-500 font-extrabold">Danqi Liao</h1>
      </div>

      <div className='mt-4 float-right font-space-mono'>
      <ul>
        <li className="mb-2"><a href="./index.html" className="text-teal-500 hover:underline">Home</a></li>
        {/* <li className="mb-2"><a href="./about.html" className="text-teal-500 hover:underline selection:font-bold">Bio</a></li> */}
        <li className="mb-2"><a href="./index.html#pub" className="text-teal-500 hover:underline">Publication</a></li>
        <li className="mb-2"><a href="./index.html#project" className="text-teal-500 hover:underline">Project</a></li>
        <li className="mb-2"><a href="#teaching" className="text-teal-500 hover:underline">Teaching</a></li>
        {/* <li className="mb-2"><a href="#contact" className="text-teal-500 hover:underline">Thoughts</a></li> */}
        <li className="mb-2"><a href="./blog.html" className="text-teal-500 hover:underline">Thoughts</a></li>
      </ul>
      </div>

    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-1 rounded-md p-2 pl-3 text-sm leading-6 font-semibold'
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export {NavBar, MyNavMenu};
