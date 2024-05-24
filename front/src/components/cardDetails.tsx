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
import {Button} from "react-bootstrap";

    interface CardProperties {
        country:string,
        nameCard:string,
        height:number,
        weight:number,
        pace:number,
        rate:number,
        proprio:string,
        id: number,
        buyable: boolean,
        onClickOnBuy: (id: number) => void;
    }


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardDetails = ({country,nameCard,height,weight,pace,rate,proprio, cardInstanceId , buyable, onClickOnBuy}:CardProperties) => {
    let colorCard;
    if(rate <= 89){colorCard = "bg-stone-500";}
    else if(rate <= 91){colorCard = "bg-amber-500";}
    else if(rate > 92){colorCard = "bg-violet-800";}

    return (
        <Card className={cn(`w-[280px] align-middle justify-center items-center flex hover:drop-shadow transition-shadow ${colorCard} text-white`,)}>
            <CardHeader>
                <CardTitle className="ml-auto mr-auto">{nameCard}</CardTitle>

                <Avatar className="ml-auto mr-auto">
                    <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHjwroQRk_WPw/profile-displayphoto-shrink_100_100/0/1705959403635?e=1721865600&v=beta&t=C7SW-VSc2cqGH3mpYKeVS2_XiSxalnMpBjEvy2yjqME"/>
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

                {buyable && <Button className={"mx-auto mt-5 bg-lime-600 p-1 w-1/2"} onClick={() => onClickOnBuy(cardInstanceId)}>Acheter</Button>}
            </CardHeader>
        </Card>
    )
}

export default CardDetails;