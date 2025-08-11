import { LoginForm } from "./_components/logInForm";

const LoginPage = () => {
  return (
    <div className="bg-secondary relative p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center ">
      <h1 className="text-center absolute top-10 text-2xl font-bold">
        Login In Page
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
