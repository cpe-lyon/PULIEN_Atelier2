import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { cn } from "@/lib/utils"

    interface CardProperties {
        country:string,
        nameCard:string,
        height:number,
        weight:number,
        pace:number,
        rate:number,
        proprio:string,
    }


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardDetails = ({country,nameCard,height,weight,pace,rate,proprio}:CardProperties) => {
    let colorCard;
    if(rate <= 60){colorCard = "bg-amber-700";}
    else if(rate <= 80){colorCard = "bg-orange-400";}
    else if(rate > 80){colorCard = "bg-amber-300";}

    return (
        <Card className={cn(`w-[320px] align-middle justify-center items-center flex hover:drop-shadow transition-shadow ${colorCard}`,)}>
            <CardHeader>
                <CardTitle className="ml-auto mr-auto">{country}</CardTitle>
                <Avatar className="ml-auto mr-auto">
                    <AvatarImage src="https://cdn.discordapp.com/attachments/1197895183002513480/1243184962082177097/IMG_3456.jpg?ex=66508db8&is=664f3c38&hm=05c0e784fc12ae8f4e89892d644a1c022a52b6f23c1f5514cfddce534f7d3858&"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="ml-auto mr-auto">{nameCard}</CardTitle>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Height</TableHead>
                            <TableHead>Weight</TableHead>
                            <TableHead>Pace</TableHead>
                            <TableHead>Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{height}</TableCell>
                            <TableCell>{weight}</TableCell>
                            <TableCell>{pace}</TableCell>
                            <TableCell>{rate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <CardDescription className="ml-auto mr-auto">Propriétaire : {proprio}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CardDetails