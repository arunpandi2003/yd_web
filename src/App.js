import React from 'react';
import './App.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail  } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import img from './img/yogadinesh.jpg';
import emailjs from '@emailjs/browser';
import ui from './img/Ui-ux.png';
import express from './img/express.png';
import grapic from './img/grapic.png';
import java from './img/java.png';
import ps from './img/ps.png';
import python from './img/python.png';
import react from './img/react.png';
import node from './img/node.png';

function App() {
  const el = useRef(null);
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_13w0o14', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI designer', 'Front-end Developer', 'Python Developer...'],
      typeSpeed: 70,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };

  }, []);
  return (
    <main>
      <section className='home-page'>
        <header className='header'>
          <div className='logo'>
            <img src="" alt="" height='50px' width='50px' />
            <p>YD Web</p>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skils">Skils</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
        </header>
        <div className='home-main-content'>
          <div className='home-content'>
            <h1>Hello it's Me</h1>
            <h2>Yoga Dinesh</h2>
            <h3>And i'm a <span ref={el}></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Omnis neque consectetur doloribus sed. Dolore nulla consequuntur tenetur magnam aperiam</p>

            <div className='social-media-links'>
              <li><FaInstagram /></li>
              <li><FaXTwitter /></li>
              <li><FaLinkedinIn /></li>
              <li><FaGithub /></li>

            </div>
            <br />
            <p className='button'><a href="#about-me">About Me</a></p>

          </div>
          <div className='home-img'>
            <img src={img} alt="" height='400px' width='400px' />

          </div>

        </div>

      </section>
      <section id='about-me'>
        <div className='about-me-img'>
          <img src="" alt="" height='400px' width='400px' />
          <h2>Yoga Dinesh</h2>
          <p className='resume-btn'><a href="smaple.pdf" target='blank'>Resume</a></p>

        </div>
        <div className='about-me-content'>
          <div className='about-me-title'>
            <h2>About <span>Me</span></h2>
            <p>Yoga Dinesh</p>
          </div>
          <div className='about-me-contentinfo'>
            <p>I am yogadinesh and i experienced educator and designer specializing in Computer Science and Engineering. Since July 2019, he has served as an Assistant Professor at Bharath Niketan Engineering College. Previously, he worked at Panimalar Engineering College from June 2016 to June 2019 in the same role. Yoga Dinesh also has industry experience as a Graphic and UI Designer at Business Media Nexus from June 2015 to July 2016. His expertise bridges technical education and creative design, making him proficient in both academic and practical applications of his field.</p>
            <p className='btn'><a href="#projects">Project</a></p>

          </div>

        </div>

      </section>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='project-main'>
          <div className='project-1'>
            <img src={ui} alt=""  height='298px' width='598px'/>
            <div className='project-details-item'>
              <h3>UI and UX Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum optio vel nesciunt possimus quidem mollitia laboriosam, quod, ab odio soluta vero nulla beatae, voluptas illum. Tenetur dolorem magni voluptas harum! Sit, eius minus aperiam necessitatibus dolore tenetur fugit unde, error incidunt beatae illum, exercitationem blanditiis non amet quod nesciunt!
              </p>
            </div>
          </div>
          <div className='project-2'>
          <img src={ui} alt=""  height='298px' width='598px'/>
            <div className='project-details-item'>
              <h3>UI and UX Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum optio vel nesciunt possimus quidem mollitia laboriosam, quod, ab odio soluta vero nulla beatae, voluptas illum. Tenetur dolorem magni voluptas harum! Sit, eius minus aperiam necessitatibus dolore tenetur fugit unde, error incidunt beatae illum, exercitationem blanditiis non amet quod nesciunt!
              </p>
            </div>
          </div>
          <div className='project-3'>
          <img src={ui} alt=""  height='298px' width='598px'/>
            <div className='project-details-item'>
              <h3>UI and UX Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum optio vel nesciunt possimus quidem mollitia laboriosam, quod, ab odio soluta vero nulla beatae, voluptas illum. Tenetur dolorem magni voluptas harum! Sit, eius minus aperiam necessitatibus dolore tenetur fugit unde, error incidunt beatae illum, exercitationem blanditiis non amet quod nesciunt!
              </p>
            </div>
          </div>
          <div className='project-4'>
          <img src={ui} alt=""  height='298px' width='598px'/>
            <div className='project-details-item'>
              <h3>UI and UX Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum optio vel nesciunt possimus quidem mollitia laboriosam, quod, ab odio soluta vero nulla beatae, voluptas illum. Tenetur dolorem magni voluptas harum! Sit, eius minus aperiam necessitatibus dolore tenetur fugit unde, error incidunt beatae illum, exercitationem blanditiis non amet quod nesciunt!
              </p>
            </div>
          </div>
        </div>


      </section>
      <section id='skils'>
        <h2>Skills</h2>
        <div className='skils-container'>
          <div className='card'>
            <img src={ui} alt="" height='298px' width='329px' />
            <div className='item'>
              <h1>UI and UX Design</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={grapic} alt="" height='298px' width='329px' />
            <div className='item'>
              <h1>Grepic Design</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={express} alt="" height='298px' width='328px' />
            <div className='item'>
              <h1>Express</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={node} alt="" height='298px' width='328px' />
            <div className='item'>
              <h1>Node.js </h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={react} alt="" height='298px' width='329px' />
            <div className='item'>
              <h1>React.js</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={python} alt="" height='298px' width='329px' />
            <div className='item'>
              <h1>Python </h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={ps} alt="" height='298px' width='328px' />
            <div className='item'>
              <h1>Photoshop Design</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
          <div className='card'>
            <img src={java} alt="" height='298px' width='328px' />
            <div className='item'>
              <h1>Java</h1>
              <p>the <span>UI designer</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?</p>

            </div>

          </div>
        </div>


      </section>
      <section id='contact'>
        <div className='contact-info'>
          <h1>Contact <span>Me</span></h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              id='name'
              placeholder='Enter the fullname'
              autoFocus
            />
            <input
              required
              type="email"
              name=""
              placeholder='Enter your email'
              id="email"
            />
            <input
              type="text"
              name=""
              placeholder='Subject'
              id="sub"
            />
            <textarea name="" placeholder='message......' id="textarea"></textarea>
            <input type="submit" value="submit" id='submit' />
          </form>

        </div>


      </section>
      <footer>
        <div className="footer">
          <div className='footer-address'>
            <li><MdOutlineAttachEmail /> : yogadinesh92@gmail.com</li>
            <li><FaPhoneVolume />: 91+9500212042</li>

          </div>
          <div className='footer-social-link'>
            <li><FaInstagram /></li>
            <li><FaXTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaGithub /></li>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default App;
