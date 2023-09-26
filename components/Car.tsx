"use client"; // this is a client component
import React,{memo}  from 'react';

interface IframeComponentProps {
  url?: string;
}

const CarComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
    <section id="car" className="w-full mt-10 flex flex-col justify-center items-center pt-4" tabIndex={1}>
     <h1 className="text-center font-bold fade fadeOut  text-4xl">
          No Div CAR (CSS Only)
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 fade fadeOut  border-0 rounded"></hr>
        </h1>
      <iframe
        src={url}
        className="w-full bg-teal-car h-full border-none fade  fadeOut "
        title="Harsh Car"
      />
        
    </section>
  );
};

export default memo(CarComponent);
