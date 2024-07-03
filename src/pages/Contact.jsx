import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Handle form submission
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;