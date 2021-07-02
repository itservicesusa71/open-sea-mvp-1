import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import {
    API_URL,
    CRYPTOPUNK_TOKENS_QUERY,
    CRYPTOPUNK_TOKENS_IN_HOME,
    SOLD_TOKENS_IN_HOME,
    SOLD_TOKENS_QUERY,
    UPCOMING_TOKENS_QUERY,
    UPCOMING_TOKENS_IN_HOME,
} from "../utils/constants";
import { NFT, Slide } from "../types";
import Auctions from "../components/Auctions";
import ActiveAuctions from "../components/ActiveAuctions";
import Slider from "../components/Slider";
import HeadWithImage from "../components/HeadWithImage";
// index page start
export const Home: React.FC<{
    assets: NFT[];
}> = ({ assets }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chainsaw NFT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadWithImage />
            {/* <Slider slides={slides} /> */}
            <div className={styles.centerItem}>
                <h2>&nbsp;</h2>
                <h2>Whitehot Magazine NFT Auction</h2>
                <h2>Curated by Noah Becker</h2>
            </div>
            {(assets?.length > 0) && (
                <Auctions assets={assets} title="Auctions" link="/whitehot/0" />
            )}
            
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    /** Get tokens with auctions */
    const whtieTokenRes = await fetch(
        `${API_URL}/tokens?_limit=${CRYPTOPUNK_TOKENS_IN_HOME}&${CRYPTOPUNK_TOKENS_QUERY}`,
    );
    const whiteTokens = await whtieTokenRes.json();
    
    return {
        props: {
            assets: whiteTokens
        },
    };
}

const earningsInBnb = earningsInDollars/bnbPrice

earningsInBnb is called to display information

const earningsInDollars = tikiVolume == 0 ?
(holdings/1000000000)220000 : (holdings/1000000000)(tikiVolume*0.11)

tikiVolume you get from props

This gets the volume

async function getTikiVolume() {
const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tiki-token&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=false')
const resolved = await res.json()
const volume = resolved['tiki-token'].usd_24h_vol
return volume
}

currently since we do not have a contract, leave it as it is

however

to display "EARNINGS"

call 'earningsInBnb'


For example,

<p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas(earningsInBnb.toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Day</span>

This will display "EarningsinBNB" (in yellow) BNB (in green) perday (in gray)