// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  // const { isAuthenticated, isLoading, user, login, register, logout } = useKindeAuth();

  return (
    <div className="col-[2/3] row-[2/3] bg-[#fffcf9] pt-[18px] px-[25px] pb-7 flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">
      <AddTodoForm />

      <div className="space-y-2">
        {(
          <>
            <Button buttonType="secondary" onClick={() => {}}>
              Log in
            </Button>
            <Button buttonType="secondary" onClick={() => {}}>
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
}