import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car } from "@/types"
import CarCard from "./card"

export default function CarModal({ car }: Car) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <CarCard
                    key={car.id}
                    car={{
                        id: car.id,
                        name: car.name,
                        image: car.image,
                        price: car.price
                    }}
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{car.name}</DialogTitle>
                    <DialogDescription>
                        {car.price}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <img className="rounded-md" src={car.image} alt={car.id.toString()} />

                </div>
                <p className="text-md"><span className="font-bold">mouteur : </span>mouteur</p>
                <p className="text-md"><span className="font-bold">energie : </span>energie</p>
                <p className="text-md"><span className="font-bold">kilometrage : </span>kilometrage</p>
                <p className="text-md"><span className="font-bold">boite : </span>boite</p>
                <p className="text-md"><span className="font-bold">état : </span>état</p>
                <p className="text-md"><span className="font-bold">annee : </span>annee</p>
                <p className="text-md"><span className="font-bold">couleur : </span>couleur</p>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
