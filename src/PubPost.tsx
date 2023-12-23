import React from 'react';

interface PublicationCardProps {
    image: string;
    title: string;
    author: string;
    description: string;
    paper: string;
    code: string;
}

const publications = [
    {
        image: './selective-tal.png',
        title: 'Assessing Neural Network Representations During Training Using Noise-resilient Diffusion Spectral Entropy',
        author: 'Danqi Liao*, Chen Liu*, Ben Christensen, Alexander Tong, Guillaume Huguet, Guy Wolf, Maximilian Nickel, Ian Adelstein, Smita Krishnaswamy',
        description: 'ICML Workshop, 2023',
        paper: 'https://arxiv.org/abs/2312.04823',
        code: 'https://github.com/ChenLiu-1996/DiffusionSpectralEntropy'
    },
    {
        image: './sent-embed.png',
        title: 'Sentence Embeddings using Supervised Contrastive Learning',
        author: 'Danqi Liao',
        description: 'Arxiv Preprint, 2021',
        paper: 'https://arxiv.org/abs/2106.04791',
        code: 'https://github.com/Danqi7/584-final#sentence-embeddings-using-supervised-contrastive-learning'
    },
    {
        image: './selective-tal.png',
        title: 'Selective Feature Aggregation for Single Frame Supervised Temporal Action Localization',
        author: 'Danqi Liao',
        description: 'Master Thesis, 2022',
        paper: 'https://openreview.net/pdf?id=Gc1r5iq6iL-',
        code: ''
    },
]

const PublicationCard: React.FC<PublicationCardProps> = ({ image, title, author, description, paper, code }) => {
    return (
        <div className='container mb-6'>
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
                        <a href={paper} className='right hover:font-extrabold'>[paper]</a>
                        {code.length > 0 && <a href={code} className='hover:font-extrabold'>[code]</a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PublicationList: React.FC = () => {
    return (
        <div className='my-6 w-full' id='pub'>
            <h2 className="text-xl mb-2 inline-block font-nanum font-semibold">Publications
                <span className='block bg-slate-300 border-l-0 border-r-0 h-1 mt-1'>{""}</span>
            </h2>
            <div className='my-6 w-full text-base font-nanum'>
                {publications.map((publication) => (
                    <PublicationCard
                        image={publication.image}
                        title={publication.title}
                        author={publication.author}
                        description={publication.description}
                        paper={publication.paper}
                        code={publication.code}
                    />
                ))}
            </div>
        </div>
    );
}

export default PublicationList;
