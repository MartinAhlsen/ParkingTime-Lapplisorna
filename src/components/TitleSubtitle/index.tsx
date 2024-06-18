import React from "react";


interface TitleSubtitleProps {
    title: string | null,
    subtitle: string | null,
    overtitle: string | null
}

const TitleSubtitle = ({title, subtitle,overtitle}:TitleSubtitleProps) => {

    return (
        <div className="bg-pt-background text-center"> 
            <p className="h7 p-3">{overtitle}</p>
          <p className="h3 p-5 leading-normal">{title}</p>                                                                                                   
          <p className="h7 p-5">{subtitle}</p> 
        </div>
    )
};

export default TitleSubtitle
