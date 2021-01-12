const app=require("express").Express();

app.get("/",(req,res)=>{
  res.send("Hello world ");
  re.send("this is my 1st website");
  
});


app.listen(3000,(req,res)=>{
  console.log("this server runing on the port is 3000");
})
