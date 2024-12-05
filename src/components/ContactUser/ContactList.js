import ContactOverview from "../ContactOverview/ContactOverview"
import classes from "./ContactList.module.css"

const ContactList = ({onGetContact}) => {
    const contacts = [
        {
            id: 1,
            fullName: "Maxime Faubert",
            photo: "https://i.pravatar.cc/300?img=11",
            email: "maxime.faubert@example.com",
            phone: "+33 6 12 34 56 78",
            address: "123 Rue de Paris, 75001 Paris, France",
            job: "Développeur Frontend"
        },
        {
            id: 2,
            fullName: "Emilie Goudreau",
            photo: "https://i.pravatar.cc/300?img=10",
            email: "emilie.goudreau@example.com",
            phone: "+33 6 98 76 54 32",
            address: "456 Avenue de Lyon, 69002 Lyon, France",
            job: "Designer UX/UI"
        },
        {
            id: 3,
            fullName: "Alice Lafond",
            photo: "https://i.pravatar.cc/300?img=32",
            email: "alice.lafond@example.com",
            phone: "+33 6 87 65 43 21",
            address: "789 Boulevard de Nice, 06000 Nice, France",
            job: "Chef de projet"
        },
        {
            id: 4,
            fullName: "Paul Guédry",
            photo: "https://i.pravatar.cc/300?img=7",
            email: "paul.guedry@example.com",
            phone: "+33 6 23 45 67 89",
            address: "321 Rue des Alpes, 74000 Annecy, France",
            job: "Développeur Fullstack"
        },
    ]

    return (
        <div className={classes.contacts}>
            <h2 className={classes["contacts-title"]}></h2>
            <ul className={classes["contacts-list"]}>
                {
                    contacts.map(contact => <li key={contact.id} onClick={() => onGetContact(contact)}> <ContactOverview contact={contact} /> </li>)
                }
            </ul>
        </div>
    )
}

export default ContactList