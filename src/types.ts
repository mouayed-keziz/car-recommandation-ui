export interface Car {
    car: {
        id: number,
        name: string,
        price: string,
        image: string,
        mouteur?: string,
        energie?: string,
        kilometrage?: string,
        boite?: string,
        etat?: string,
        annee?: string,
        couleur?: string,
    }
}

export interface CarGroup {
    cars: Car[]
}