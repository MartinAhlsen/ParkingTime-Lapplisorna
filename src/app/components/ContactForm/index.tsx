import React, { useState } from "react";
import Button from "../Button";

interface ContactFormData {
  name: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  reasonForContact: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    reasonForContact: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors: Partial<ContactFormData> = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Here you would handle the form submission, e.g., send data to an API
      console.log("Form data submitted:", formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        jobTitle: "",
        email: "",
        phoneNumber: "",
        reasonForContact: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      {submitted && (
        <p className="text-green-500 mb-4">Your message has been sent!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            First and last name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First and last name"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-pt-primary rounded-md p2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="wrapper flex flex-col md:flex-row md:gap-3">
          <div className="mb-4 p1">
            <label className="block text-gray-700 mb-2 p1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex. name@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-pt-primary rounded-md p2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 p1">
            <label className="block text-gray-700 mb-2 p1" htmlFor="email">
              Phone Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="+46708123456"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-pt-primary rounded-md p2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <select name="reasonForContact" id="reasonForContact">
            <option className="h7" value="choose">
              Choose from
            </option>
            <option className="h7" value="newClient">
              New Client
            </option>
            <option className="h7" value="support">
              Support
            </option>
            <option className="h7" value="feedback">
              Feedback
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Write us a message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-pt-primary rounded-md p2"
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            required
            className="mr-2"
            type="checkbox"
            id="terms"
            name="terms"
          />
          <label htmlFor="terms">
            I accept the <a className="underline">Terms</a>{" "}
          </label>
        </div>
        <Button text={"Send message"} type={"submit"} colorTheme="dark" />
      </form>
    </div>
  );
};

export default ContactForm;
