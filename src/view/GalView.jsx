import { useState, useEffect } from "react";
import CardComponent from '../component/CardComponent'
import FilterComponent from "../component/FilterComponent";
import LoadingSkeleton from "../component/LoadingSkeleton"
import { IMAGES, CATEGORIES } from "../Data";




export default function GalView() {
    const [selectedCategory, setSelectedCategory] = useState("toutes");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadingSimulation = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(loadingSimulation);


    }, [])
    const filteredImages =
        selectedCategory === "toutes"
            ? IMAGES
            : IMAGES.filter((img) => img.categories.includes(selectedCategory));




    return (
        <div>
            <h1>Galerie d'image</h1>
            <div>
                <h3>Filter par categories</h3>
                <FilterComponent categories={CATEGORIES} onFilter={setSelectedCategory} />

            </div>


            <div



                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    gap: "10px",
                }}
            >


                {loading
                    ?
                    Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
                    :
                    filteredImages.map((image) => <CardComponent key={image.id} image={image} />)}

            </div>

        </div>



    );
}
