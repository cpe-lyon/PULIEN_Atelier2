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
import {Link, useNavigate} from "react-router-dom"

const formSchema = z.object({
    firstname: z.string().min(2,{
        message: "Firstname need to contain at least 2 characters",
    }),
    lastname: z.string().min(2,{
        message: "Lastname need to contain at least 2 characters",
    }),
    login: z.string().min(6,{
        message: "Login need to contain at least 6 characters",
    }),
    email: z.string().min(5,{
        message: "Email need to contain at least 5 characters",
    }),
    password: z.string().min(6,{
        message: "Password need to contain at least 6 characters",
    }),
})

const Register = () => {
    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const email = values['email'];
        const firstname = values['firstname'];
        const lastname = values['lastname'];
        const login = values['login'];
        const password = values['password'];
        await authProvider.register({firstname, lastname, login, email,password})
        navigate("/")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-1/5 mx-auto mt-32">
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                                <Input placeholder="Prénom" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input placeholder="Nom" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="login"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Identifiant</FormLabel>
                            <FormControl>
                                <Input placeholder="Identifiant" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field}/>
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
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input placeholder="Mot de passe" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div>
                    <Link to="/login">Vous êtes déjà client ? Connexion</Link>
                </div>
                <Button type="submit" className={"w-full"}>Créer</Button>
            </form>
        </Form>
    )
}

export default Register;