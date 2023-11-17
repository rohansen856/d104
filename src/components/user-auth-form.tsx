"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { absoluteUrl, cn } from "@/lib/utils"
import { insertUserSchema } from "@/lib/validation"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    action: "login" | "register"
}

type FormData = z.infer<typeof insertUserSchema>

export function UserAuthForm({
    className,
    action,
    ...props
}: UserAuthFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(insertUserSchema),
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    async function onSubmit(data: FormData) {
        setIsLoading(true)

        const signInResult =
            action === "register"
                ? await fetch(absoluteUrl("/api/auth"), {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ action, ...data }),
                  })
                : await fetch(
                      absoluteUrl(
                          `/api/auth?email=${data.email}&password=${data.password}`
                      ),
                      {
                          method: "GET",
                      }
                  )
        setIsLoading(false)
        console.log(signInResult)

        if (!signInResult?.ok) {
            return toast({
                title: "Email or Password wrong.",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive",
            })
        }

        action === "register"
            ? toast({
                  title: "Account Creation Succesful",
                  description:
                      "Registering has succeded. Please login to continue",
              })
            : toast({
                  title: "Login Successful",
                  description: "You have successfully logged in.",
              })
        return router.push(absoluteUrl("/dashboard"))
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("email")}
                        />
                        {errors?.email && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder=". . . . ."
                            type="password"
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("password")}
                        />
                        {errors?.password && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        className={cn(buttonVariants(), "mt-4")}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </button>
                </div>
            </form>
        </div>
    )
}
