'use client'
import React, { useState } from "react";
import { Row, Col } from 'antd';
import Icon, { PhoneOutlined, InboxOutlined, MailOutlined, BarsOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from "./page.module.scss";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.elementor_top_column}>
                    <div className={styles.elementor_element_populated}>
                        <section className={styles.elementor_element}>
                            <div className={styles.elementor_column_gap_default}>
                                <div className={styles.div_logo}>
                                    <Link href="/">
                                        <img src='/imgACTech/ACTech_Horizontal-1.png' />
                                    </Link>
                                </div>
                                <div className={styles.menu_header}>
                                    <nav className={`${styles.menu_nav} ${isOpen ? styles.active : ''}`}>
                                        <ul className={styles.menu_ul}>
                                            <Link href="/">
                                                <li className={styles.menu_li}>
                                                    Trang Chủ
                                                </li>
                                            </Link>
                                            <Link href="/gioi-thieu">
                                                <li className={styles.menu_li}>
                                                    Giới Thiệu
                                                </li>
                                            </Link>
                                            <li className={styles.menu_li}>
                                                Lĩnh Vực Hoạt Động
                                                <ul className={styles.menu_ul_mini}>
                                                    <Link href="/linh-vuc-hoat-dong/cong-nghe-quan-tri-thong-minh-smt">
                                                        <li>
                                                            Công nghệ quản trị thông minh ACTech SMT
                                                        </li>
                                                    </Link>
                                                    <Link href="/linh-vuc-hoat-dong/smart-system">
                                                        <li>Công nghệ quản trị thông minh ACTech SMART SYSTEM</li>
                                                    </Link>
                                                    <Link href="/linh-vuc-hoat-dong/thiet-ke-mobile-app">
                                                        <li>Công nghệ ứng dụng - Sản xuất các app dịch vụ, sản phẩm</li>
                                                    </Link>
                                                    <Link href="/linh-vuc-hoat-dong/san-xuat-va-gia-cong-phan-mem">
                                                        <li>Công nghệ ứng dụng - Gia công phần mền</li>
                                                    </Link>
                                                </ul>
                                            </li>
                                            <li className={styles.menu_li}>
                                                Sản Phẩm
                                                <ul className={styles.menu_ul_mini}>
                                                    <Link href="/san-pham/business-phan-mem-quan-ly-kinh-doanh-thong-minh">
                                                        <li>BUSINESS – Phần mềm quản lý kinh doanh thông minh</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-crm">
                                                        <li>CRM – Kinh doanh và chăm sóc khách hàng</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-mrp">
                                                        <li>MRP –  Quản lý quy trình sản xuất</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-hrm">
                                                        <li>HRM – Quản lý nguồn nhân lực</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-office">
                                                        <li>OFFICE – Quản lý công việc và nội bộ dễ dàng và hiệu quả</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-afm">
                                                        <li>AFM – Quản lý tài chính và kế toán</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-marketing">
                                                        <li>MARKETING – Giải pháp Marketing tổng thể</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-mbo">
                                                        <li>MBO – Quản lý theo mục tiêu</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-ssm">
                                                        <li>SSM – Quản lý kho sản xuất</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-dms">
                                                        <li>DMS – Quản lý, lưu trữ và chia sẻ tài liệu</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-ams">
                                                        <li>AMS –  Quản lý tài sản</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-das">
                                                        <li>DAS – Quản lý giao hàng và vận chuyển</li>
                                                    </Link>
                                                    <Link href="/san-pham/service-purchase">
                                                        <li>PURCHASE – Phân hệ quản lý mua hàng</li>
                                                    </Link>
                                                </ul>
                                            </li>
                                            <Link href="/tin-tuc-su-kien">
                                                <li className={styles.menu_li}>Tin Tức Sự Kiện</li>
                                            </Link>
                                            <Link href="/tuyen-dung">
                                                <li className={styles.menu_li}>Tuyển Dụng</li>
                                            </Link>
                                            <Link href="/lien-he">
                                                <li className={styles.menu_li}>Liên Hệ</li>
                                            </Link>
                                            <Link href="/huong-dan-su-dung">
                                                <li className={styles.menu_li}>Hướng Dẫn Sử Dụng</li>
                                            </Link>
                                        </ul>
                                    </nav>
                                    <button className={styles.menuToggle} onClick={toggleMenu}><BarsOutlined /></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                {children}
                <div className={styles.icon_zalo_p}>
                    <div className={styles.button_contact}>
                        <div className={styles.phone_vr}>
                            <div className={styles.phone_vr_circle_fill}></div>
                            <div className={styles.phone_vr_img_circle}>
                                <a className={styles.a_zalo} target="_blank" href="https://zalo.me/1450762198568866769">
                                    <img src="/imgACTech/zalo.png" />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className={styles.button_contact}>
                        <div className={styles.phone_vr}>
                            <div className={styles.phone_vr_circle_fill2}></div>
                            <div className={styles.phone_vr_img_circle2}>
                                <a className={styles.a_zalo} href="tel:0936825566">
                                    <img src="/imgACTech/phone.png" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.elementor_top_column}>
                    <div className={styles.elementor_element_populated}>
                        <section className={styles.elementor_element}>
                            <div className={styles.elementor_column_gap_default}>
                                <Row gutter={24}>
                                    <Col span={24} lg={9}>
                                        <div className={styles.address}>
                                            <div className={styles.logo_footer}>
                                                <img src='/imgACTech/ACTech_Horizontal-1-1024x386.png' />
                                            </div>
                                            <div className={styles.text_address}>
                                                <h3>CÔNG TY TNHH ANCAO (ACTECH)</h3>
                                                <p>Office 1: Số 11 NO1B Phố Hoàng Thế Thiện, ĐTM Sài Đồng, Phường Phúc Đồng, Quận Long Biên, TP Hà Nội, Việt Nam</p>
                                                <p>Office 2:  Tầng 3, tòa nhà Lexington Residence, 67 đường Mai Chí Thọ, phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh.</p>
                                                <p><PhoneOutlined /> +84 936 825 566 - +84 906 083 998</p>
                                                <p><MailOutlined /> Email: sales@actechsmt.com</p>
                                                <p><InboxOutlined /> 0106835778</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={14} lg={10}>
                                        <div className={styles.product_footer}>
                                            <h3>Sản phẩm</h3>
                                            <Row gutter={24}>
                                                <Col lg={12}>
                                                    <div className={styles.text_address2}>
                                                        <p><Link href="/san-pham/anka-tro-ly-ao-toan-dien-danh-rieng-cho-nguoi-viet">Anka – Trợ lý ảo toàn diện dành riêng cho người Việt</Link></p>
                                                        <p><Link href="/san-pham/service-crm"> CRM – Kinh doanh và chăm sóc khách hàng </Link></p>
                                                        <p><Link href='/san-pham/service-hrm'>HRM – Quản lý nguồn nhân lực</Link></p>
                                                        <p><Link href='/san-pham/service-afm'>AFM – Quản lý tài chính và kế toán</Link></p>
                                                        <p><Link href='/san-pham/service-mbo'>MBO – Quản lý theo mục tiêu</Link></p>
                                                        <p><Link href='/san-pham/service-dms'>DMS – Quản lý, lưu trữ và chia sẻ tài liệu</Link></p>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className={styles.text_address2}>
                                                        <p><Link href='/san-pham/business-phan-mem-quan-ly-kinh-doanh-thong-minh'>BUSINESS – Phần mềm quản lý kinh doanh thông minh</Link></p>
                                                        <p><Link href='/san-pham/service-mrp'>MRP – Quản lý quy trình sản xuất</Link></p>
                                                        <p><Link href='/san-pham/service-office'>OFFICE – Quản lý công việc và nội bộ dễ dàng và hiệu quả</Link></p>
                                                        <p><Link href='/san-pham/service-marketing'>MARKETING – Giải pháp Marketing tổng thể</Link></p>
                                                        <p><Link href='/san-pham/service-ssm'>SSM – Quản lý kho sản xuất</Link></p>
                                                        <p><Link href='/san-pham/service-ams'>AMS – Quản lý tài sản</Link></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col span={10} lg={5}>
                                        <div className={styles.information_footer}>
                                            <div className={styles.in_footer}>
                                                <h3>Đăng kí sử dụng</h3>
                                                <div className={styles.email_footer}>
                                                    <input placeholder='Nhập địa chỉ Email' />
                                                    <button>Gửi</button>
                                                </div>
                                            </div>
                                            <div className={styles.in_footer}>
                                                <h3>Thông Tin</h3>
                                                <p><Link href='/'>Trang Chủ</Link></p>
                                                <p><Link href='/gioi-thieu'>Giới thiệu</Link></p>
                                                <p><Link href='/linh-vuc-hoat-dong/cong-nghe-quan-tri-thong-minh-smt'>Lĩnh vực hoạt động</Link></p>
                                                <p><Link href='/san-pham/service-crm'>Sản phẩm</Link></p>
                                                <p><Link href='/tin-tuc-su-kien'>Tin tức sự kiện</Link></p>
                                                <p><Link href=''>Dùng thử miễn phí</Link></p>
                                                <p><Link href='/tuyen-dung'>Tuyển dụng</Link></p>
                                                <p><Link href='/lien-he'>Liên hệ</Link></p>
                                                <p><Link href='/huong-dan-su-dung'>Hướng dẫn sử dụng</Link></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.underlined}></div>
                            <div className={styles.text_end}>
                                <p>Copyright © 2024 | Powered by ACTech - Công nghệ quản trị thông minh</p>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DefaultLayout;