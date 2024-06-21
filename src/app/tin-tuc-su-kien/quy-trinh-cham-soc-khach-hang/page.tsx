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

export default function Home() {

    return (
        <DefaultLayout>
            <div className={styles.site_main}>
                <h1 className={styles.entry_title}>
                    4 bước xây dựng quy trình chăm sóc khách hàng
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Trong bối cảnh cạnh tranh giữa các doanh nghiệp không ngừng gia tăng, việc chú trọng vào trải nghiệm khách hàng ngày càng được các doanh nghiệp ưu tiên. Xây dựng quy trình chăm sóc khách hàng để tạo mối quan hệ vững chắc với khách hàng, từ đó làm nền tảng phát triển của doanh nghiệp, tạo dựng được thương hiệu mà khách hàng yêu mến.</span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/focused-handsome-asian-man-working-call-center-office-as-telemarketing-operator_8087-4240.jpg" />
                    </p>
                    <h3>
                        <b>Quy trình chăm sóc khách hàng là gì?</b>
                    </h3><br />
                    <p>
                        <span>Quy trình chăm sóc khách hàng là một chuỗi các hoạt động được thiết kế để đảm bảo sự hài lòng của khách hàng và duy trì mối quan hệ lâu dài với họ. Xây dựng một quy trình chăm sóc khách hàng tốt sẽ tối đa hóa trải nghiệm cho khách hàng, xây dựng hình ảnh đẹp trong tâm trí khách hàng và nâng tầm vị thế thương hiệu.</span>
                    </p>
                    <h3>
                        <b>Các bước quy trình chăm sóc khách hàng:</b>
                    </h3><br />
                    <p>
                        <strong>1. Xây dựng mục tiêu và chiến lược cụ thể: </strong>
                    </p>
                    <p>
                        <span>Để có thể hoạch định chiến lược và xây dựng các bước chăm sóc khách hàng phù hợp, doanh nghiệp cần xác định mục tiêu và thiết lập kế hoạch cụ thể. Từ đó đánh giá được năng lực của doanh nghiệp một cách chân thực, khách quan nhất. Cần chuẩn bị các phương án giải quyết giả định khi có vấn đề phát sinh để mang lại hiệu quả tối ưu cho quy trình chăm sóc khách hàng.</span>
                    </p>
                    <p>
                        <strong>2. Phân loại tệp khách hàng: </strong>
                    </p>
                    <p>
                        <span>Phân loại tệp khách hàng và đánh giá nhu cầu cụ thể là chính chìa khóa để khách hàng đồng ý chi trả cho dịch vụ, sản phẩm mang lại giá trị cho họ. Tùy thuộc vào từng nhóm đối tượng khác nhau sẽ có phương án chăm sóc khách hàng phù hợp, giúp doanh nghiệp tạo dựng thông điệp, khai thác được khách hàng tiềm năng.</span>
                    </p>
                    <p>
                        <strong>3. Phân chia trách nhiệm chăm sóc khách hàng: </strong>
                    </p>
                    <p>
                        <span>Phân chia trách nhiệm chăm sóc khách hàng rõ ràng cho từng nhân viên, đồng thời xây dựng chính sách thưởng phạt minh bạch, sẽ giúp thúc đẩy trách nhiệm của nhân viên với công việc, qua đó nâng cao chất lượng dịch vụ khách hàng.</span>
                    </p>
                    <p>
                        <strong>4. Đánh giá mức độ hiệu quả và điều chỉnh: </strong>
                    </p>
                    <p>
                        <span>Dựa vào thống kê, chỉ số, doanh nghiệp có thể đánh giá mức độ hiệu quả để xác định vấn đề trong quá trình chăm sóc khách hàng. Qua đó thiết lập tiêu chí và đánh giá, đề xuất giải pháp để cải tiến, điều chỉnh quy trình giúp cho doanh nghiệp nâng cao chất lượng chăm sóc khách hàng.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/business-team-discussing-project-scaled.jpg" />
                    </p>
                    <h3>
                        <b>Lợi ích của quy trình chăm sóc khách hàng:</b>
                    </h3><br />
                    <p>
                        <span>Quy trình chăm sóc khách hàng có thể thay đổi tùy thuộc vào từng công ty và ngành nghề cụ thể. Khi nắm được các bước nêu trên, doanh nghiệp có thể áp dụng để mang lại nhiều lợi ích như:</span>
                    </p>
                    <ul>
                        <li>
                            <b>Sự hài lòng của khách hàng:</b><span>Quy trình chăm sóc khách hàng giúp đảm bảo rằng các yêu cầu, thắc mắc và khiếu nại của khách hàng được giải quyết một cách nhanh chóng và hiệu quả. Khi khách hàng được chăm sóc tốt, họ sẽ cảm thấy hài lòng và có xu hướng tiếp tục sử dụng sản phẩm/ dịch vụ của bạn, đồng thời có thể giới thiệu sản phẩm/ dịch vụ cho người khác, giúp tăng mức độ nhận biết về thương hiệu.</span>
                        </li>
                        <li>
                            <b>Xây dựng mối quan hệ lâu dài:</b><span>Việc thể hiện sự quan tâm và sẵn lòng giúp đỡ khách hàng sẽ tạo ra sự tin tưởng và lòng trung thành của khách hàng. Khách hàng có thể cảm thấy rằng họ được tôn trọng, quan tâm, từ đó duy trì được mối quan hệ kinh doanh lâu dài.</span>
                        </li>
                        <li>
                            <b>Tăng cơ hội phát triển kinh doanh:</b><span>Quy trình chăm sóc khách hàng tạo cơ hội cho doanh nghiệp tương tác trực tiếp với khách hàng để hiểu rõ nhu cầu, mong muốn và sở thích của họ. Dựa điều đó, doanh nghiệp có thể sáng tạo, cung cấp các sản phẩm hoặc dịch vụ mới, nâng cấp hoặc mở rộng các dịch vụ hiện có, đóng góp vào việc phát triển kinh doanh của bạn.</span>
                        </li>
                    </ul>

                    <br/>
                    <p>
                        <span>Nhằm hỗ trợ nhà quản lý trong việc theo dõi, cập nhật các chỉ số thống kê hiệu quả CSKH và bán hàng theo thời gian thực (real-time), ACTech Business – Giải pháp Kinh doanh và chăm sóc khách hàng, là hệ thống ERP thu nhỏ của khối kinh doanh xuyên suốt từ khâu lên kế hoạch – marketing – chăm sóc khách hàng – bán hàng – báo cáo. Doanh nghiệp có thể quản lý tập trung dữ liệu khách hàng, dễ dàng theo dõi các chỉ số thống kê hiệu quả của đội ngũ bán hàng và CSKH, từ đó tăng doanh thu và nâng cao chất lượng dịch vụ.</span>
                    </p>
                    <p>
                        <strong>Chi tiết xin liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage:<a target="_blank" href="https://www.facebook.com/actechsmt/"> https://www.facebook.com/actechsmt/</a></strong>
                    </p>
                    <h2 className={styles.comment_reply_title}>Trả lời</h2>
                    <p>
                        <span>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</span>
                    </p>
                    <p>
                        <strong>Bình luận *</strong>
                    </p>
                    <p>
                        <textarea name="comment" className={styles.textarea} ></textarea>
                    </p>
                    <p>
                        <strong>Tên *</strong>
                    </p>
                    <p>
                        <input className={styles.input} />
                    </p>
                    <p>
                        <strong>Email *</strong>
                    </p>
                    <p>
                        <input className={styles.input} />
                    </p>
                    <p>
                        <strong>Trang web</strong>
                    </p>
                    <p>
                        <input className={styles.input} />
                    </p>
                    <p>
                        <input type="checkbox" />
                        Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                    </p>
                    <p>
                        <input type="submit" value="Gửi bình luận" className={styles.submit} />
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}