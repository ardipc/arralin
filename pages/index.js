import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function Home() {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    let url = `https://wa.me/6282334093822?text=Halo Arralin Store%0aNama : ${name}%0aPhone : ${phone}%0a%0a${message}`;
    window.location.href = url;
  }

  return (
    <Fragment>
        <Head>
            <title>Arralin Store</title>
        </Head>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <Link href="/"><a className="navbar-brand">Arralin Store</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/products">
                    <a className="nav-link">Products</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header*/}
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                <div className="text-center my-5">
                  <h1 className="display-5 fw-bolder text-white mb-2">Present your business in a whole new way</h1>
                  <p className="lead text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Features section*/}
        <section className="py-5 border-bottom" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection" /></div>
                <h2 className="h4 fw-bolder">Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building" /></div>
                <h2 className="h4 fw-bolder">Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
                <h2 className="h4 fw-bolder">Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials section*/}
        <section className="py-5 border-bottom">
          <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Customer testimonials</h2>
              <p className="lead mb-0">Our customers love working with us</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                {/* Testimonial 1*/}
                <div className="card mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1" /></div>
                      <div className="ms-4">
                        <p className="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                        <div className="small text-muted">- Client Name, Location</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2*/}
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1" /></div>
                      <div className="ms-4">
                        <p className="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                        <div className="small text-muted">- Client Name, Location</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact section*/}
        <section className="bg-light py-5">
          <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope" /></div>
              <h2 className="fw-bolder">Get in touch</h2>
              <p className="lead mb-0">We'd love to hear from you</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-6">
                <form onSubmit={e => onSubmitForm(e)}>
                  {/* Name input*/}
                  <div className="form-floating mb-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" type="text" placeholder="Enter your name..." required={true} />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  {/* Phone number input*/}
                  <div className="form-floating mb-3">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required={true} />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                  {/* Message input*/}
                  <div className="form-floating mb-3">
                    <textarea required={true} value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} />
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                  <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                  {/* Submit Button*/}
                  <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Send</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer*/}
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright © Arralin Store 2022.</p>
            </div>
        </footer>

    </Fragment>
  )
}
