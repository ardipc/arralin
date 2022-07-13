import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { Accordion, Button, Carousel, Form } from "react-bootstrap";

export default function Products() {
    const products = [
        {
            title: "Kauniyah Oil",
            url: "/kauniyah",
            image: "",
            price: "Rp 165.000",
            isSale: true,
            rating: 4
        },
        {
            title: "Minyak Kutus Kutus",
            url: "/kutuskutus",
            image: "",
            price: "Rp 170.000",
            isSale: true,
            rating: 4
        }
    ];
    return (
        <Fragment>
            <Head>
                <title>Our Products | Arralin Store</title>
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

            {/* Header*/}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Our Products</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Find the item you want.</p>
                </div>
                </div>
            </header>
            
            {/* Section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products.map((item, key) => (
                                <div className="col mb-5" key={key}>
                                    <div className="card h-100">
                                        {
                                            item.isSale ?
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                                :
                                                null
                                        }
                                        {/* Product image*/}
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">{item.title}</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill" />
                                                    <div className="bi-star-fill" />
                                                    <div className="bi-star-fill" />
                                                    <div className="bi-star-fill" />
                                                    <div className="bi-star-fill" />
                                                </div>
                                                {/* Product price*/}
                                                <h4>{item.price}</h4>
                                            </div>
                                        </div>
                                        {/* Product actions*/}
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <Link href={item.url}><a className="btn btn-outline-dark mt-auto">View more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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
    );
}