"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import axios from "axios"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { absoluteUrl, cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const skills = [
    {
        label: "C",
        value: "c",
    },
    {
        label: "C++",
        value: "cpp",
    },
    {
        label: "Java",
        value: "java",
    },
    {
        label: "Javascript",
        value: "javascript",
    },
    {
        label: "Typescript",
        value: "typescript",
    },
]

const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    mainSkill: z.string({
        required_error: "Please select a primary skill to display.",
    }),
    secSkill: z.array(z.string()).default([]),
    bio: z.string().max(200).min(5),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
    bio: "I own a computer.",
}

export function ProfileForm1({ id }: { id: string }) {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })

    async function onSubmit(data: ProfileFormValues) {
        const retData = await axios.post(
            absoluteUrl(`/api/profile/home/${id}`),
            {
                data: { ...data, id },
            }
        )
        toast({
            title: "Success!!!",
            description: "Profile Successfully updated.",
        })
        console.log(retData)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-[350px] space-y-8 px-2"
            >
                <div className="flex w-full">
                    <div className="m-auto h-48 w-48 cursor-pointer rounded-full bg-secondary"></div>
                </div>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name. It can be your
                                real name or a pseudonym. You can change this
                                anytime.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mainSkill"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Primary Skill</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? skills.find(
                                                      (skill) =>
                                                          skill.value ===
                                                          field.value
                                                  )?.label
                                                : "Select your primary skill"}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search skill..." />
                                        <CommandEmpty>
                                            No skill found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {skills.map((skill) => (
                                                <CommandItem
                                                    value={skill.label}
                                                    key={skill.value}
                                                    onSelect={() => {
                                                        form.setValue(
                                                            "mainSkill",
                                                            skill.value
                                                        )
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            skill.value ===
                                                                field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {skill.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is the primary skill that will be shown in
                                the dashboard.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You can <span>@mention</span> other users and
                                organizations to link to them.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update profile</Button>
            </form>
        </Form>
    )
}

export function ProfileForm({ id }: { id: string }) {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })

    async function onSubmit(data: ProfileFormValues) {
        const retData = await axios.post(
            absoluteUrl(`/api/profile/home/${id}`),
            {
                data: { ...data, id },
            }
        )
        toast({
            title: "Success!!!",
            description: "Profile Successfully updated.",
        })
        console.log(retData)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-[350px] max-w-[95vh] space-y-3 px-2"
                    >
                        <div className="flex w-full">
                            <div className="m-auto h-48 w-48 cursor-pointer rounded-full bg-secondary"></div>
                        </div>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="your name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mainSkill"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Primary Skill</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between",
                                                        !field.value &&
                                                            "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? skills.find(
                                                              (skill) =>
                                                                  skill.value ===
                                                                  field.value
                                                          )?.label
                                                        : "Select your primary skill"}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search skill..." />
                                                <CommandEmpty>
                                                    No skill found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {skills.map((skill) => (
                                                        <CommandItem
                                                            value={skill.label}
                                                            key={skill.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "mainSkill",
                                                                    skill.value
                                                                )
                                                            }}
                                                        >
                                                            <CheckIcon
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    skill.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {skill.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        This is the primary skill that will be
                                        shown in the dashboard.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        You can <span>@mention</span> other
                                        users and organizations to link to them.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Update profile</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
