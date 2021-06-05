import { utils } from "ethers";
import Link from "next/link";
import { NFTFile, OrderFromAPI } from "../../types";
import VideoPlayer from "../VideoPlayer";
import styles from "./AssetOnDash.module.scss";
import Countdown from "../Countdown";

const AssetOnDash: React.FC<{
    address: string;
    tokenId: string;
    description: string;
    imageUrl: string;
    name: string;
    slug: string;
    reserve: string;
    artist?: string;
    onSale?: boolean;
    file?: NFTFile;
    sold?: boolean;
    soldFor: string;
    salesOrder?: OrderFromAPI;
    currentBid?: number;
}> = ({
    address,
    tokenId,
    imageUrl,
    name,
    slug,
    reserve,
    artist,
    onSale,
    file,
    sold,
    soldFor,
    salesOrder,
    currentBid,
}) => {
    return (
        <Link className={styles.nftIframe} href={`/asset/${slug}`}>
            <a>
                <div className={styles.asset}>
                    <div className={styles.imageContainer}>
                        {file && file.type === "video" && file.link && (
                            <VideoPlayer playbackId={file.link} display />
                        )}
                        {!(file && file.type === "video" && file.link) && (
                            <img src={imageUrl} alt={name} />
                        )}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default AssetOnDash;
