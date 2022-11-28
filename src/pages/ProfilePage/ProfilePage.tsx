import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import "../ProfilePage/ProfilePage.scss"

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
                <div id="wrapper1">
                <div id="first1">
                    <img id="image"
                        src={user?.imageUrl ? user?.imageUrl : "/default-user.png"}
                        alt={`user`}
                    />
                </div>
                <div id="second1">
                <h1>Felhasználó név: {user?.name}</h1>
                <h1>E-mail cím: {user?.email}</h1>
                </div>
                </div>
                <div>
                    <Button className="w-100 mb-3 btn-secondary" onClick={goToProfileUpdatePage}>
                        Szerkesztés
                    </Button>
                </div>
            </div>
        </Page>
    );
};

export default ProfilePage;