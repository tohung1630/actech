'use client'
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { Carousel } from 'antd';
import { Row, Col, Modal, Collapse } from 'antd';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
    FacebookOutlined,
    TikTokOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DefaultLayout from '../../../components/DefaultLayout/layoutMenu';
import styles from "./page.module.scss";

enum companySize {
    small = "small",
    fit = "fit",
    big = "big",
}
enum area {
    hanoi = "hanoi",
    hochiminh = "hochiminh",
    mienbac = "mienbac",
    mientrung = "mientrung",
    miennam = "miennam"
}

interface IFormInput {
    name: string
    email: string
    phone: string
    company: string
    scale: companySize
    area: area
    content: string
}

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    company: yup.string().required("Company is required"),
    scale: yup.mixed<companySize>().oneOf(Object.values(companySize)).required("Scale is required"),
    area: yup.mixed<area>().oneOf(Object.values(area)).required("Area is required"),
    content: yup.string().required("Content is required"),
}).required();
export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEamil, setIsEmail] = useState('');
    const [activeKey, setActiveKey] = useState<string | string[]>(['1']);



    const onSubmit: SubmitHandler<IFormInput> = async data => {
        try {
            const res = await fetch('https://social.actechsoftware.com/cms/nghiencuu/email_web', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setIsEmail('Chúng tôi đã nhận được yêu cầu của bạn')
            } else {
                setIsEmail('Đã có lỗi, xin hay gửi lại cho chúng tôi')
            }
        } catch (error) {
            setIsEmail('Đã có lỗi, xin hay gửi lại cho chúng tôi')
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <DefaultLayout>
            <div>
                <div className={`${styles.contentStyle}`}>
                    <img className={styles.img_conter} src="/imgACTech/background-1-1910x557.png" />
                    <img className={styles.img_conter_logo} src="/imgACTech/web-2-152-453x402.png" />
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src='/imgACTech/Logo-32.svg' />
                                        <h1>KINH DOANH VÀ CHĂM SÓC KHÁCH HÀNG</h1>
                                        <div className={styles.div_img_left}>
                                            <p>ACTech CRM được xem là công cụ đắc lực giúp chuẩn hóa các hoạt động marketing, bán hàng, chăm sóc khách hàng, email marketing… thành một quy trình tự động, xuyên suốt.</p><br />
                                        </div>
                                        <div className={styles.div_btn}>
                                            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined /></button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car}>
                                <img src="/imgACTech/banner-4-212.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-2-159.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_r}>
                                        <div className={styles.img_secrmr}>
                                            <img src='/imgACTech/Logo-32.svg' />
                                            <h1>LÀ GÌ?​</h1>
                                            <div className={styles.underlined_key}></div>
                                        </div>
                                        <br />
                                        <div className={styles.text_secr}>
                                            <p><strong>ACTech CRM</strong> là nền tảng công nghệ kinh doanh và chăm sóc khách hàng được nghiên cứu và phát triển bởi công ty TNHH AnCao. ACTech CRM được xem là công cụ đắc lực giúp chuẩn hóa các hoạt động marketing, bán hàng, chăm sóc khách hàng, email marketing… thành một quy trình tự động, xuyên suốt. Nhờ vậy, các doanh nghiệp có thể chủ động nắm bắt, cải thiện hoạt động của đội ngũ bán hàng; duy trì, phát triển tệp khách hàng chất lượng và gia tăng doanh số hiệu quả.</p><br />
                                            <p>CRM là viết tắt của cụm từ Customer Relationship Management mang nghĩa ngắn gọn là quản lý quan hệ khách hàng. Từ tên gọi, chúng ta cũng có thể hiểu rõ cơ chế vận hành của CRM là quản lý các thông tin từ tên, số điện thoại, email, tài khoản, đối tác làm việc… đến việc nghiên cứu, tìm hiểu nhu cầu và thói quen của khách hàng, tiếp cận và giao tiếp với khách hàng một cách có hệ thống và hiệu quả.</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <h1>
                            DOANH NGHIỆP CỦA BẠN<br />
                            ĐANG GẶP PHẢI VẤN ĐỀ
                            <div className={styles.underlined_red}></div>
                        </h1>
                        <Row gutter={12}>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-1-25-20221208180819-kaje3.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Thất thoát data, thông tin khách hàng rời rạc do làm bằng excel</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-1-26-20221208180821-xqrmw.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Không kiểm soát, đánh giá được chất lượng làm việc của Sale, Telesale, Marketing</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-1-27-20221210145512-tc2ao.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Không biết nguồn nào, chiến dịch nào đang đem lại hiệu quả Lead hay lãng phí tiền</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-1-28-20221210145513-nr0so.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Chăm sóc khách hàng chậm, đánh mất khách hàng, quên khách hàng</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-1-29-20221210145514-1oe93.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Tốn nhiều giờ để làm báo cáo thống kê nhưng không chính xác, khoa học</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_need_to_come}>
                                        <div>
                                            <h1>TẠI SAO DOANH NGHIỆP CỦA BẠN CẦN​</h1>
                                            <img src="/imgACTech/Logo-32.svg" />
                                            <div className={styles.underlined_key}></div>
                                            <p>Với <strong>ACTech CRM</strong>, mọi dữ liệu thông tin khách hàng của doanh nghiệp sẽ được sàng lọc, phân loại và lưu trữ khoa học. Từ đó giúp các bộ phận liên quan sử dụng dữ liệu để nghiên cứu, lên kế hoạch và chăm sóc khách hàng kịp thời.</p>
                                            <br />
                                            <ul>
                                                <li>
                                                    <p>Tùy biến cho mọi ngành hàng: thương mại, dịch vụ, sản xuất, truyền thông, giải trí, thời trang,…</p>
                                                </li>
                                                <li>
                                                    <p>Tối ưu hóa kế hoạch chăm sóc khách hàng, xuyên suốt mang lại hiệu quả cao và tiết kiệm chi phí. -Mọi dữ liệu thông tin khách hàng của doanh nghiệp sẽ được sàng lọc, phân loại, lưu trữ khoa học và được kiểm soát.</p>
                                                </li>
                                                <li>
                                                    <p>Phân tích, đánh giá chất lượng data để có chiến lược marketing phù hợp.</p>
                                                </li>
                                                <li>
                                                    <p>Đồng bộ các kế hoạch Marketing trên nền tảng SMS, Autocall, Email… giúp gia tăng chuyển đổi và tiết kiệm chi phí</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.img_need_to_come}>
                                        <img src="/imgACTech/web-2-160-913x1024.png" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <div className={styles.div_img_logo}>
                            <img className={styles.img_logo_tn} src="/imgACTech/web-1-22-20221208174438-fydmn-300x92.png" />
                            <h1>
                                CÓ NHỮNG TÍNH NĂNG GÌ?
                                <div className={styles.underlined_red}></div>
                            </h1>
                        </div>
                        <Row gutter={24}>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-31-20221210155055-tsuuv.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Phân tích thị trường, khách hàng</h3>
                                        <ul>
                                            <li>Phân tích đặc điểm, tiềm năng khách hàng.</li>
                                            <li>Thông tin chi tiết về giao dịch, các hoạt động.</li>
                                            <li>Báo cáo hành vi của khách hàng.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-32-20221210155056-ukpwo.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý khách hàng</h3>
                                        <ul>
                                            <li>Quản lý khách hàng tập trung và đầu mối liên hệ khách hàng</li>
                                            <li>Gia tăng chất lượng dịch vụ chăm sóc khách hàng,</li>
                                            <li>Tiết kiệm thời gian với quy trình tự động hóa</li>
                                            <li>Cải thiện giá trị vòng đời khách hàng, xây dựng mối quan hệ bền vững với doanh nghiệp</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-33-20221210155057-5iupv.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý Bán hàng (SALE)</h3>
                                        <ul>
                                            <li>Phân bổ nguồn lực cho các cơ hội bán hàng</li>
                                            <li>Quản lý, giám sát hoạt động chăm sóc khách hàng của đội ngũ sale</li>
                                            <li>Cung cấp công cụ chăm sóc khách hàng, quản lý công việc, tạo lịch hẹn,…</li>
                                            <li>Quản lý tiềm năng (leads)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-34-20221210155059-_lryw.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý hợp đồng</h3>
                                        <ul>
                                            <li>Thiết lập một hệ thống duy nhất</li>
                                            <li>Quản lý toàn bộ quá trình của hợp đồng (tạo lập, xét duyệt, gia hạn HĐ, kiểm toán, thanh lý HĐ…)</li>
                                            <li>Chuẩn hóa quá trình tạo, kiểm duyệt từng hợp đồng</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-35-20221210155100-uzo7j.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý và đo lường hiệu quả marketing</h3>
                                        <ul>
                                            <li>Chuẩn hóa hoạt động marketing</li>
                                            <li>Triển khai các chiến dịch tiếp cận và chăm sóc khách hàng qua ứng dụng Email Marketing</li>
                                            <li>Triển khai các chiến dịch tiếp cận và chăm sóc khách hàng qua ứng dụng SMS Marketing</li>
                                            <li>Triển khai các chiến dịch tiếp cận và chăm sóc khách hàng qua ứng dụng Auto Call</li>
                                            <li>Tăng chỉ số đo lường hiệu quả Marketing</li>
                                            <li>Đánh giá tỷ lệ chuyển đổi, nguồn khách hàng, thông điệp truyền thông</li>
                                            <li>Quản lý chương trình khuyến mãi, coupon</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-36-20221210155101-ajt-g.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý cơ hội</h3>
                                        <ul>
                                            <li>Quản lý và theo dõi tất cả các cơ hội bán hàng,</li>
                                            <li>Không bỏ sót cơ hội có khả năng chốt cao</li>
                                            <li>Gia tăng doanh thu, tiết kiệm chi phí</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <div className={styles.div_img_logo}>
                                <h1 className={styles.h1_noibat}>
                                    ĐIỂM NỔI BẬT CỦA
                                </h1>
                                <img className={styles.img_logo_tn} src="/imgACTech/web-1-22-20221208174438-fydmn-300x92.png" />
                                <div className={styles.underlined_red}></div>
                            </div>
                            <Row gutter={24}>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-65.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Quản lý tiêu chuẩn hóa</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-66.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Phân bổ nguồn lực cho các cơ hội bán hàng</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-67.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tăng năng xuất</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-68.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Định hướng kinh doanh</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-70.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Hệ thống chăm sóc khách hàng được cải thiện</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-71.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Quản lý từ xa hoạt động kinh doanh</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-72.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tăng chỉ số đo lường Marketing</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-73.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Đa dạng, phong phú về sản phẩm, dịch vụ</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-69.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Báo cáo xác thực</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/Ho-tro-truc-tuyen-150x150.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Hỗ trợ trực tuyến</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.div_btn} ${styles.text_al}`}>
                                <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.field3}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.youtube}>
                                        <iframe src="https://www.youtube.com/embed/RZDA5zuw3Y4?si=E7zd2Ts76YtTQqRT" title="YouTube video player"></iframe>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.free_sign_up}>
                                        <p>ĐĂNG KÝ</p>
                                        <h2>DÙNG THỬ MIỄN PHÍ</h2>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register("name")} placeholder="Họ và tên" />
                                                {errors.name && <p>{errors.name.message}</p>}
                                            </div>
                                            <div>
                                                <Row gutter={24}>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("email")} placeholder="Email" />
                                                            {errors.email && <p>{errors.email.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("phone")} placeholder="Số điện thoại" />
                                                            {errors.phone && <p>{errors.phone.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("company")} placeholder="Công ty" />
                                                            {errors.company && <p>{errors.company.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <select {...register("scale")}>
                                                                <option value="" disabled selected>Quy mô</option>
                                                                <option value="small">Dưới 50 người</option>
                                                                <option value="fit">51 - 100 người</option>
                                                                <option value="big">Trên 100 người</option>
                                                            </select>
                                                            {errors.scale && <p>{errors.scale.message}</p>}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <select {...register("area")}>
                                                    <option value="" disabled selected>Khu vực</option>
                                                    <option value="hanoi">Hà Nội</option>
                                                    <option value="hochiminh">Hồ Chí Minh</option>
                                                    <option value="mienbac">Miền Bắc</option>
                                                    <option value="mientrung">Miền Trung</option>
                                                    <option value="miennam">Miền Nam</option>
                                                </select>
                                                {errors.area && <p>{errors.area.message}</p>}
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register("content")} placeholder="Nội dung yêu cầu" />
                                                {errors.content && <p>{errors.content.message}</p>}
                                            </div>

                                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                                            <p>{isEamil}</p>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.icon_bring_society}>
                                <a href="https://www.facebook.com/actechsmt" target="_blank"><FacebookOutlined /></a>
                                <a href="https://www.tiktok.com/@actechsmt.com" target="_blank"><TikTokOutlined /></a>
                                <a href="https://www.instagram.com/actechsmt/" target="_blank"><InstagramOutlined /></a>
                                <a href="https://www.youtube.com/@ACTechSMT-Congnghequantri" target="_blank"><YoutubeOutlined /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <Modal title="" visible={isModalOpen} footer={[]} onCancel={handleCancel}>
                    <div className={styles.free_sign_up}>
                        <p>ĐĂNG KÝ</p>
                        <h2>DÙNG THỬ MIỄN PHÍ</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.div_free_sign_up}>
                                <input {...register("name")} placeholder="Họ và tên" />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("email")} placeholder="Email" />
                                            {errors.email && <p>{errors.email.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("phone")} placeholder="Số điện thoại" />
                                            {errors.phone && <p>{errors.phone.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("company")} placeholder="Công ty" />
                                            {errors.company && <p>{errors.company.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <select {...register("scale")}>
                                                <option value="" disabled selected>Quy mô</option>
                                                <option value="small">Dưới 50 người</option>
                                                <option value="fit">51 - 100 người</option>
                                                <option value="big">Trên 100 người</option>
                                            </select>
                                            {errors.scale && <p>{errors.scale.message}</p>}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <select {...register("area")}>
                                    <option value="" disabled selected>Khu vực</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="hochiminh">Hồ Chí Minh</option>
                                    <option value="mienbac">Miền Bắc</option>
                                    <option value="mientrung">Miền Trung</option>
                                    <option value="miennam">Miền Nam</option>
                                </select>
                                {errors.area && <p>{errors.area.message}</p>}
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <input {...register("content")} placeholder="Nội dung yêu cầu" />
                                {errors.content && <p>{errors.content.message}</p>}
                            </div>

                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                            <p>{isEamil}</p>
                        </form>
                    </div>
                </Modal>
            </div>
        </DefaultLayout>
    )
}