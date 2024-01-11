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

export default function EnergySelector() {
    return (
        <Select name="energy-picker" defaultValue="essence">
            <SelectTrigger>
                <SelectValue placeholder="color" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Energy</SelectLabel>
                    <SelectItem value="essence">essence</SelectItem>
                    <SelectItem value="diesel">diesel</SelectItem>
                    <SelectItem value="GPL">GPL</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
