import {Todo} from "@/lib/drizzle"



const getData = async ()=>{
    
    try{ 
        const res = await fetch("http://127.0.0.1:3000/api/todo", {
        method: "GET",
        cache :"no-store",
        headers: {
         "content-Type" : "application/json"},

    });
    if(!res.ok){
        throw new Error("found no data")
    };

    const result = await res.json()
    return result


}catch(error){
    console.log("error")
}
};





const Todolist = async () => {

const res:{data: Todo[]} = await getData()


  return (
    <div className = " max-h-[350px] overflow-auto mb-4">
       {
        res.data.map((item)=>(
            <div  className = "bg-gray-100 py-4 px-4 flex items-center shadow rounded-lg my-5 gap-x-3">
                 <div className = "h-3 w-3 bg-primary rounded-full"></div>
                 <p className = "text-lg font-medium">{item.task}</p>


            </div>
        ))} 
    </div>
  )
}

export default Todolist
