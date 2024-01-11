import { Input } from "../ui/input";

interface DatePickerProps {
    annee: { start: string, end: string };
    setAnnee: (start: string, end: string) => void;
}
export default function DatePicker(props: DatePickerProps) {
    return (
        <>
            <div className="w-full grid grid-cols-2 gap-2">
                <Input value={props.annee.start} onChange={(e) => props.setAnnee(e.target.value, props.annee.end)} type="number" placeholder="1998" />
                <Input value={props.annee.end} onChange={(e) => props.setAnnee(props.annee.start, e.target.value)} type="number" placeholder="2024" />
            </div>
        </>
    );
}