import DeleteButton from "./DeleteButton";

const initialTodos = ["Buy groceries", "Walk the dog", "Read a book"];
export default function TodoList() {
  return (
    <ul className="col-[1/2] row-[2/3] bg-white [scrollbar-width:thin] relative">
       {initialTodos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
       )}
       {initialTodos.map((todo, index) => {
            return (
            <li key={index}
            className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-b-[rgba(0,0,0,0.08)]">
                <span>{todo}</span>
                <DeleteButton />

            </li>
       )})}

    </ul>
  );
}