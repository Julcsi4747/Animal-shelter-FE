import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";

const ProfilePage = () => {
    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => setUser(await usersService.getMe());
        fetchUser();
    }, []);

    const goToProfileUpdatePage = () => {
        navigate("/user/update");
    };

    return (
        <Page title="Profilom">
            <div>
                <div>
                    <img
                        src={user?.imageUrl ? user?.imageUrl : "/default-user.png"}
                        alt={`user`}
                    />
                </div>
                <h1>{user?.name}</h1>
                <h2>{user?.email}</h2>
                <div>
                    <Button className="w-100 mb-3" onClick={goToProfileUpdatePage}>
                        Szerkesztés
                    </Button>
                </div>
            </div>
        </Page>
    );
};

export default ProfilePage;