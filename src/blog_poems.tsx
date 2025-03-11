import React from 'react';
import { createRoot } from 'react-dom/client';

import { MyNavMenu } from './NavBar';
import './input.css';

import Markdown from 'react-markdown';


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

const content = `
# 诗与代码
## Poems and Code\n

### Nov 16, 2023\n

跑车再快登不上月球\n
爱你再久死亡是共同终点\n\n

摩尔定律也受物理限制\n
能源守恒\n
何况是转瞬即逝的那点悸动\n

世界毁灭无需智能\n
他人即地狱\n
我在人间笑看风声\n
潮起潮落 飞猪坠落\n
— 《人工智能》 Danqi Liao
`;

const content2 = `
### Dec 12, 2023
模型复几何\n
巨蟒吞千色\n
功尽孤舟寒\n
万径无归宗\n

— 《深度学习》 Danqi Liao
`;

const App: React.FC = () => {
    return (
        <div className="flex justify-center h-screen font-helvetica"> 
        <div className="container max-w-4xl mx-auto p-4 flex rounded mb-10">
        <MyNavMenu />
        <Content>
            <Markdown>
                {content}
            </Markdown>
            <br />
            <Markdown>
                {content2}
            </Markdown>
        </Content>
        </div>
        </div>
    )
};
  
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);