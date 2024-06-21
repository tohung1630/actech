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
                    Định nghĩa về chính sách nhân sự? Cách thu hút nhân tài về cho doanh nghiệp?
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Chính sách nhân sự vô cùng quan trọng đối với doanh nghiệp. Đó là yếu tố thiết yếu trong việc thu hút được nhân tài, xây dựng và phát triển, để từ đó tăng sự cạnh tranh doanh nghiệp trên thị trường. </span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-sm-1024x683.jpg" />
                    </p>
                    <h3>
                        <b>Chính sách nhân sự là gì?</b>
                    </h3><br />
                    <p>
                        <span>Chính sách nhân sự là tập hợp các nguyên tắc, quy tắc, phương pháp và thủ tục được thiết lập để điều hành các hoạt động tuyển dụng, đào tạo, quản lý và sử dụng nhân lực trong doanh nghiệp. Chính sách này nhằm hỗ trợ doanh nghiệp vận hành một cách trơn tru nhất, thúc đẩy văn hóa, công bằng và hòa nhập cho nhân viên. </span>
                    </p>
                    <h3>
                        <b>Tầm quan trọng của chính sách nhân sự</b>
                    </h3><br />
                    <p>
                        <span>Chính sách nhân sự đóng vai trò vô cùng quan trọng trong quản lý nguồn nhân lực và phát triển doanh nghiệp. Cụ thể:</span>
                    </p>
                    <ul>
                        <li>
                            <b>Thu hút và giữ chân nhân tài:</b><span>Chính sách nhân sự giúp công ty thu hút và giữ chân nhân viên tài năng, giới thiệu công ty như một nơi lý tưởng để làm việc. Điều này giúp đảm bảo nguồn nhân lực chất lượng và ổn định để đáp ứng nhu cầu kinh doanh.</span>
                        </li>
                        <li>
                            <b>Xây dựng môi trường làm việc tích cực:</b><span>Chính sách nhân sự đóng vai trò quan trọng trong việc xây dựng một môi trường làm việc tích cực và khích lệ nhân viên thể hiện hết khả năng. Khi có tinh thần thoải mái, họ sẽ có xu hướng làm việc hiệu quả và gắn bó với công ty lâu dài.</span>
                        </li>
                        <li>
                            <b>Quản lý hiệu suất và phát triển nhân viên:</b><span>Chính sách nhân sự bao gồm các quy trình để quản lý hiệu suất và phát triển nhân viên: đặt mục tiêu, đánh giá hiệu suất, cung cấp đào tạo và phát triển nghề nghiệp. Chính sách nhân sự giúp tạo ra một hệ thống công bằng và khuyến khích sự phát triển cá nhân của nhân viên.</span>
                        </li>
                        <li>
                            <b>Đối xử công bằng:</b><span>Chính sách nhân sự cần đảm bảo rằng tất cả nhân viên được đối xử công bằng, không phân biệt đối xử dựa trên giới tính, chủng tộc, nguồn gốc, tôn giáo, tuổi tác hoặc bất kỳ yếu tố nào khác.</span>
                        </li>
                        <li>
                            <b>Tuân thủ luật lao động:</b><span>Chính sách nhân sự cần đảm bảo tuân thủ luật lao động và quy định liên quan đến việc quản lý nhân viên, giúp tránh rủi ro pháp lý và duy trì một môi trường làm việc hợp pháp.</span>
                        </li>
                    </ul>
                    <p>
                        <img src="/imgACTech/tintuc/collaborative-process-multicultural-businesspeople-using-laptop-presentation-communication-meeting-brainstorming-ideas-about-project-colleagues-working-plan-success-strategy-modern-office-1024x683.jpg" />
                    </p>
                    <h3>
                        <b>Cách thu hút nhân tài về cho doanh nghiệp</b>
                    </h3><br />
                    <p>
                        <span>Để thu hút nhân tài về cho doanh nghiệp là việc không hề dễ dàng. Dưới đây ACTech xin chia sẻ một số phương pháp mà bạn có thể áp dụng:</span>
                    </p>
                    <p>
                        <strong>1. Xây dựng thương hiệu nhà tuyển dụng (Employer Branding): </strong>
                    </p>
                    <p>
                        <span>Tạo ra hình ảnh tích cực về công ty và môi trường làm việc thông qua việc quảng bá các giá trị, lợi ích và cơ hội phát triển nghề nghiệp mà công ty tạo nên.</span>
                    </p>
                    <p>
                        <strong>2. Tìm kiếm ứng viên từ nhiều nguồn khác nhau: </strong>
                    </p>
                    <p>
                        <span>Sử dụng các kênh tuyển dụng đa dạng như trang web công ty, mạng xã hội, các trang web tuyển dụng, sự kiện tuyển dụng, đối tác liên kết với trường đại học và các tổ chức chuyên về việc làm.</span>
                    </p>
                    <p>
                        <strong>3. Xây dựng một quy trình tuyển dụng chuyên nghiệp: </strong>
                    </p>
                    <p>
                        <span>Đảm bảo rằng quy trình tuyển dụng được thực hiện một cách chính xác, công bằng và nhanh chóng. Cung cấp thông tin rõ ràng về vị trí việc làm, tiến trình tuyển dụng và kế hoạch phỏng vấn.</span>
                    </p>
                    <p>
                        <strong>4. Xây dựng chính sách phúc lợi cho nhân viên: </strong>
                    </p>
                    <p>
                        <span>Doanh nghiệp nên xây dựng các gói phúc lợi hợp lý, hấp dẫn để thu hút được ứng viên như như bảo hiểm y tế, chế độ nghỉ phép, chính sách lương thưởng, phúc lợi gia đình và cơ hội phát triển nghề nghiệp.</span>
                    </p>
                    <p>
                        <strong>5. Tạo môi trường làm việc tích cực: </strong>
                    </p>
                    <p>
                        <span>Xây dựng một môi trường làm việc thoải mái, tạo động lực và đoàn kết để thu hút và giữ chân nhân tài. Tạo ra các cơ hội phát triển, đào tạo và thăng tiến nghề nghiệp cho nhân viên.</span>
                    </p>
                    <p>
                        <strong>6. Xem xét các chính sách làm việc linh hoạt: </strong>
                    </p>
                    <p>
                        <span>Cân nhắc áp dụng các chính sách làm việc linh hoạt như làm việc từ xa, làm việc theo giờ linh hoạt để thu hút các ứng viên tài năng, đặc biệt là nhóm người trẻ tuổi.</span>
                    </p>
                    <p>
                        <strong>7. Xây dựng mối quan hệ với các trường đại học và tổ chức đào tạo: </strong>
                    </p>
                    <p>
                        <span>Thiết lập liên kết với các trường đại học, viện nghiên cứu và các tổ chức đào tạo để thu hút nhân tài trẻ và tạo ra cơ hội hợp tác và tuyển dụng.

                            Song, việc thu hút nhân tài không chỉ liên quan đến chính sách nhân sự mà còn phụ thuộc vào hình ảnh của công ty, cơ hội phát triển nghề nghiệp, mức lương và môi trường làm việc chung.</span>
                    </p>
                    <p>
                        <span>ACTech HRM – Giải pháp quản lý nguồn nhân lực toàn diện giúp các doanh nghiệp quản trị nguồn nhân lực hiệu quả xuyên suốt quá trình tuyển dụng, quản lý hồ sơ, theo dõi chấm công, quản lý KPI, đánh giá năng lực, đào tạo,…; đơn giản hóa quá trình xây dựng và ban hành chính sách nhân sự. Qua đó, nhà quản trị có thể xác định nhân sự phù hợp với nhu cầu của doanh nghiệp và hoạch định chiến lược phát triển nguồn nhân lực hiệu quả.</span>
                    </p>
                    <p>
                        <strong>Để được tư vấn chi tiết về Giải pháp quản lý nhân sự của ACTech, vui lòng liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage: <a target="_blank" href="https://www.facebook.com/actechsmt/">https://www.facebook.com/actechsmt/</a></strong>
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
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <strong>Email *</strong>
                    </p>
                    <p>
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <strong>Trang web</strong>
                    </p>
                    <p>
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <input type="checkbox"/>
                        Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                    </p>
                    <p>
                        <input type="submit" value="Gửi bình luận" className={styles.submit}/>
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}