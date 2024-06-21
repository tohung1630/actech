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
                                        <img className={styles.img_logo} src="/imgACTech/Logo-35.png" />
                                        <h1>QUẢN LÝ CÔNG VIỆC VÀ NỘI BỘ DỄ DÀNG VÀ HIỆU QUẢ</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Là phần mềm quản trị công việc và hoạt động nội bộ toàn diện và chuyên nghiệp nhất hiện nay, giúp các doanh nghiệp thiết lập và tự động hóa quy trình công việc theo quy trình</p><br />
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
                                <img src="/imgACTech/office-96.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>

                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <img src="/imgACTech/Logo-35.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>ACTech Office</strong> là phần mềm quản trị công việc và hoạt động nội bộ toàn diện và chuyên nghiệp nhất hiện nay, giúp các doanh nghiệp thiết lập và tự động hóa quy trình công việc theo quy trình. Nhờ đó, nhà quản trị có thể dễ dàng theo dõi trạng thái, tiến độ công việc của từng phòng ban, dự án,… theo thời gian thực, đồng thời đẩy nhanh tốc độ phê duyệt và đưa ra quyết định. quả.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/office-a-95.png" />
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
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-164.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Không kiểm soát được tiến độ công việc, dự án, thông tin đứt gãy do làm việc thủ công trên nhiều công cụ: Excel, Email, Zalo, Viber, Messenger,…</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-165.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Cộng tác, phối hợp giữa các bộ phận phòng ban rời rạc, xây quy trình hướng dẫn bằng văn bản nhưng nhân viên khó áp dụng, làm theo</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-166.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Đơn từ, phê duyệt chất đống, khó tổng hợp lưu trữ. Quản lý không phải lúc nào cũng có mặt ở văn phòng để ký nháy giấy tờ</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-167.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Họp hành dàn trải, liên tục nhắc nhở đốc thúc nhưng không hiệu quả</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-168.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Nhân viên dần mất động lực làm việc, hết động lực gắn bó, gây ra tình trang chảy máu chất xám trong doanh nghiệp</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/office-103.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO DOANH NGHIỆP CỦA BẠN CẦN</h1>
                                                <img src="/imgACTech/Logo-35.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>ACTech Office</strong> tạo sợi dây liên kết vô hình xuyên suốt toàn bộ doanh nghiệp, giúp các nhân sự, phòng ban phối hợp công việc nhịp nhàng, góp phần tiết kiệm thời gian, giảm thiểu sai sót và nâng cao năng suất, hiệu quả công việc.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <div className={styles.div_img_logo}>
                            <img className={styles.img_logo_tn} src="/imgACTech/Logo-35.png" />
                            <h1>
                                CÓ NHỮNG TÍNH NĂNG GÌ?
                                <div className={styles.underlined_red}></div>
                            </h1>
                        </div>
                        <Row gutter={24}>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/office-104.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý kế hoạch mục tiêu</h3>
                                        <ul>
                                            <li><p>Lập kế hoạch, mục tiêu</p></li>
                                            <li><p>Giao việc, quản lý tiến độ điều phối công việc dễ dàng</p></li>
                                            <li><p>Dễ dàng kiểm soát deadline, đánh giá kết quả công việc rõ ràng và minh bạch</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/office-105.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý cài đặt quy trình công việc</h3>
                                        <ul>
                                            <li><p>Số hóa quy trình công việc</p></li>
                                            <li><p>Tự động hóa luồng công việc</p></li>
                                            <li><p>Kiểm soát quy trình chặt chẽ</p></li>
                                            <li><p>Báo cáo khách quan tiến độ công việc, thời gian thực</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/office-106.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý thông tin tiến độ dự án</h3>
                                        <ul>
                                            <li><p>Quản lý hạng mục dự án</p></li>
                                            <li><p>Theo sát tiến độ dự án</p></li>
                                            <li><p>Phân quyền chuyên sâu</p></li>
                                            <li><p>Trao đổi công việc giữa các phòng ban Báo cáo tự động, đánh giá khách quan</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/office-107.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý lưu trữ các tài liệu công ty</h3>
                                        <ul>
                                            <li><p>Phân luồng quản lý và phân loại tài liệu</p></li>
                                            <li><p>Đảm bảo tính lưu trữ có hệ thống và theo quy chuẩn</p></li>
                                            <li><p>Phân quyền truy cập, chỉnh sửa văn bản, kiểm soát lịch sử sửa đổi văn bản đảm bảo tính bảo mật, an toàn của văn thư.</p></li>
                                            <li><p>Không mất thời gian cho việc in ấn, scan, ký tay tài liệu thay vào đó gán trực tiếp người cần gửi và thực thi trên hệ thống.</p></li>
                                            <li><p>Yêu cầu tài liệu hoặc chia sẻ quyền truy cập tài liệu cần thiết cho từng đối tượng khách hàng theo hạn sử dụng được định sẵn.</p></li>
                                        </ul>
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
                                    <div className={styles.service_crm_f}>
                                        <div className={styles.img_secrmr}>
                                            <h1>LỢI THẾ SỬ DỤNG​</h1>
                                            <img src="/imgACTech/Logo-35.png" />
                                            <div className={styles.underlined_key}></div>
                                        </div>
                                        <img src="/imgACTech/office-108.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <ul>
                                                    <li><p>Mang đến bức tranh tổng quan và chi tiết tất cả công việc của các cá nhân, đội nhóm, phòng ban trên một hệ thống tập trung trực tuyến</p></li>
                                                    <li><p>Hỗ trợ phân quyền hệ thống và phân quyền chức năng tới từng người sử dụng</p></li>
                                                    <li><p>Cho phép kết nối và đồng bộ dữ liệu với nhiều hệ thống khác</p></li>
                                                    <li><p>Giao diện tối giản và trực quan với nhiều biểu đồ, hiển thị theo kiểu kanban, list, grantt, pivot, bar chart, line chart, pie chart …</p></li>
                                                    <li><p>App thiết kế thân thiện với người dùng – đơn giản hóa tối đa thao tác để tất cả mọi người đều có thể dễ dàng sử dụng</p></li>
                                                    <li><p>Người dùng có thể làm việc mọi lúc mọi nơi</p></li>
                                                    <li><p>Khả năng bảo mật và độ tin cậy mạnh mẽ</p></li>
                                                    <li><p>Chi phí đầu tư linh hoạt và phù hợp với tất cả doanh nghiệp, với nhiều công nghệ hiện đại, mức chi phí phù hợp với các doanh nghiệp</p></li>

                                                </ul>
                                            </div>
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