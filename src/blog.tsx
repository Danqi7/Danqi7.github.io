import React from 'react';
import { createRoot } from 'react-dom/client';

import { MyNavMenu } from './NavBar';
import './input.css';
const posts = [
    {
      id: 1,
      title: 'My Poems',
      href: 'blog_poems.html',
      description:
        'Poems and Code',
      date: 'Nov 16, 2023',
      datetime: '2023-11-16',
      category: { title: 'Poetry', href: '#' },
    },
    // More posts...
  ]
  
const BlogList: React.FC = () => {
    return (
        <div className='w-full font-helvetica mt-6 mb-12' id='bio'>
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 mb-10 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>

                </article>
              ))}
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

function App(): JSX.Element {
    return (
        <div className="flex justify-center h-screen"> 
        <div className="container max-w-4xl mx-auto p-4 flex rounded mb-10">
        <MyNavMenu />
        <Content>
            <BlogList />
        </Content>
        </div>
        </div>
    )
};
  
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);