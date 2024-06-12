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
            <p className="h7 p-3">{overtitle}</p> 
          {/*title 48/ bold-lato font ecf21 bg   */} 
          <p className="h3 p-3">{title}</p>                                                                                                   
          {/* colo 2a394e* robot 16 rgular*/}
          <p className="h7 p-3">{subtitle}</p> 
        </div>
    )
};

export default TitleSubtitle
