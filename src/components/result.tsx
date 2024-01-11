import { Skeleton } from "@/components/ui/skeleton"
import CarModal from "./car-modal";
import CarCard from "./card";
import { type CarGroup } from "@/types";

export default function Results({ cars }: CarGroup) {
    return (
        <>
            <div className=" border rounded-md p-6">
                <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                    Result :
                </h3>
                <div className="h-16" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3].map((car, index) => (
                        <>
                            <CarModal key={index} car={{
                                id: index,
                                name: "Car name",
                                image: "/car.jpg",
                                price: "200000 DA"
                            }} />
                            {/* <CardPlaceholder /> */}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}



function CardPlaceholder() {
    return (
        <>
            <Skeleton className="rounded-md w-full aspect-[5/6]" />

        </>
    );
}