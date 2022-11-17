import PricingCard from '../pricing_card/pricing_card';
import styles from './pricing_section.module.scss'

const pricing_details = [
    {
        "heading": "Free",
        "features": [
            "No. of screens at a time - 1",
            "Global & native content",
            "5 downloads per device",
            "Ad Experience - Exists"
        ],
        "price": "0",
        "buy_button": "Get started",
        "btn_bg": "rgba(255, 255, 255, 0)",
        "bd": "rgba(28, 116, 203, 1)"
    },
    {
        "heading": "Standard",
        "features": [
            "No. of screens at a time - 2",
            "Global & native content",
            "100 downloads per device",
            "Ad Experience - Ad free experience"
        ],
        "price": "599",
        "buy_button": "Buy Now",
        "btn_bg": "rgba(0, 31, 62, 1)",
        "bd": "rgba(28, 116, 203, 1)"
    },
    {
        "heading": "Premium (Recommended)",
        "features": [
            "No. of screens at a time - 4",
            "Global & native content",
            "Unlimited downloads!",
            "Ad Experience - Ad free experience"
        ],
        "price": "649",
        "buy_button": "Buy now",
        "btn_bg": "rgba(0, 125, 249, 1)",
        "bd": "rgba(28, 116, 203, 1)"
    }
]

const PricingSection = () => {
    return ( 
        <div className={styles.pricing}>
            <div className={styles.header}>
                <p>Pricing</p>
                <h1>Start using <span>Motion</span> for free</h1>
                <p>Switch to premium plans to access advanced features & uninterrupted streaming</p>
            </div>
            <div className={styles.cards}>
                {
                    pricing_details.map((item,index) => (
                        <PricingCard key={index} item={item} />
                    ))
                }
            </div>
        </div>
    );
}
 
export default PricingSection;