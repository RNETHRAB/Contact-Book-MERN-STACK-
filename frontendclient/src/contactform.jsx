import React, {useEffect, useState} from 'react'

const contactform = ({onSubmit, Existing}) => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

useEffect(() => {
    if(Existing){
        setName(Existing.name);
        setEmail(Existing.email);
        setPhone(Existing.phone);
    }}, [Existing]);

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name,phone,email});
    setName("");
    setEmail("");
    setPhone("");

};

console.log(name, email, phone);
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} required placeholder='Name:' onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={email} required placeholder='Email:' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={phone} required placeholder='Phone:' onChange={(e) => setPhone(e.target.value)}/>
        <button type='submit'>{Existing ? 'Update' : 'Submit'}</button>
    </form>
  )
};

export default contactform;