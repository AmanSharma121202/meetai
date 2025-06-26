"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
   const { data: session} = authClient.useSession() 
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = ()=>{
    authClient.signUp.email({
      email,
      name,
      password
    },
    {
      onSuccess: () => {
        window.alert("Account created successfully!");
      },
      onError: (error) => {
        window.alert("Error creating account");
      }
    });
  }

    const onLogin = ()=>{
    authClient.signIn.email({
      email,
      password
    },
    {
      onSuccess: () => {
        window.alert("Account logged successfully!");
      },
      onError: (error) => {
        window.alert("Error logging in");
      }
    });
  }

  if(session){
     return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"> 
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
     );
  }
  
  return (
    
   <div className ="flex flex-col gap-y-10 ">
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit} className="mt-4">
        Create Account
      </Button>
    </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin} className="mt-4">
        Login
      </Button>
    </div>

   </div>
  )
}
