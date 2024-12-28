import React from 'react';
import Button from './Button'; 
const ReuseButton=()=>{
    const data=[
        {name:'events',text:"will you marry me anushka",action:"console"},
        {name:'anushka',text:"iam always ready to marry you prabhas",action:"alert"},
        {name:"all stars",text:"tommorrow is anushka prabhas marriage",action:"navigate"},
        {name:"pranushka",text:"inviting all the celebrities to their marriage",action:"alert"},
    ]
    return(
        <div>
       {data.map((item,index)=>(
        <Button key={index} name={item.name} text={item.text} action={item.action} />
       ))}
        </div>
    );
}
export default ReuseButton;