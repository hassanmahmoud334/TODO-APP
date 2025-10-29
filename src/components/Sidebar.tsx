import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <div className="col-[2/3] row-[2/3] bg-[#fffcf9] pt-[18px] px-[25px] pb-7 flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">
    <AddTodoForm />

    <div className="mt-auto space-y-2">
        <Button buttonType="secondary" onClick={()=>{}}>Log In</Button>
        <Button buttonType="secondary" onClick={()=>{}}>Register</Button>
    </div>
    </div>
  );
}