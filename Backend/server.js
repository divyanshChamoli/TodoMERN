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

app.get('/viewTodos',async (req,res)=>{
    const todos=await Todo.find({})
    // console.log(todos)
    res.json({
        todos : todos
    })
})

app.post('/addTodo',async (req,res)=>{
    //Fetched from frontend
    const newTodo=new Todo(req.body)
    await newTodo.save()
    res.json({
        msg: "Todo successfully added!"
    })
})

app.put('/markAsComplete',async (req,res)=>{
    const todoId=req.body.id
    await Todo.updateOne({"_id":todoId},
        {$set:{"completed":true}})
    res.json({
        msg: "Marked Complete" 
    })
})

app.delete('/deleteTodo/:id',async(req,res)=>{
    const id=req.params.id;
    await Todo.deleteOne({_id:id})
    res.json({
        msg:"successfully deleted"
    })
})




app.listen(3000,()=>{
    console.log("listening")
})