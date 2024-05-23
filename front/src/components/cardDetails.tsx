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
    if(rate <= 89){colorCard = "bg-stone-500";}
    else if(rate <= 91){colorCard = "bg-amber-500";}
    else if(rate > 92){colorCard = "bg-violet-800";}

    return (
        <Card className={cn(`w-[280px] align-middle justify-center items-center flex hover:drop-shadow transition-shadow ${colorCard} text-white`,)}>
            <CardHeader>
                <CardTitle className="ml-auto mr-auto">{nameCard}</CardTitle>

                <Avatar className="ml-auto mr-auto">
                    <AvatarImage src="https://cdn.discordapp.com/attachments/1197895183002513480/1243184962082177097/IMG_3456.jpg?ex=66508db8&is=664f3c38&hm=05c0e784fc12ae8f4e89892d644a1c022a52b6f23c1f5514cfddce534f7d3858&"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="ml-auto mr-auto">{country}</CardTitle>

                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className='text-white'>Height</TableHead>
                            <TableHead className='text-white'>Weight</TableHead>
                            <TableHead className='text-white'>Pace</TableHead>
                            <TableHead className='text-white'>Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='text-white'>{height}</TableCell>
                            <TableCell className='text-white'>{weight}</TableCell>
                            <TableCell className='text-white'>{pace}</TableCell>
                            <TableCell className='text-white'>{rate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <CardDescription className="ml-auto mr-auto text-white">
                    <span style={{ fontWeight: 'bold' }}>Propriétaire :</span> {proprio}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CardDetails;