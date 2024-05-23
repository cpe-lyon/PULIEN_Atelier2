import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import authProvider from "@/services/AuthProvider"
import { Link, Navigate, useNavigate } from "react-router-dom"

const formSchema = z.object({
    login: z.string().min(6,{
        message: "Login need to contain at least 6 characters",
    }),
    password: z.string().min(6,{
        message: "Password need to contain at least 6 characters",
    }),
})

const loginForm = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const login : string = values['login']
        const password : string = values['password']

        await authProvider.login({username : login, password : password});
        navigate("/");
    }

    function isConnected(){
        return authProvider.checkAuth();
    }

    return !isConnected() ? (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="login"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Login</FormLabel>
                            <FormControl>
                                <Input placeholder="Login" {...field} className={"w-1/5"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" {...field} className={"w-1/5"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button>
                    <Link to="/register">Regiter</Link>
                </Button>
                <Button type="submit">Login</Button>
            </form>
        </Form>
    ) :  <Navigate to="/authentified" />
}

export default loginForm;