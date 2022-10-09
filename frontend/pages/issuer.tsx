import {NextPage} from "next";
import {IconButtonMolecule} from "../src/components/molecules/IconButtonMolecule/IconButton.molecule";
import React, { useEffect } from "react";
import { NFTStorage, File } from 'nft.storage'
import path from 'path';
import mime from 'mime';

import exampleICON from '../src/assets/contactIcon.svg';

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;
console.log({NFT_STORAGE_KEY});

const handleOnClick = () => {
console.log('click');
}

// async function fileFromPath(filePath: String) {
//     console.log({fn: fs.readFile});
//     const content = await fs.promises.readFile(filePath)
//     const type = mime.getType(filePath)
//     return new File(["image/*"], path.basename(filePath), { type })
// }

const Issuer: NextPage = () => {
    const nftstorage = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRENWMxMGZkODY1Y2E3ZENhZjRlZUZhNjNlMmZBZjU1RjdDRTg2MmQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NTI4ODMwODYzMCwibmFtZSI6InZlcml0dXMifQ.YCChp1utrqG2J_CmXWu7_zfxGcXHAjcn9miTPH-qpOM" });

    const uploadIpfs = async (image, name, properties) => {
        // const image = await fileFromPath(`C:\Users\wesle\Pictures\nft_test.jpeg`);

        properties = {
            x: 'asdf',
            y: 'sdfkj',
            z: 'slkdjsd'
        };

        const res = await nftstorage.store({
            image,
            name: 'test-name',
            description: JSON.stringify(properties),
        });

        console.log({res});
    
    };

    var loadFile = function(event) {
        var image = document.getElementById('output');
        // image.src = URL.createObjectURL(event.target.files[0]);
        console.log({file: event.target.files[0]});
        uploadIpfs(event.target.files[0]);
    };

    return (
        <>
            <IconButtonMolecule
                iconText = 'Button'
                src={exampleICON.src}
                backgroundColor={'#322DC1'}
                borderColor={'#322DC1'}
                iconWidth='1.8rem'
                color={'#FFFFFF'}
                // width={'25.0rem'}
                height={'6.2rem'}
                onClick={() => uploadIpfs()}
            />
            <form action="/action_page.php">
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={(e) => loadFile(e)}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Issuer
