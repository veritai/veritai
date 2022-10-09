import {NextPage} from "next";
import {ProfileUserSection} from "../src/components/templates/ProfileUserSection/ProfileUser.section";
import {ProfileTokensSection} from "../src/components/templates/ProfileTokensSection/ProfileToken.section";

const Profile: NextPage = () => {
    return (
        <>
            <ProfileUserSection/>
            <ProfileTokensSection/>
        </>
    )
}

export default Profile
