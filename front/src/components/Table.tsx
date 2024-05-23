import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const cards = [
    {
      cardId: 1,
      name: "Card 1",
      image: "https://via.placeholder.com/150",
      nation: "Nation 1",
      pace: 80,
      weight: 70,
      height: 180,
      price: 100,
      rating: 85,
    },
    {
      cardId: 2,
      name: "Card 2",
      image: "https://via.placeholder.com/150",
      nation: "Nation 2",
      pace: 75,
      weight: 65,
      height: 175,
      price: 200,
      rating: 90,
    },
    {
      cardId: 3,
      name: "Card 3",
      image: "https://via.placeholder.com/150",
      nation: "Nation 3",
      pace: 90,
      weight: 80,
      height: 190,
      price: 300,
      rating: 88,
    },
    {
      cardId: 4,
      name: "Card 4",
      image: "https://via.placeholder.com/150",
      nation: "Nation 4",
      pace: 85,
      weight: 75,
      height: 185,
      price: 150,
      rating: 92,
    },
    {
      cardId: 5,
      name: "Card 5",
      image: "https://via.placeholder.com/150",
      nation: "Nation 5",
      pace: 78,
      weight: 68,
      height: 178,
      price: 250,
      rating: 87,
    },
    {
      cardId: 6,
      name: "Card 6",
      image: "https://via.placeholder.com/150",
      nation: "Nation 6",
      pace: 82,
      weight: 72,
      height: 182,
      price: 120,
      rating: 86,
    },
    {
      cardId: 7,
      name: "Card 7",
      image: "https://via.placeholder.com/150",
      nation: "Nation 7",
      pace: 77,
      weight: 67,
      height: 177,
      price: 210,
      rating: 89,
    },
    {
      cardId: 8,
      name: "Card 8",
      image: "https://via.placeholder.com/150",
      nation: "Nation 8",
      pace: 88,
      weight: 78,
      height: 188,
      price: 320,
      rating: 91,
    },
    {
      cardId: 9,
      name: "Card 9",
      image: "https://via.placeholder.com/150",
      nation: "Nation 9",
      pace: 83,
      weight: 73,
      height: 183,
      price: 170,
      rating: 84,
    },
    {
      cardId: 10,
      name: "Card 10",
      image: "https://via.placeholder.com/150",
      nation: "Nation 10",
      pace: 79,
      weight: 69,
      height: 179,
      price: 190,
      rating: 85,
    },
  ];
  
  const InventoryTable = ()=> {
    return (
      <div className="h-screen overflow-hidden rounded-lg flex justify-center items-center p-4">
        <div className="h-3/4 w-full max-w-6xl rounded-lg overflow-y-auto overflow-x-hidden">
          <Table className="bg-white w-full  shadow">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Nation</TableHead>
                <TableHead>Pace</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Height</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cards.map((card) => (
                <TableRow key={card.cardId}>
                  <TableCell className="font-medium">{card.cardId}</TableCell>
                  <TableCell>{card.name}</TableCell>
                  <TableCell><img src={card.image} alt={card.name} className="w-16 h-16" /></TableCell>
                  <TableCell>{card.nation}</TableCell>
                  <TableCell>{card.pace}</TableCell>
                  <TableCell>{card.weight}</TableCell>
                  <TableCell>{card.height}</TableCell>
                  <TableCell>{card.price}</TableCell>
                  <TableCell>{card.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  
  export default InventoryTable;