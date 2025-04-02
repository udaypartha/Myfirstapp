import { useState } from "react";
function FormHandling(){
    const[formData,setFormData] = useState({
        name:"",
        email: "",
        password: ""
    });
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log("form submitted:",formData);
    }
    return(
        <>
        <h1>Form Handling</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            <br />
            <button type="submit">submit</button>
        </form>
        </>
    )
     

}
export default FormHandling;