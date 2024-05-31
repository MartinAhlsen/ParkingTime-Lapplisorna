import React from "react";


interface TitleSubtitleProps {
    title: string | null,
    subtitle: string | null,
    overtitle: string | null
}

const TitleSubtitle = ({title, subtitle, overtitle}:TitleSubtitleProps) => {

    return (
        <div className="min-h-10 bg-pt-background text-center">
            {/* 18/ bold-lato   */} 
            <p className="text-lg font-normal">{overtitle}</p> 
          {/*title 48/ bold-lato font ecf21 bg   */} 
          <p className="text-5xl font-bold">{title}</p>                                                                                                   
          {/* colo 2a394e* robot 16 rgular*/}
          <p className="text-base font-normal">{subtitle}</p> 
        </div>
    )
};

export default TitleSubtitle
