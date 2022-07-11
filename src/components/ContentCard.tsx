import React from "react";

function ContentCard({
  img,
  alt,
  title1,
  title2,
  para1,
  para2,
  para3,
}: {
  img: string;
  alt: string;
  title1: string;
  title2: string;
  para1: string;
  para2: string;
  para3: string;
}) {
  return (
    <div className="max-w-96 flex-1 card overflow-auto m-4 bg-slate-800">
      <figure className="max-h-0 md:max-h-64 h-64 overflow-hidden">
        <img src={img} alt={alt} className="object-fill" />
      </figure>
      <div className="card-body overflow-auto items-center text-center">
        <h2 className="card-title">{title1}</h2>
        <h4 className="pb-2">{title2}</h4>
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
      </div>
    </div>
  );
}

export default ContentCard;