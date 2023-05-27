"use client"
import { useState, useTransition } from "react"
import {useRouter} from "next/navigation"
import { NewTodo } from "@/lib/drizzle"
import Image from "next/image"




const AddTodo = () => {
    const[task, setTask]= useState<NewTodo | null>(null)
    const router = useRouter()

    const TodoAdded = async ()=>{
        try{
            if(task){

                const res = await fetch("/api/todo", {
                    method: "POST",
                    body: JSON.stringify({task:task.task}),
                })
                router.refresh()
          
            }

        }catch(error){
            console.log("error")
        }

    }
  return (
    <div>
        <form className="w-full flex gap-x-3" >
            <input 
            type= "text"
            placeholder = "Add Task"
            onChange={(e)=>setTask({task:e.target.value})}
            className = "rounded-full py-3.5 px-5 border focus:outline-secondary"/>
            <button type = "button" onClick={TodoAdded} className = "p-4 shrink-0 rounded-full bg-teal-500 ">
            <Image src = {"/vector.png"} width = {20}  height = {20 } alt= "vector image"/>
            </button>
        </form>
    </div>
  )
}


export default AddTodo;