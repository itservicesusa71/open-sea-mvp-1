import Head from "next/head";

const defaultImg = "https://www.pegz.fun/images/logo.png";

const HeadWithImage: React.FC<{
    imageUrl?: string;
    title?: string;
    description?: string;
}> = ({ title, description, imageUrl }) => {
    return (
        <Head>
            <title>{title || "PegzFun"}</title>
            <meta charSet="utf-8" />
            <meta
                name="description"
                content={description || "The Curated #NFT Marketplace"}
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="theme-color" content="#000000" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || "PegzFun"} />
            <meta
                property="og:description"
                content={description || "The Curated #NFT Marketplace"}
            />
            <meta property="og:image" content={imageUrl || defaultImg} />
            <meta name="twitter:image:src" content={imageUrl || defaultImg} />
            <meta name="twitter:image" content={imageUrl || defaultImg} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@PegzFunNFT" />
        </Head>
    );
};

export default HeadWithImage;
