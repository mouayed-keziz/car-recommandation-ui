"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

interface ColorSelectorProps {
    color: string;
    setColor: (value: string) => void;
}

export default function ColorSelector(props: ColorSelectorProps) {
    return (
        <>
            <Select name="color-picker" defaultValue="black" value={props.color} onValueChange={(value) => props.setColor(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="color" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Couleur</SelectLabel>
                        <SelectItem value="black">black</SelectItem>
                        <SelectItem value="red">red</SelectItem>
                        <SelectItem value="green">green</SelectItem>
                        <SelectItem value="blue">blue</SelectItem>
                        <SelectItem value="violet">violet</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}
