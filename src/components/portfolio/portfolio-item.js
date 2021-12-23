import React from "react";

export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>  
                {/* Quip    title
                google.com       url
                Eventbrite        title
                google.com        url
                Ministry Safe      title
                google.com */} 
        </div>
    )
}