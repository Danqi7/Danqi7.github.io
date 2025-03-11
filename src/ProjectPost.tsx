import React from 'react';

interface ProjectCardProps {
    id: number;
    image: string;
    title: string;
    author: string;
    description: string;
    paper: string;
    code: string;
}

const projects = [
    {
        key: 1,
        image: './sent-embed.png',
        title: 'Attention mechanism on GPU',
        author: 'Danqi Liao',
        description: ' My CUDA c implementation of forwad pass of regular Attention and FlashAttention.',
        paper: '',
        code: 'https://github.com/Danqi7/flash-attention-cuda'
    },
    {
        key: 2,
        image: './sent-embed.png',
        title: 'Peer to Peer Proxy Network',
        author: 'Danqi Liao',
        description: ' P2P proxy network aims to protect user privacy and hide their online identity by forwarding their network requests randomly.',
        paper: '',
        code: 'https://github.com/Danqi7/p2p_proxy'
    },
    {
        key: 3,
        image: './selective-tal.png',
        title: 'Kademlia Distributed Hash Table',
        author: 'Danqi Liao',
        description: 'My implementation for Kademlia DHT, a distributed hash table for decentralized peer-to-peer computer networks.',
        paper: '',
        code: 'https://github.com/Danqi7/kademlia_DHT'
    }
]

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, author, description, paper, code }) => {
    return (
        <div className='container mb-6' key={id}>
            {/* <div className="w-1/3">
                <img src={image} alt={title} />
            </div> */}
            <div className='mb-1'>
                <h2 className='font-extrabold font'>{title}</h2>
                <p className='font-thin text-sm italic text-gray-600'>{author}</p>

                <div className='flex justify-between'>
                    <div>
                        <p  className='left'>{description}</p>
                    </div>
                    <div>
                        {paper.length > 0 && <a href={paper} className='right hover:font-extrabold'>[paper]</a>}
                        {code.length > 0 && <a href={code} className='hover:font-extrabold'>[code]</a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectList: React.FC = () => {
    return (
        <div className='my-6 w-full' id='project'>
            <h2 className="text-xl mb-2 inline-block font-inconsolata font-semibold">Projects
                <span className='block bg-slate-300 border-l-0 border-r-0 h-1 mt-1'>{""}</span>
            </h2>
            <div className='my-6 w-full text-base font-inconsolata'>
                {projects.map((project) => (
                    <ProjectCard
                        id={project.key}
                        image={project.image}
                        title={project.title}
                        author={project.author}
                        description={project.description}
                        paper={project.paper}
                        code={project.code}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
