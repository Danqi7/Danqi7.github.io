import React from 'react';

interface PublicationCardProps {
    id: number;
    image: string;
    title: string;
    author: string;
    description: string;
    paper: string;
    code: string;
}

const publications = [
    {
        id: 1,
        image: './selective-tal.png',
        title: 'RNAGenScape: Property-Guided, Optimized Generation of mRNA Sequences with Manifold Langevin Dynamics',
        author: 'Danqi Liao *, Chen Liu *, Xingzhi Sun *, Die Tang, Haochen Wang, Scott Elliot Youlten, Antonio J Giraldez, Smita Krishnaswamy',
        description: 'NeuraIPS, 2026 | Spotlight, Oral @ ICML GenBio, 2025',
        paper: 'https://arxiv.org/abs/2510.24736',
        code: 'https://github.com/KrishnaswamyLab/RNAGenScape'
    },
    {
        id: 2,
        image: './selective-tal.png',
        title: 'Geometry-Aware Generative Autoencodersfor Warped Riemannian Metric Learning and Generative Modeling on Data Manifolds',
        author: 'Xingzhi Sun *, Danqi Liao *, Kincaid MacDonald, Yanlei Zhang, Guillaume Huguet, Guy Wolf, Ian Adelstein,Tim G. J. Rudner, Smita Krishnaswamy',
        description: 'AISTATS, 2025 |ICML GRaM, 2024',
        paper: 'https://arxiv.org/abs/2410.12779',
        code: 'https://github.com/KrishnaswamyLab/GeometryAwareGenerativeAutoencoder'
    },
    {
        id: 3,
        image: './selective-tal.png',
        title: 'DiffKillR: Killing and Recreating Diffeomorphisms for Cell Annotation in Dense Microscopy Images',
        author: 'Chen Liu *, Danqi Liao *, Alejandro Parada-Mayorga *, Alejandro Ribeiro, Marcello DiStasio, Smita Krishnaswamy',
        description: 'Oral @ ICASSP, 2025',
        paper: 'https://arxiv.org/abs/2410.03058',
        code: 'https://github.com/KrishnaswamyLab/DiffKillR'
    },
    {
        id: 4,
        image: './selective-tal.png',
        title: 'Assessing Neural Network Representations During Training Using Noise-resilient Diffusion Spectral Entropy',
        author: 'Danqi Liao*, Chen Liu*, Ben Christensen, Alexander Tong, Guillaume Huguet, Guy Wolf, Maximilian Nickel, Ian Adelstein, Smita Krishnaswamy',
        description: 'Oral @ ICASSP, 2024 | ICML TAG-ML, 2023',
        paper: 'https://arxiv.org/abs/2312.04823',
        code: 'https://github.com/ChenLiu-1996/DiffusionSpectralEntropy'
    },
    {
        id: 5,
        image: './selective-tal.png',
        title: 'ProtScape: A molecular structure and energy-aware representation for protein conformation generation',
        author: 'Siddharth Viswanath*, Xingzhi Sun*, Lucas Lee, Danqi Liao, Hiren Madhu, David R. Johnson, João Felipe Rocha, Egbert Castro, Jackson D. Grady, Michael Perlmutter, Dhananjay Bhaskar, Smita Krishnaswamy',
        description: 'LOG, 2026 | MoML, 2025',
        paper: 'https://arxiv.org/abs/2410.20317',
        code:  'https://github.com/KrishnaswamyLab/ProtSCAPE-Net'
    },
    {
        id: 6,
        image: './sent-embed.png',
        title: 'Sentence Embeddings using Supervised Contrastive Learning',
        author: 'Danqi Liao',
        description: 'Arxiv Preprint, 2021',
        paper: 'https://arxiv.org/abs/2106.04791',
        code: 'https://github.com/Danqi7/584-final#sentence-embeddings-using-supervised-contrastive-learning'
    },
    {
        id: 7,
        image: './selective-tal.png',
        title: 'Selective Feature Aggregation for Single Frame Supervised Temporal Action Localization',
        author: 'Danqi Liao',
        description: 'Master Thesis, 2022',
        paper: 'https://openreview.net/pdf?id=Gc1r5iq6iL-',
        code: ''
    },
    {
        id: 8,
        image: './selective-tal.png',
        title: 'Geometry-Aware Representation Learning and Generative Modeling',
        author: 'Danqi Liao',
        description: 'PhD Thesis, 2026',
        paper: 'https://www.proquest.com/openview/d58754eab903255d8738fa1511ed6e1d/1?pq-origsite=gscholar&cbl=18750&diss=y',
        code: ''

    }
]

const PublicationCard: React.FC<PublicationCardProps> = ({ id, image, title, author, description, paper, code }) => {
    return (
        <div className='container mb-6 text-gray-800' key={id} >
            {/* <div className="w-1/3">
                <img src={image} alt={title} />
            </div> */}
            <div className='mb-1'>
                <h2 className='font-extrabold font-inconsolata'>{title}</h2>
                <p className='text-sm italic text-gray-600'>{author}</p>

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
        <div className='my-4 w-full' id='pub'>
            <h2 className="text-xl mb-2 inline-block font-inconsolata font-semibold text-gray-800">Publications
                <span className='block bg-slate-300 border-l-0 border-r-0 h-1 mt-1'>{""}</span>
            </h2>
            <div className='my-2 w-full text-base font-inconsolata text-gray-800'>
                {publications.map((publication) => (
                    <PublicationCard
                        id={publication.id}
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
