import React from "react";
import "./style.css";

export default({data})=>{
    return <main>
        <h1>
            DevsBlog
        </h1>
        <div className="cards">
            {data.map(post => <div class= "post"> {post.mane} 
            <div className="post__block">
                <span>{post.mane}</span>
                <span>{post.author}</span>
                </div> 
                <div className="post__block">
                    {post.description.split(".").map ((p,i,arr)=>i !==arr.length - 1 && <p key={i}> {p+"."}</p>)}
                    
                    </div> 
            
            </div> )}
        </div>
    </main>
}