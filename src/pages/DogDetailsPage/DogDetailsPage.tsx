import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import {adoptService} from "../../services/adopt.service";
import {DogModel} from "../../models/adopt.model";
import "../DogDetailsPage/DogDetailsPage.scss"

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

    const goToApplyPage = (id: string | undefined) => {
        navigate(`/dog/${id}/apply`);
    };

    const goToWalkPage = (id: string | undefined) => {
        navigate(`/dog/${id}/walk`);
    };

    return (
        <Page title="A kutya adatai">
            <div>
                <div id="wrapper2">
                    <div id="first2">
                        <img id="image2"
                            src={dog?.imageUrl ? dog?.imageUrl : "/default-user.png"}
                            alt={`dog`}
                        />
                    </div>
                    <div id="second2">
                        <h1>{dog?.name}</h1>
                        <h2>Fajta: {dog?.breed}</h2>
                        <h2>Nem: {dog?.gender}</h2>
                        <h2>Ivartalanított? {dog?.castrated==true ?"Igen" : "Nem"}</h2>
                        <h2>Szín: {dog?.color}</h2>
                        <h2>Születési dátum: {dog?.birthDate.toString()}</h2>
                    </div>
                </div>
                    <h2>Ismertető:</h2>
                    <p id="p2">{dog?.description}</p>
                <div>
                    <Button className="w-30 mb-3 btn-secondary" style={{marginRight: 10}} onClick={() => goToApplyPage(dog?.id.toString())}>
                        Örökbefogadom
                    </Button>
                
                    <Button className="w-30 mb-3 btn-secondary" style={{marginRight: 10}} onClick={() => goToWalkPage(dog?.id.toString())}>
                        Jelentkezek sétáltatásra
                    </Button>
                
                    <Button className="w-30 mb-3 btn-secondary" style={{marginRight: 10}} onClick={goToAdoptPage}>
                        Vissza
                    </Button>
                </div>
            </div>
        </Page>
    );
};

export default DogDetailsPage;