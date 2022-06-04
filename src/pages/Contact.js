import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div> */}
      <div className="rightSide">
        <h1> FIR Form</h1>

        <form id="contact-form" method="POST">
        <label for="district">Choose a District:</label>

        <select name="district" id="district">
        <option value="Bangalore">Bangalore</option>
        <option value="Mysuru">Mysuru</option>
        <option value="Mangaluru">Mangaluru</option>
        <option value="Hassan">Hassan</option>
        </select>
        <label for="district">Choose Police station</label>

        <select name="district" id="district">
        <option value="Jayanagar">Jayanagar</option>
        <option value="Majestic">Majestic</option>
        <option value="Lalabagh">Lalbagh</option>
        <option value="indiranagar">indiranagar</option>
        </select>
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="name">Address</label>
          <input name="name" placeholder="Enter full address..." type="text" />
          <label htmlFor="name">Aadhar number</label>
          <input name="name" placeholder="Enter Aadhar number" type="number" />
          <label htmlFor="name">FIR case number</label>
          <input name="name" placeholder="Enter case number" type="number" />
          <label htmlFor="name">Section</label>
          <input name="name" placeholder="Enter Section" type="text" />
          <label for="TodayDate">Today's Date</label>
           <input type="date" id="birthday" name="birthday"></input>
           <label for="Time">Incident Time</label>
           <input type="time" id="Time" name="Time"></input>
          <label for="w3review">Description of case/FIR report:</label>
          <textarea id="Description" name="description" rows="9" cols="80">
           Write FIR here......
          </textarea>
          <button type="submit"> Save FIR</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
