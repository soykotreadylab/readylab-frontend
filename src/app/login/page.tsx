// // import LoginForm from './login-form'

import { LoginModal } from "@/components/Login/Login";

// import { LoginModal } from "@/components/Login/Login";


// import LoginForm from "@/Components/Login/Login";

// export default function LoginPage() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>
//         <LoginForm />
//       </div>
//     </div>
//   )
// }

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginModal/>
    </div>
  );
}
