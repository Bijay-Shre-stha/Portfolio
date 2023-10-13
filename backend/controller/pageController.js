import User from "../model/contact.js";


const renderGetContact = async (req, res)=>{
    try {
        let users = await User.find();
        console.log(users);
        res.send(users);

    } catch (e) {
        res.status(404).send('No Contacts')
    }
}

const postContact =async (req, res) => {
    try {
        const newContact = new User(req.body);
        await newContact.save()
        console.log('Data saved:', newContact);
        res.status(201).send(newContact);
    }
    catch (err) {
        res.status(500).send("There was an issue creating a contact")
        console.log(err);
    }
};
export { renderGetContact , postContact}