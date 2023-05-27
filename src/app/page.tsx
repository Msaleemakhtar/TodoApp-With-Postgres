import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className = " flex justify-center items-center h-screen  bg-black">
      <div className = " px-6 py-8 rounded-xl w-full max-w-md backdrop-blur-xl bg-gray-100 ">
      <TodoList/>
      <AddTodo />
      </div>

      

      
    </main>
  );
}
