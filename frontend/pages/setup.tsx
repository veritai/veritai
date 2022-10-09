import {NextPage} from "next";
import React from "react";

import {ProfileUserSection} from "../src/components/templates/ProfileUserSection/ProfileUser.section";
import {SetupMainSection} from "../src/components/templates/SetupMainSection/SetupMain.section";

const handleOnClick = () => {
    console.log('click');
}

const SetUp: NextPage = () => {
    return (
        <>
            <ProfileUserSection/>
            <SetupMainSection/>
        </>
    )
}

export default SetUp
