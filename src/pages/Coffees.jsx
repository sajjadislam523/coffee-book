import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-2 lg:grid-cols-3">
            {data.map((coffee) => (
                <Card key={coffee.id} coffee={coffee} />
            ))}
        </div>
    );
};

export default Coffees;
