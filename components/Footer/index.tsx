import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "./Footer.module.scss";

const url =
    "https://fun.us1.list-manage.com/subscribe/post?u=fd780084ff583a4d5cd703a23&amp;id=8f68958589";

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        © 2021 PEGZ / <a href="https:/www.mattfurie.com">Matt Furie</a>/ <a href="https:/www.chainsaw.fun">Chain/Saw</a>
        <div>
            <h3>Sign Up For Drops</h3>
            <MailchimpSubscribe url={url} />
        </div>
    </footer>
);

export default Footer;
