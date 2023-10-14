import User from "../model/contact.js";


const renderGetContact = async (req, res) => {
    try {
        let users = await User.find();
        console.log(users);
        res.send(users);

    } catch (e) {
        res.status(404).send('No Contacts')
    }
}

const postContact = async (req, res) => {

    const { name, email, phone, message } = req.body;
    try {

        const newContact = new User({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: 'Form submitted successfully' });

    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'An error occurred while saving the contact' });
    }
    // try {
    //     // Create a new document in your MongoDB collection
    //     const newContact = new User(req.body);
    //     await newContact.save();

    //     res.status(201).json({ message: 'Form submitted successfully' });
    // } catch (error) {
    //     console.error('Error saving contact:', error);
    //     res.status(500).json({ message: 'An error occurred while saving the contact' });
    // }
};
export { renderGetContact, postContact }