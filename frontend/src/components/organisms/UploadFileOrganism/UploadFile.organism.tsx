import {UploadFile, UploadFileContent, UploadFileTitle, UploadFileWrapper} from "./UploadFile.styled";
import {PropertyDataProperties, PropertyDataTitle} from "../PropertyDataOrganism/PropertyData.styled";
import {TokenPropertyAtom} from "../../atoms/TokenPropertyAtom/TokenProperty.atom";

export const UploadFileOrganism = () => {
    return (
        <UploadFileWrapper>
            <UploadFileTitle>
                <h3>Category</h3>
                <h3>NFT or SBT Name</h3>
            </UploadFileTitle>
            <UploadFileContent>
               <UploadFile></UploadFile>
            </UploadFileContent>
        </UploadFileWrapper>
    )
}
