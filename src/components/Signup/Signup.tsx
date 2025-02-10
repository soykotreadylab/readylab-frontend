"use client"

// import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useAuthModal } from "@/hooks/useAuthModal"
import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
// import { useAuthModal } from "@/hooks/useAuthModal"
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
// import { Input } from "../ui/input"
// import { Button } from "../ui/button"



// Define the signup schema
const signupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignupFormValues = z.infer<typeof signupSchema>

export function SignUpModal() {
  const { isOpen, closeModal } = useAuthModal();
  const [isLoading, setIsLoading] = useState(false)

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  const onSubmit = async (values: SignupFormValues) => {
    setIsLoading(true)
    console.log("Signup values:", values)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    closeModal()
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-[539px] p-0">
          <div className="p-6 rounded-lg bg-gradient-to-b from-[#ffffff] to-[#D7EBFF] relative">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl font-extrabold text-[#374151] py-6">
                Welcome to <br /> ReadyLab!
              </DialogTitle>
            </DialogHeader>

            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Email:</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          className="w-full h-10 shadow-lg"
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={signupForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Phone:</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          {...field}
                          className="w-full h-10 shadow-lg"
                          autoComplete="tel"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Password:</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          className="w-full h-10 shadow-lg"
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={signupForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-xl font-extrabold text-[#374151]">Confirm Password:</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          {...field}
                          className="w-full h-10 shadow-lg"
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sign Up Button */}
                <DialogFooter>
                  <div className="w-full">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FFCD36] to-[#FF9429] text-white py-2 rounded-3xl"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <h2 className="text-[#374151] pt-2 text-sm font-medium text-center">
                      Already have an account?{" "}
                      <span className="cursor-pointer text-blue-500">Log In</span>
                    </h2>
                  </div>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
    </Dialog>
  )
}
