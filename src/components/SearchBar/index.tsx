import { useState } from "react"
import { LuSearch } from "react-icons/lu"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="relative w-full max-w-[25.75rem] ">
        <input
          type="text"
          className="w-full rounded-md bg-gray-100 py-2 pl-10 pr-4 align-middle text-[#2E332F]
            placeholder:text-[#747681] focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Procurar..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <LuSearch size={20} color="#747681" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )
}
