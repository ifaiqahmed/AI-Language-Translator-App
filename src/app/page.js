"use client";
import Image from "next/image";
import { Dropdown } from "@/app/components/dropdown";
import { useState } from "react";

const languageOptions = [
  {
    value: "en",
    label: "English"
  },
  {
    value: "es",
    label: "Spanish"
  },
  {
    value: "fr",
    label: "French"
  }
]

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState('en');
  const [languageTo, setLanguageTo] = useState('es');
  const [inputText, setInputText] = useState("");
  const [transaltedText, setTranslatedText] = useState("")

  const handleLanguageFromChange = (value)=> {
    setLanguageFrom(value);
  }
  const handleLanguageToChange = (value)=> {
    setLanguageTo(value);
  }
  const handleInputChange = (e)=> {
    const newText= e.target.value;
    setInputText(newText)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form>
    <div className="flex flex-row gap-4" >

    <div className="container flex flex-col">
      <Dropdown name="languageFrom" value={languageFrom} options={languageOptions} onChange={handleLanguageFromChange}  />
      <textarea placeholder="Enter text to translate" className="border border-slate-800 rounded-md p-4 lg:w-[400px]" value={inputText} onChange={handleInputChange} />
    </div>

    <div className="container flex flex-col">
    <Dropdown name="languageTo" value={languageTo} options={languageOptions} onChange={handleLanguageToChange}  />
      <textarea placeholder="Translated text will appear here" className="border border-slate-800 rounded-md p-4 lg:w-[400px]" value={transaltedText} />
    </div>
    
    </div>

    <button type="submit" className="p-4 rounded-md bg-slate-800 text-white" >
Translate
    </button>
    </form>

       </main>
    </div>
  );
}
