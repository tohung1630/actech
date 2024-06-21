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
    YoutubeOutlined
} from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DefaultLayout from '../../components/DefaultLayout/layoutMenu';
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

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <DefaultLayout>
            <div>
                <div className={`${styles.contentStyle}`}>
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src='/imgACTech/ACTech_Horizontal-1.png' />
                                        <h1>HƯỚNG DẪN SỬ DỤNG</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Cách sử dụng sản phẩm của chúng tôi</p><br />
                                        </div>
                                        <div className={styles.div_btn}>
                                            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn</button>
                                            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car}>
                                <img src="/imgACTech/web-2-162.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <h2>TÍNH NĂNG TẠO PHẦN THƯỞNG CHO NHÂN VIÊN</h2>
                            <p>Khi công ty có nhân viên mới đến hoặc nhân viên thôi việc, bạn sẽ cần lập một kế hoạch, một danh sách những công việc cần làm đối với sự việc đó, nhân viên đó. Ví dụ: lập kế hoạch đào tạo, định hướng và đánh giá nhân viên,… Việc lập kế hoạch hành động cho nhân viên trên phần mềm Viindoo được thực hiện đơn giản, ít thao tác nhưng mang lại hiệu quả cao, giúp bạn có được kế hoạch làm việc cụ thể, tránh bỏ sót các đầu việc quan trọng, giảm thiểu thời gian và công đoạn không cần thiết.</p><br />
                            <h3>Tạo Kiểu kế hoạch</h3><br />
                            <p>Để cấu hình kiểu kế hoạch, trước tiên bạn cần <strong>kích hoạt chế độ nhà phát triển</strong>, sau đó bạn truy cập ứng dụng <strong>Nhân viên</strong>.</p><br />
                            <img src="/imgACTech/hdsd-1.jpg" />
                            <p>Sau đó truy cập menu Cấu hình ‣ Kiểu kế hoạch.</p><br />
                            <img src="/imgACTech/hdsd-2.jpg" /><br />
                            <p>Màn hình hiển thị danh sách các Kiểu kế hoạch. Bạn click vào nút <strong>Tạo</strong> để tạo một Kiểu kế hoạch.</p><br />
                            <img src="/imgACTech/hdsd-3.jpg" /><br />
                            <p>Sau khi bạn click <strong>Tạo</strong>, màn hình hiển thị giao diện Kiểu kế hoạch. Bạn cần nhâp các thông tin:</p>
                            <ul>
                                <li><strong>Kiếu hoạt động</strong>: chọn một trong các kiểu hoạt động có sẵn như Cần làm, Tải tài liệu lên,…</li>
                                <li><strong>Tóm tắt</strong>: tên nội dung công việc.</li>
                                <li><strong>Người phụ trách</strong>: là người thực hiện hoạt động này hay hoạt động này được phân công cho ai. Bạn có thể chọn bản thân nhân viên này, hoặc người quản lý, người huấn luyện được thiết lập trên giao diện nhân viên, hoặc một ai đó khác (Nếu bạn chọn <strong>Khác</strong>, phần mềm sẽ hiển thị trường thông tin <strong>Người chịu trách nhiệm</strong> cho phép bạn thiết lập một người mà không phải người quản lý, huấn luyện của nhân viên có thể chịu trách nhiệm thực hiện hoạt động này).</li>
                                <li><strong>Ghi chú</strong>: tại đây, bạn có thể sử dụng bộ công cụ soạn thảo văn bản để bổ sung thông tin về địa điểm, chi tiết nội dung công việc,…</li>
                            </ul><br />
                            <p>Sau khi hoàn thành các thiết lập, bạn click vào Lưu.</p>
                            <img src="/imgACTech/hdsd-4.jpg" /><br />
                            <img src="/imgACTech/hdsd-5.jpg" /><br />
                            <img src="/imgACTech/hdsd-6.jpg" /><br />
                            <h3>Tạo Kế hoạch</h3><br />
                            <p>Sau khi thiết lập Kiểu kế hoạch, bạn tiến hành thiết lập Kế hoạch. Bạn truy cập vào menu <strong>Cấu hình ‣ Kế hoạch</strong>.</p><br />
                            <img src="/imgACTech/hdsd-7.png" /><br />
                            <p>Màn hình hiển thị danh sách các Kế hoạch. Bạn click vào nút <strong>Tạo</strong>.</p>
                            <img src="/imgACTech/hdsd-8.jpg" /><br />
                            <p>Bạn cần nhập các thông tin sau:</p><br />
                            <ul>
                                <li><strong>Tên kế hoạch</strong>: tên của kế hoạch.</li>
                                <li><strong>Hoạt động</strong>:  click vào <strong>Thêm một dòng</strong>, màn hình hiển thị cửa sổ danh sách các Kiểu kế hoạch đã được bạn thiết lập ở trên. Bạn click để chọn 1 hoặc tích chọn nhiều Kiểu kế hoạch.</li>
                            </ul><br />
                            <img src="/imgACTech/hdsd-10.jpg" /><br />
                            <img src="/imgACTech/hdsd-11.jpg" /><br />
                            <p>Sau khi thiết lập các thông tin cần thiết, bạn click <strong>Lưu</strong>.</p><br />
                            <img src="/imgACTech/hdsd-12.jpg" /><br />
                            <h3>Khởi động kế hoạch</h3><br />
                            <p>Khi bạn muốn lập một Kế hoạch cho nhân viên, bạn truy cập vào giao diện của nhân viên đó bằng cách truy cập vào menu</p><br />
                            <p>Nhân viên và chọn nhân viên bạn muốn lập kế hoạch.</p><br />
                            <img src="/imgACTech/hdsd-13.jpg" /><br />
                            <p>Tại giao diện nhân viên, bạn cần kiểm tra trường thông tin <strong>Người quản lý</strong> và <strong>Người huấn luyện</strong> để đảm bảo đúng. Sau đó click vào nút <strong>Khởi động kế hoạch</strong>.</p><br />
                            <img src="/imgACTech/hdsd-14.jpg" /><br />
                            <p>Màn hình hiển thị cửa sổ như sau, bạn hãy chọn một Kế hoạch mà bạn muốn thực hiện đối với nhân viên này, sau đó click <strong>Khởi động kế hoạch</strong>.</p><br />
                            <img src="/imgACTech/hdsd-15.jpg" /><br />
                            <p>Sau khi bạn khởi động kế hoạch, tại giao diện lịch sử trao đổi sẽ xuất hiện các hoạt động đã lên Kế hoạch với các ấn định hoạt động cụ thể cho các đối tượng là quản lý, người huấn luyện, người chịu trách nhiệm hoặc nhân viên dựa trên thiết lập tại Kiểu kế hoạch.</p><br />
                            <img src="/imgACTech/hdsd-16.jpg" /><br />
                        </div>
                    </div>
                </div>

                <div className={styles.field1}>
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
                                            </div>
                                            <div>
                                                <Row gutter={24}>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("email")} placeholder="Email" />
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("phone")} placeholder="Số điện thoại" />
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("company")} placeholder="Công ty" />
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
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <select {...register("scale")}>

                                                    <option value="" disabled selected>Khu vực</option>
                                                    <option value="hanoi">Hà Nội</option>
                                                    <option value="hochiminh">Hồ Chí Minh</option>
                                                    <option value="mienbac">Miền Bắc</option>
                                                    <option value="mientrung">Miền Trung</option>
                                                    <option value="miennam">Miền Nam</option>
                                                </select>
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register("content")} placeholder="Nội dung yêu cầu" />
                                            </div>

                                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NAY' /></div>
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

                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NAY' /></div>
                            <p>{isEamil}</p>
                        </form>
                    </div>
                </Modal>
            </div>
        </DefaultLayout>
    )
}
