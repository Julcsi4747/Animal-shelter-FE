import {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import DogCard from "../../components/dog-card/DogCard"
import AccessController from "../../components/access-controller/AccessController"
import { DogModel } from "../../models/adopt.model";
import { adoptService } from "../../services/adopt.service";


const AdoptPage = () => {
    const [dogs, setDogs] = useState<DogModel[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchDogs = useCallback(async () => {
        setLoading(true);
        setDogs(await adoptService.getDogs());
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchDogs = async () => {
            setDogs(await adoptService.getDogs());
            setLoading(false);
        };
        

        fetchDogs();
    }, []);

    const goToDogPage = () => {
        navigate("/dog/create");
    };

    const handleDeleteDog = async (id: number) => {
        await adoptService.deleteDog(id.toString());
        fetchDogs();
    };

    return (
        <Page title="Adopt"  loading={loading}>
            <AccessController allowedFor={["ADMIN"]}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Button className="w-100 mb-3" onClick={goToDogPage}>
              Create Dog
            </Button>
          </div>
        </div>
        </AccessController>
            <div className="row">
            {dogs.map((dog) => (
          <div key={dog.id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
            <DogCard
              dog={dog}
              handleDeleteDog={handleDeleteDog}
            />
              </div>
        ))}
      </div>
        </Page>
    );
};

export default AdoptPage;