import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { type Car } from "@/types";


export default function CarCard({ car }: Car) {

    return (
        <>
            <Card className="cursor-pointer">
                <CardHeader>
                    <CardTitle>{car.name}</CardTitle>
                    <CardDescription>{car.price}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img className="rounded-md" src={car.image} alt={car.id.toString()} />
                    <p className="mt-4">Card Content</p>
                </CardContent>
            </Card>
        </>
    );
}