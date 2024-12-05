import classes from "./ContactDetails.module.css"

const ContactDetails = ({contact}) => {
    return (
        <div className={classes["contact-details"]}>
            <div className={classes["contact-card"]}>
                <div className={classes["contact-card-left"]}>
                    <img src={contact.photo} alt={contact.fullName} className={classes["contact-image"]}/>
                </div>
                <div className={classes["contact-card-right"]}>
                    <p className={classes["contact-name"]}>{contact.fullName}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Job :</strong> {contact.job}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Email :</strong> {contact.email}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Téléphone :</strong>{contact.phone}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Adresse :</strong>{contact.address}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails