import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import {adoptService} from "../../services/adopt.service";
import {DogModel} from "../../models/adopt.model";

const DogDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [dog, setDog] = useState<DogModel>();

    useEffect(() => {
        const fetchDog = async (id: string) =>
            setDog(await adoptService.getDog(id.toString()));
        if (id) {
            fetchDog(id);
        }
    }, [id]);

    const goToAdoptPage = () => {
        navigate("/adopt");
    };

    return (
        <Page title="A kutya adatai">
            <div>
                <div>
                    <img
                        src={dog?.imageUrl ? dog?.imageUrl : "/default-user.png"}
                        alt={`dog`}
                    />
                </div>
                <h1>{dog?.name}</h1>
                <h2>{dog?.breed}</h2>
                <h2>{dog?.gender}</h2>
                <h2>{dog?.castrated}</h2>
                <h2>{dog?.color}</h2>
                <h2>{dog?.birthDate.toString()}</h2>
                <p>{dog?.description}</p>
                <div>
                    <Button className="w-100 mb-3" onClick={goToAdoptPage}>
                        Vissza
                    </Button>
                </div>
            </div>
        </Page>
    );
};

export default DogDetailsPage;
