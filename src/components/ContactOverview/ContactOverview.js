import classes from "./ContactOverview.module.css"

const ContactOverview = ({contact}) => {
    return (
        <div className={classes.contact}>
            <img src={contact.photo} alt={contact.fullName} className={classes["contact-img"]}/>
            <div className={classes["contact-info "]}>
                <span className={classes["contact-name "]}>{contact.fullName}</span>
                <span className={classes["contact-job "]}>{contact.job}</span>
            </div>
        </div>
    )
}

export default ContactOverview