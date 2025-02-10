"use client";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { SignUpModal } from "../Signup/Signup";

// import icone from "../../assets/HomePageImage/readylab_Black.png";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { SignUpModal } from "../Signup/Signup";
// import { useLoginModal } from "@/hooks/useLoginModal";
// import { useAuthModal } from "@/hooks/useAuthModal";
// import { useRouter } from "next/navigation";
// import { useSignUpModal } from "@/hooks/useSignUpModal"; 
// Form schema
const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export function LoginModal() {
  const { isOpen, closeModal } = useLoginModal();
  const { openSignUpModal } = useAuthModal(); // Open SignUp modal
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  
const router = useRouter(); // Initialize router

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Submitting form with values:", values); 
    setIsLoading(true);
    try {
      const response = await fetch("https://admin.readylab.co/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("API Response:", data); 

      if (response.ok) {
        console.log("Login successful:", data);

        closeModal(); // Close the modal

        // Redirect to the dashboard
        router.push("/dashboard"); 
      } else {
        form.setError("username", { type: "manual", message: data.error || "Login failed" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
};

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent className="w-[539px] p-0">
          {/* Background Wrapper */}
          <div className="p-6 rounded-lg bg-gradient-to-b from-[#ffffff] to-[#D7EBFF] relative">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl font-extrabold text-[#374151] py-6">
                Welcome to <br /> ReadyLab!
              </DialogTitle>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Username Field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex justify-end gap-3">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Username:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username"
                          {...field}
                          className="w-[263px] h-6 shadow-lg"
                          autoComplete="username"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex justify-end gap-3">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Password:</FormLabel>
                      <div>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                            className="w-[263px] h-6 shadow-lg"
                            autoComplete="current-password"
                          />
                        </FormControl>
                        <h2 className="underline font-medium text-[10px] text-[#374151] pl-[10px] pt-1">
                          Forgot Password?
                        </h2>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Login Button */}
                <DialogFooter>
                  <div className="w-full relative">
                    <div className="flex justify-between flex-col items-center w-full">
                      <div>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#FFCD36] to-[#FF9429] text-white px-14 py-2 rounded-3xl"
                          disabled={isLoading}
                        >
                          {isLoading ? "Logging in..." : "Login"}
                        </button>
                        <h2 className="text-[#374151] pt-1 text-[12px] font-medium text-center">
                          New here?{" "}
                          <span onClick={openSignUpModal}  className="cursor-pointer text-blue-500">
                            Sign Up!
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      {/* SignUp Modal */}
      <SignUpModal />
    </div>
  );
}
