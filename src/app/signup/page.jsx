"use client";

import { authClient } from "../../lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

export default function Signuppage() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
   
   const info = Object.fromEntries(formData.entries())

  
   const { data, error } = await authClient.signUp.email({
    name:info.name , // required
    email: info.email, // required
    password: info.password, // required
    image: info.url,
    callbackURL: "http://localhost:3000"
    
});
console.log(data,error)
   
  };

  return (
    <div className="my-25 mx-auto">
      <h1 className="font-bold text-xl text-center">Create An Account </h1>
      <p className=" text-lg mb-5 text-center">Start with advanture with Wanderlast</p>
       <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
        isRequired
        name="name"
        type="text"
       
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      <TextField
        
        name="image"
        type="url"
       
      >
        <Label>Image</Label>
        <Input placeholder="Enter your image url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
       
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit" className="w-full rounded-none">
          <Check />
          Signup
        </Button>
       
      </div>
    </Form>
    </div>
   
  );
}