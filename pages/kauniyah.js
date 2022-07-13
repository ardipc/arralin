import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { Accordion, Badge, Button, Carousel, Form } from "react-bootstrap";

export default function Kauniyah() {
    const testi = [
        {
            slide: 1,
            items: [
                {
                    image: '',
                    name: 'Winny Adetya',
                    address: 'Cipinan, Jakarta',
                    message: '',
                    rating: 5
                },
                {
                    image: '',
                    name: 'Mela Apriana',
                    address: 'Jakarta Timur, Jakarta',
                    message: '',
                    rating: 5
                },
                {
                    image: '',
                    name: 'Naziha Husein',
                    address: 'Karamat Jati, Jakarta',
                    message: '',
                    rating: 5
                },
            ],
        },
    ];
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
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://marketplus.co.id/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-12-at-11.12.25.jpeg" alt="..." />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="font-weight-light">Paket Reseller 600ml (6x100ml)</h2>
                        <p>
                            Minyak Balur Kauniyah setia menemani apapun aktifitasmu. Hemat tempat dan mudah dibawa kemanapun.
                        </p>
                        <h2>Rp 132.000</h2>
                        <p>
                            <Badge bg="success fw-bold me-2">Free Ongkir</Badge>
                            <Badge bg="success fw-bold">Discount 20%</Badge>
                            <span className="ms-3 text-secondary"><del>Rp 165.000</del></span>
                        </p>
                        <a className="btn btn-primary" href="https://wa.me/6282334093822">
                            <i className="bi bi-cart"></i> &nbsp; Beli Sekarang
                        </a>
                        <p className="mt-3">
                            Mau pesen 1 lusin, tapi takut ga kepake?
                            <br />
                            Eitss tenang... ayah bunda boleh kok order 1/2 lusin aja.
                        </p>
                        <p>
                            Paket Reseller RO 1/2 lusin minyak balur kauniyah oil tetap lebih hemat 20% dari harga aslinya.
                        </p>
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
                        <h2 className="fs-4 fw-bold">Sertifikasi Halal</h2>
                        <p className="mb-0">Minyak Balur kauniyah sudah tersertifikasi <b>HALAL</b> oleh MUI dengan nomor 15140065021120</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
                        <h2 className="fs-4 fw-bold">Terdaftar BPOM</h2>
                        <p className="mb-0">Terdaftar dengan nomor TR213600651 sebagai produk layak edar sehingga aman digunakan.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading" /></div>
                        <h2 className="fs-4 fw-bold">Harum & Anti Lengket</h2>
                        <p className="mb-0">Aroma lembut tidak menyengat hidung dan nyaman di kulit. Beda dengan minyak balur biasa!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap" /></div>
                        <h2 className="fs-4 fw-bold">Promo Ongkir</h2>
                        <p className="mb-0">We have created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code" /></div>
                        <h2 className="fs-4 fw-bold">Chat via Whatsapp</h2>
                        <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check" /></div>
                        <h2 className="fs-4 fw-bold">Negosiasi Pengiriman</h2>
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
                        {
                            testi.map((item, key) => (
                                <Carousel.Item key={key}>
                                    <div className="container text-center my-4">
                                        <div className="row">
                                            {
                                                item.items.map((item, key) => {
                                                    if (key === 0) {
                                                        return (
                                                            <div className="col-lg-4">
                                                                <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
                                                                <h5 className="mb-3">{item.name}</h5>
                                                                <p>{item.address}</p>
                                                                <p className="text-muted">
                                                                <i className="fas fa-quote-left pe-2" />
                                                                {item.message}
                                                                </p>
                                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                                    {
                                                                        [...Array(item.rating)].map((item, key) => (
                                                                            <li key={key}><i className="bi bi-star-fill" /></li>
                                                                        ))
                                                                    }
                                                                    &nbsp;({item.rating}/5)
                                                                </ul>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div className="col-lg-4 d-none d-lg-block">
                                                                <img className="rounded-circle shadow-1-strong mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{width: 150}} />
                                                                <h5 className="mb-3">{item.name}</h5>
                                                                <p>{item.address}</p>
                                                                <p className="text-muted">
                                                                <i className="fas fa-quote-left pe-2" />
                                                                {item.message}
                                                                </p>
                                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                                    {
                                                                        [...Array(item.rating)].map((item, key) => (
                                                                            <li key={key}><i className="bi bi-star-fill" /></li>
                                                                        ))
                                                                    }
                                                                    &nbsp;({item.rating}/5)
                                                                </ul>
                                                            </div>
                                                        );
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))
                        }
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