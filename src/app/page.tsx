"use client"

import Form from "@/components/form";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Results from "@/components/result";
import { useState } from "react";

export default function Home() {
  const [model, setModel] = useState<string>("");
  const [marque, setMarque] = useState<string>("");
  const [couleur, setCouleur] = useState<string>("black");
  const [energie, setEnergie] = useState<string>("essence");
  const [annee, setAnnee] = useState<{ start: string, end: string }>({ start: "2010", end: "2021" });

  const submitHandeler = () => {
    console.log("submitting")
  }
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <Hero />
      <div className="h-16" />
      <div className="container w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form
          model={model}
          marque={marque}
          couleur={couleur}
          energie={energie}
          annee={annee}
          setModel={setModel}
          setMarque={setMarque}
          setCouleur={setCouleur}
          setEnergie={setEnergie}
          setAnnee={(start: string, end: string) => setAnnee({ start, end })}

          submit={submitHandeler}
        />
        <Results cars={[]} />
      </div>
      <article className=" w-full h-screen flex justify-center items-center">
      </article>
    </>
  )
}
