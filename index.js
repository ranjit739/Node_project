const express=require("express");
const app= express();
const port=8000;



app.get('/',(req,res)=>{
    try{
        res.end("it is Home page")
    }
    catch(err){
        res.end("404")
    }
})
//Addition
app.get('/add',(req,res)=>{
    try{
      const a=parseInt(req.query.a);
      const b=parseInt(req.query.b);
      const c=a+b;
      console.log(`value of a  ${a}  and value of ${b} and sum is ${c}`)
      res.send();
    }
    catch(err){
        res.end("404")
    }
});
//Area of circle
app.get('/area',(req,res)=>{
    try{
      const pi=3.14;
      const r=req.query.r
      const area=2*pi*r*r;
    
      console.log(`value of a  ${pi}  and value of redius ${r} and area is ${area}`)
      res.send();
    }
    catch(err){
        res.end("404")
    }
});

//Volume of surface area
app.get('/volume',(req,res)=>{
    try{
      const pi=3.14;
      const r=req.query.r;
      const volume=(4/3)*pi*r*r*r
    
      console.log(`value of a  ${pi}  and value of redius ${r} and valume is ${volume}`)
      res.send();
    }
    catch(err){
        res.end("404")
    }
});

app.get('/volume',(req,res)=>{
   
        try{
          const pi=3.14;
          const r=req.query.r;
          const volume=(4/3)*pi*r*r*r
        
          console.log(`value of a  ${pi}  and value of redius ${r} and valume is ${volume}`)
          res.send();
        }
        catch(err){
            res.end("404")
        }
    });


  


//age calculate;

app.get('/age',(req,res)=>{
    try{
        let date=parseInt(req.query.date)
        let month=parseInt(req.query.month)
        let year=parseInt(req.query.year);
        let name=req.query.name;
       
        let dob=new Date(`${date} ${month} ${year}`)
        console.log(dob);
        let now=new Date();
        let difference=now-dob;
        
        let days=Math.round((difference)/(1000*60*60*24))
        let years=Math.round((days)/365);
        let months=Math.round((years)/12);
    
        console.log( years)
        console.log(months)
        console.log(days)
        console.log(name);
        res.send(`
         <p> Hello ${name} <p>
         <p>  your age is ${years} </p> 
        
        `);


    }
    catch(err){
        res.end("404")
    }
})

//passing json file 
const fs =require("fs")
const Vegetable={
    result1:
    {
        rootVegetable:["turing","ginger","beets"],
        leafy: ["broccoli","spinach","cabbagee"]
    },
 
        result2:
    {
        rootVegetable:["turing","ginger","beets"],
        leafy: ["broccoli","spinach","cabbagee"]
    }
   
    
 
 
     } 
 
 const jsondata=JSON.stringify(Vegetable);
 
 fs.writeFile("json1.json" ,jsondata,(err)=>{
     console.log("done")
 })





app.get('/vegetable', (req, res) => {
    try{    
    fs.readFile("json1.json","utf-8",(err,data)=>{
        console.log(data);
        res.end(data);

    })
}catch(err){
    res.end("404 Error");
}
})







app.listen(port,()=>{
    console.log("server is running");
})