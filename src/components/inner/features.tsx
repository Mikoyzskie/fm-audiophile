import React from 'react';

interface IBox {
    count: string;
    item: string;
}

interface Props {
    feature: string[];
    box: IBox[];
}

export default function Features({ feature, box }: Props) {
    return (
        <div className='gap-[125px] flex'>
            <div>
                <h3 className='h3 mb-8'>FEATURES</h3>
                <div className='body flex flex-col gap-8 grayish'>
                    {feature.map((text: string, index: number) => (
                        <p key={index} className='max-w-[635px]'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='h3 mb-8'>IN THE BOX</h3>
                <div className='body flex flex-col gap-2'>
                    {box.map((item: IBox, index: number) => (
                        <p className='gap-6 flex' key={index}>
                            <span className='orange'>{item.count}</span>
                            <span className='grayish'>{item.item}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
