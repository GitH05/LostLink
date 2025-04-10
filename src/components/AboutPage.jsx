import React from 'react'
import './AboutPage.css'
import I5544 from '../assets/5544.jpeg'
import I5545 from '../assets/5545.jpeg'
import I5546 from '../assets/5546.jpeg'
import I5555 from '../assets/5555.jpeg'
import Ik from '../assets/k.jpeg'
const AboutPage = () => {
  return (
    <div className='aboutpage'>
     
    
    <div className="team-container">
        <div className="first-row">
            <div className="team-member">
                <img src={Ik}  alt="kajal Dubey Professor of CSE Department" width="250" height="300"/>
                <div className="member-details">
                    <h3>KAJAL DUBEY</h3>
                    <p>ROLE: Professor | PROJECT GUIDE</p>
                    <p>Email: <a href="mailto:kajaldubey@gmail.com">kajaldubey@gmail.com</a></p>
                    <p className="quote">"Every lost item has a story. We're here to write the happy ending."</p>
                </div>
            </div>
        </div>

        <div className="remaining-row">
            <div className="team-member">
                <img src={I5544} alt="Santosh Kumar Dhawal student of CSE" width="250" height="300"/>
                <div className="member-details">
                    <h3>Santosh Kumar Dhawal</h3>
                    <p>Role: Frontend | Team Management</p>
                    <p>Email: <a href="mailto:santoshdhawal05@gmail.com">santoshdhawal05@gmail.com</a></p>
                    <p className="quote">"Technology should bring people together, not just things."</p>
                </div>
            </div>

            <div className="team-member">
                <img src={I5545} alt="Ajamer Dhuniya student of CSE" width="250" height="300"/>
                <div className="member-details">
                    <h3>Ajamer Dhuniya</h3>
                    <p>Role: Backend</p>
                    <p>Email: <a href="mailto:ajamer@gmail.com">ajamer@gmail.com</a></p>
                    <p className="quote">"Building connections, one lost item at a time."</p>
                </div>
            </div>

            <div className="team-member">
                <img src={I5546}  alt="Ashish Kumar Jha student of CSE" width="250" height="300"/>
                <div className="member-details">
                    <h3>Ashish Kumar Jha</h3>
                    <p>Role: Backend | Project Management</p>
                    <p>Email: <a href="mailto:ashish@gmail.com">ashish@gmail.com</a></p>
                    <p className="quote">"Lost today, found tomorrow. That's the power of community."</p>
                </div>
            </div>

            <div className="team-member">
                <img src={I5555}  alt="Niranjan Kumar Barai student of CSE" width="250" height="300"/>
                <div className="member-details">
                    <h3>Niranjan Kumar Barai</h3>
                    <p>Role: Backend | Documentation</p>
                    <p>Email: <a href="mailto:niranjankumarabarai456@gmail.com">niranjankumarabarai456@gmail.com</a></p>
                    <p className="quote">"Data doesn't just find items, it reunites hearts."</p>
                </div>
            </div>

        </div>
    </div>

    <div className="description">
        <h2>About LostLink</h2>
        <p>LostLink is a revolutionary platform designed to bridge the gap between lost items and their rightful owners. We harness the power of community and cutting-edge technology to create a seamless, user-friendly experience for both finders and seekers.</p>
        <h3>Our Mission</h3>
        <p>At LostLink, we believe that every lost item has a story and a home. Our mission is to leverage technology and human kindness to reunite people with their cherished possessions, fostering a global community of helpful individuals in the process.</p>
        <h3>How It Works</h3>
        <ul>
            <li><strong>Lost Something?</strong> Easily report your lost item with detailed descriptions and possible locations.</li>
            <li><strong>Found Something?</strong> Upload images and information about found items to help them find their way home.</li>
            <li><strong>Smart Matching:</strong> Our AI-powered system connects lost reports with found items, increasing the chances of successful reunions.</li>
            <li><strong>Secure Communication:</strong> We facilitate safe, anonymous communication between finders and owners.</li>
            <li><strong>Community Engagement:</strong> Build karma points by helping others, creating a positive cycle of goodwill.</li>
        </ul>
        <h3>Why Choose LostLink?</h3>
        <p>LostLink isn't just a lost and found platform; it's a community-driven initiative that brings out the best in people. By using our service, you're not only increasing your chances of recovering lost items but also contributing to a more connected, caring world.</p>
        <p>Join us in our mission to turn the distress of loss into the joy of reunion.</p>
    </div>

    </div>
  )
}

export default AboutPage
