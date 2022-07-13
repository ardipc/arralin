import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { Accordion, Button, Carousel, Form } from "react-bootstrap";

export default function Kauniyah() {
    return (
        <Fragment>
            <Head>
                <title>Kauniyah Oil | Arralin Store</title>
            </Head>

            {/* Responsive navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-lg-5">
                <Link href="/"><a className="navbar-brand">Arralin Store</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/products"><a className="nav-link">Products</a></Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className="container px-4 px-lg-5">
                {/* Heading Row*/}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." />
                    </div>
                    <div className="col-lg-5">
                    <h1 className="font-weight-light">Business Name or Tagline</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                        <a className="btn btn-primary" href="https://wa.me/6282334093822">
                            <i className="bi bi-cart"></i> &nbsp; Beli Sekarang
                        </a>
                    </div>
                </div>
            </div>

            {/* Page Content*/}
            <section className="pt-4">
                <div className="container px-lg-5">
                {/* Page Features*/}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                        <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                        <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
                        <h2 className="fs-4 fw-bold">Free to download</h2>
                        <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading" /></div>
                        <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                        <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap" /></div>
                        <h2 className="fs-4 fw-bold">Feature boxes</h2>
                        <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code" /></div>
                        <h2 className="fs-4 fw-bold">Simple clean code</h2>
                        <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check" /></div>
                        <h2 className="fs-4 fw-bold">A name you trust</h2>
                        <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Carousel wrapper */}
            <section className="container mb-5">
                <h1 className="display-5 mb-4 text-center">Testimonial</h1>
                <section className="bg-light border rounded-3">
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <div className="container text-center my-4">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">Anna Deynah</h5>
                                        <p>UX Designer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star" /></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>Web Developer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                        suscipit laboriosam, nisi ut aliquid commodi.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star" /></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container text-center my-4">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">Anna Deynah</h5>
                                        <p>UX Designer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star" /></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>Web Developer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                        suscipit laboriosam, nisi ut aliquid commodi.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star" /></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block">
                                        <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" style={{width: 150}} />
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2" />
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </section>
            </section>
            {/* Carousel wrapper */}

            <section className="container">
                <div className="card bg-light my-5 py-4 text-center">
                    <div className="card-body">
                        <p className="m-0">
                            Tunggu apa lagi, bisa di order sebanyak-banyaknya.
                            <a className="btn btn-primary ms-3" href="https://wa.me/6282334093822">
                                <i className="bi bi-cart"></i> &nbsp; Beli Sekarang
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <h1 className="display-5 mb-4 text-center">FAQs</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>

            {/* Footer*/}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Arralin Store 2022.</p>
                </div>
            </footer>

        </Fragment>
    );
}