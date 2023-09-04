import { useData } from "../hooks/useRecipeAPI"
import { fetchTypes } from "../hooks/useRecipeAPI";

export default function HomePage() {
    const meal = useData({ type: fetchTypes.search, query:"chocolate" });

    return (
        <div>
            <h1>HomePage</h1>
        </div>
        
    )
}