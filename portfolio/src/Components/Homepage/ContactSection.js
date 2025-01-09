import React, {useState} from "react";

const ContactSection = () => {

  const [hover, setHover] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "fe487343-d493-4237-84f1-47453b21ef71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("There has been an error submitting your form. Try again.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: '2rem',
        color: "#333",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
          color:"white",
          fontFamily:"Courier New"
        }}
      >
        Contact Me
      </h1>
      <p style={{ textAlign: "center", fontSize: "1rem", color:'white', fontFamily:'monospace' }}>
        <span style={{ fontWeight: "bold"}}>Email:</span>{" "}
        <a
          href="mailto:joerhodesv2025@gmail.com"
          style={{ color: "#99f", textDecoration: "none" }}
        >
          joerhodesv2025@gmail.com
        </a>
      </p>
      <p style={{ textAlign: "center", fontSize: "1rem", marginBottom: "1rem", color:'white', fontFamily:"monspace" }}>
        <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
        <a
          href="tel:(310)863-9920"
          style={{ color: "#99f", textDecoration: "none" }}
        >
          (310) 863-9920
        </a>
      </p>

      <form
        onSubmit={onSubmit}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
          borderRadius: "8px",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            flex: "1 1 45%", 
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div
          style={{
            flex: "1 1 50%", // Right column width
          }}
        >
          <textarea
            placeholder="Message"
            name="Message"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
              minHeight: "187px",
              resize: "vertical",
            }}
          ></textarea>
        </div>
        <div
          style={{
            flex: "1 1 100%", 
            textAlign: "center",
          }}
        >
          <input
            type="submit"
            value="Send"
            style={{
              color: "#fff",
              padding: "0.7rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
              backgroundColor: hover ? '#66c' : '#99f',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
