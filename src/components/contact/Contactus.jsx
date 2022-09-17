import React from 'react'
import './contact.css'
export default function contactus() {
  return (
   <>
    <form>
        <label> NAME</label>
        <input type="text" placeholder='name'></input>
        <label>E-MAIL</label>
        <input type="email" placeholder='email'></input>
        <label>PLAN</label>
        <input type="text" placeholder='plan'></input>
        <label>DESCRIPTION</label>
        <textarea rows='6' type="text" placeholder='description of the trip'></textarea>
        <button type="submit" className="sub">Submit</button>
    </form>
   </>
  )
}
