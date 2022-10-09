import {NextPage} from "next";
import React from "react";

import {ProfileUserSection} from "../src/components/templates/ProfileUserSection/ProfileUser.section";
import {RecoverMainSection} from "../src/components/templates/RecoverMainSection/RecoverMain.section";


const Recover: NextPage = () => {
    return (
        <>
            <ProfileUserSection/>
            <RecoverMainSection/>
        </>
    )
}

export default Recover
