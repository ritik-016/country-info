export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);
    }

    return (
     <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
            <input type="text"
            className="form-control" 
            required 
            autoComplete="false" 
            placeholder="Enter your name"
            name="username"/>
            
            <input type="text"
            className="form-control" 
            required 
            autoComplete="false" 
            placeholder="Enter your email"
            name="email"/>

            <textarea name="message" 
            placeholder="Enter your message" 
            rows="10" 
            className="form-control" 
            autoComplete="off"
            required></textarea>

            <button type="submit" value="submit">Submit</button>

        </form>
        </div>
     </section>
    )
}