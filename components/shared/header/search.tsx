
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectItem,SelectContent, SelectTrigger, SelectValue, Select } from "@/components/ui/select"
import { APP_NAME } from "@/lib/constants"
import { SearchIcon } from "lucide-react"

const categories = ['men' , 'women' , 'kids' , 'accessories' ]
export default async function Search() {
    return(
        <form action="/search"  method="get" className="flex items-stretch h-10">
    <Select name="category">
    <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded">
       < SelectValue placeholder="All" />
    </SelectTrigger>

    <SelectContent position="popper">
        <SelectItem value="all">
All  </SelectItem>
 {categories.map((category) => (
    <SelectItem key={category} value={category}>
        {category}
    </SelectItem>
 ))}
    </SelectContent>
        </Select>
        <Input
        className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
         placeholder={`Search Site ${APP_NAME}`} 
         name="q"
         type="search"        
        />
        <Button type="submit" className="bg-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-3 ">
            <SearchIcon className="w-6 h-6"/>

            </Button>
           </form>
    
    )
}