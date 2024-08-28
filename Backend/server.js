const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://divyanshchamoli:wxvn7144@cluster0.qrzriqj.mongodb.net/todoMERN')
.then(()=>console.log("connected"))
.catch((e)=>console.log(e))

const TodoSchema=new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo=mongoose.model("Todo",TodoSchema);

app.post('/addTodo',async (req,res)=>{
    //Fetched from frontend
    const newTodo=new Todo(req.body)
    await newTodo.save()
    res.json({
        msg: "Todo successfully added!"
    })
})

app.post('/markAsComplete',(req,res)=>{
    const todoId=1
    res.json({
        msg: "Marked Complete" 
    })
})

app.get('/viewTodos',(req,res)=>{
    const todos=[]
    res.json({
        todos : todos
    })
})




app.listen(3000,()=>{
    console.log("listening")
})