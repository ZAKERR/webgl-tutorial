
function RandomFloat() 
{
    const r = Math.random();
    // const result  = Math.sin(r);
    const result  = Math.sin(1000000*r);
    console.log(result);
}

RandomFloat()