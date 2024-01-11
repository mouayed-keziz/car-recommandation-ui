"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ColorSelector from "@/components/select/color";
import EnergySelector from "@/components/select/energy";
import { Label } from "./ui/label";
import DatePicker from "./select/date";


interface FormProps {
    model: string;
    marque: string;
    couleur: string;
    energie: string;
    annee: { start: string, end: string };
    setModel: (value: string) => void;
    setMarque: (value: string) => void;
    setCouleur: (value: string) => void;
    setEnergie: (value: string) => void;
    setAnnee: (start: string, end: string) => void;
    submit: () => void;
}

export default function Form(props: FormProps) {
    return (
        <>
            <div className="border rounded-md p-6">
                <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                    Form input :
                </h3>
                <div className="h-16" />

                <form className="p-6 h-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full mt-2">
                        <Label className="text-start">model</Label>
                        <Input value={props.model} onChange={(e) => props.setModel(e.target.value)} type="text" placeholder="model" />
                    </div>
                    <div className="w-full mt-2">
                        <Label className="text-start">marque</Label>
                        <Input type="text" placeholder="marque" />
                    </div>
                    <div className="w-full mt-2">
                        <Label className="text-start">couleur</Label>
                        <ColorSelector
                            color={props.couleur}
                            setColor={props.setCouleur}
                        />
                    </div>
                    <div className="w-full mt-2">
                        <Label className="text-start">energie</Label>
                        <EnergySelector />
                    </div>
                    <div className="w-full mt-2">
                        <Label className="text-start">annee</Label>
                        <DatePicker
                            annee={props.annee}
                            setAnnee={props.setAnnee}
                        />
                    </div>
                    <Button className="w-full">submit</Button>
                </form>
            </div>
        </>
    );
}