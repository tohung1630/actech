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
                    Phương pháp Kaizen là gì? Lợi ích Kaizen mang lại cho doanh nghiệp?
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Phương pháp Kaizen là một phương pháp quản lý và cải tiến liên tục xuất phát từ Nhật Bản. “Kaizen” có nghĩa là “thay đổi để tốt hơn ” hoặc “cải tiến liên tục” trong tiếng Nhật. Phương pháp được áp dụng để nâng cao hiệu suất, kiểm soát chất lượng, chất lượng của một tổ chức, doanh nghiệp thông qua việc tạo ra những thay đổi nhỏ liên tục và duy trì tinh thần cải tiến trong tất cả các khía cạnh của công việc.</span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/ung-dung-kaizen-trong-cai-tien-chat-luong-1.jpg" />
                    </p>
                    <p>
                        <span>Phương pháp Kaizen đặt trọng tâm vào sự tham gia và đóng góp của tất cả nhân viên trong tổ chức, từ nhân viên đến các bộ cấp cao để đảm bảo mọi hoạt động của tổ chức luôn được cải tiến liên tục, nhằm mục đích nâng cao năng suất, tiết kiệm chi phí,…. Điều này không chỉ tập trung áp dụng vào việc cải tiến quy trình sản xuất mà còn áp dụng cho mọi khía cạnh trong tổ chức, từ quản lý, marketing, dịch vụ khách hàng, tới quy trình hỗ trợ và văn phòng.</span>
                    </p>

                    <h3>
                        <b>Các nguyên tắc chính của phương pháp Kaizen:</b>
                    </h3><br />
                    <ul>
                        <li>Luôn tập trung vào lợi ích của khách hàng: Các sản phẩm/ dịch vụ được định hướng theo thị trường để đáp ứng đúng nhu cầu của khách hàng.</li>
                        <li>Không ngừng cải tiến: “Hoàn thành” không có nghĩa là kết thúc công việc, hoàn thành là kết thúc một giai đoạn trước khi chuyển sang giai đoạn kế tiếp. Doanh nghiệp cần liên tục cải tiến chất lượng, liên tục đổi mới để có thể đáp ứng được nhu cầu của khách hàng trong tương lai.</li>
                        <li>Đề cao ý kiến đóng góp: Khuyến khích tất cả nhân viên đưa ra ý kiến, góp ý tham gia vào quá trình cải tiến, trao đổi học hỏi kinh nghiệm lẫn nhau, từ đó thúc đẩy sự phát triển của một tập thể.</li>
                        <li>Cải tiến nhỏ liên tục: Thay vì chờ đợi một thay đổi lớn, phương pháp Kaizen tập trung vào những cải tiến nhỏ, liên tục hàng ngày. Các cải tiến nhỏ này khi tích lũy lại có thể tạo ra sự thay đổi to lớn.</li>
                        <li>Tìm kiếm nguyên nhân gốc rễ: Đối với mỗi vấn đề hay sự cố, phương pháp Kaizen tập trung vào tìm ra nguyên nhân gốc rễ để khắc phục, thay vì chỉ xử lý tạm thời các triệu chứng.</li>
                        <li>Duy trì thái độ làm việc tích cực: Những mối quan hệ tiêu cực có thể làm ảnh hưởng đến sự phát triển của doanh nghiệp. Vì vậy, doanh nghiệp cần có những chương trình đào tạo, trang bị tư duy quản trị khoa học cho toàn thể công ty, bao gồm cả nhân viên và các cấp quản lý.</li>
                    </ul>
                    <p>
                        <img src="/imgACTech/tintuc/businessmen-businesswomen-meeting-brainstorming-ideas-1024x576.jpg" />
                    </p>
                    <h3>
                        <b>6 bước thực hiện phương pháp Kaizen để quản lý chất lượng sản phẩm</b>
                    </h3><br />
                    <p>
                        <strong>Bước 1: Phân tích quy trình ảnh hưởng đến sản xuất</strong>
                    </p>
                    <p>
                        <span>Doanh nghiệp cần xem xét và nhận diện những điểm không phù hợp, ảnh hưởng đến chất lượng sản phẩm, tập trung kiểm soát chất lượng một cách toàn diện qua các giai đoạn: IQC (kiểm soát chất lượng đầu vào), PQC (kiểm soát quy trình sản xuất), OQC (kiểm soát chất lượng đầu ra).</span>
                    </p>
                    <p>
                        <strong>Bước 2: Xác định vấn đề ảnh hưởng đến chất lượng của sản phẩm</strong>
                    </p>
                    <p>
                        <span>Thông qua việc quan sát, phân tích những điểm không phù hợp, đặc biệt là trong khâu kiểm soát chất lượng, doanh nghiệp cần xác định những vấn đề ảnh hưởng đến chất lượng một cách chính xác thì mới có thể giải quyết tận gốc rễ của vấn đề.</span>
                    </p>
                    <p>
                        <strong>Bước 3: Xây dựng giải pháp cải tiến chất lượng</strong>
                    </p>
                    <p>
                        <span>Để có thể xây dựng các giải pháp cải tiến chất lượng một cách hiệu quả, doanh nghiệp cần tham khảo lời khuyên của các chuyên gia trong lĩnh vực sản xuất. Nhà quản lý cũng có thể tham khảo ý kiến từ các phòng ban khác để có được những góc nhìn đa chiều hơn.</span>
                    </p>
                    <p>
                        <strong>Bước 4: Thực hiện cải tiến theo phương pháp đã đề ra</strong>
                    </p>
                    <p>
                        <span>Đây chính là thời điểm mà doanh nghiệp triển khai Kaizen theo kế hoạch đã lập trước đó. Trong quá trình thực hiện, các cấp quản lý và những người có liên quan cần thường xuyên đến để thu thập thông tin và kiểm tra, giám sát việc áp dụng Kaizen vào thực tế của doanh nghiệp.</span>
                    </p>
                    <p>
                        <strong>Bước 5: Đo lường và đánh giá kết quả</strong>
                    </p>
                    <p>
                        <span>Sử dụng các dữ liệu để so sánh với những yêu cầu ban đầu đặt ra để kiểm tra các bước Kaizen có được thực hiện hiệu quả hay không. Sau đó dựa trên báo cáo, doanh nghiệp có thể đánh giá quá trình kaizen có kết quả tương xứng với kỳ vọng mà doanh nghiệp đặt ra hay không?</span>
                    </p>
                    <p>
                        <strong>Bước 6: Chuẩn hóa giải pháp quản lý chất lượng trong doanh nghiệp</strong>
                    </p>
                    <p>
                        <span>Nếu quá trình Kaizen đóng góp vào việc nâng cao hiệu quả chất lượng của sản phẩm, doanh nghiệp cần tiêu chuẩn hóa lại quy trình quản lý chất lượng và thực hiện nó như một quy tắc trong toàn công ty. Trong trường hợp không đạt được kết quả như kỳ vọng, doanh nghiệp sẽ phải thay đổi hướng tiếp cận một cách tổng thể và triệt để hơn.</span>
                    </p>

                    <p>
                        <strong>Những lợi ích của phương pháp Kaizen mang lại</strong>
                    </p>
                    <ul>
                        <li>Tăng năng suất và hiệu suất: Kaizen tập trung vào việc tìm kiếm và loại bỏ các hoạch định không cần thiết, tối ưu hóa quy trình làm việc và tăng cường sự hiệu quả. Điều này dẫn đến sự tăng năng suất và hiệu suất làm việc của tổ chức, giúp tiết kiệm thời gian và tài nguyên.</li>
                        <li>Cải thiện chất lượng: Kaizen đặt sự chú trọng vào việc tìm hiểu nguyên nhân gốc rễ của các vấn đề và lỗi xảy ra trong quá trình làm việc. Bằng cách áp dụng phương pháp Kaizen, các tổ chức có thể liên tục cải thiện chất lượng sản phẩm hoặc dịch vụ của mình. Điều này giúp tạo ra sự tin tưởng từ khách hàng và nâng cao hình ảnh thương hiệu.</li>
                        <li>Thúc đẩy sự tham gia và đóng góp của nhân viên: Phương pháp Kaizen khuyến khích tất cả nhân viên trong tổ chức tham gia vào quá trình cải tiến. Nhân viên được khuyến khích đưa ra ý kiến, đề xuất và tham gia vào quyết định. Điều này tạo điều kiện để nhân viên phát triển kỹ năng và trách nhiệm cá nhân, tăng khả năng giải quyết vấn đề và tạo động lực làm việc.</li>
                        <li>Giảm lãng phí và chi phí: Kaizen nhắm đến việc tối thiểu hóa lãng phí và sử dụng tài nguyên một cách hiệu quả. Bằng cách tìm kiếm và phân tích các quy trình làm việc không cần thiết để tối ưu hóa luồng công việc, giảm thiểu thất thoát, tổ chức có thể tiết kiệm chi phí và tài nguyên.</li>
                        <li>Khả năng thích ứng và đổi mới: Phương pháp Kaizen tạo ra một môi trường linh hoạt và đáp ứng nhanh chóng đối với sự thay đổi. Bằng cách thực hiện các cải tiến nhỏ liên tục, tổ chức trở nên nhạy bén hơn đối với thị trường, khả năng thích ứng với yêu cầu mới và khả năng đổi mới để duy trì sự cạnh tranh.</li>
                    </ul>
                    <p>
                        <img src="/imgACTech/tintuc/50caad82-92ee-4d8d-9265-ad951c895d5d.jpg" />
                    </p>
                    <p>
                        <span>Tóm lại, phương pháp Kaizen đã được áp dụng thành công trong nhiều tổ chức trên toàn thế giới và đóng góp vào sự nâng cao hiệu suất và chất lượng công việc. Tuy nhiên, để ứng dụng thành công mỗi doanh nghiệp cần có sự nghiên cứu, thấu hiểu nhu cầu của chính doanh nghiệp mình trước khi sử dụng phương pháp Kaizen, để từ đó có thể mang lại hiệu quả cao nhất.</span>
                    </p>
                    <p>
                        <strong>Thấu hiểu được những khó khăn, vướng mắc mà doanh nghiệp gặp phải trong quá trình áp dụng phương pháp quản trị sản xuất, ACTech đã cho ra mắt phần mềm ACTech MRP – Giải pháp quản lý sản xuất thông minh, tinh gọn giúp doanh nghiệp giải quyết triệt để những khó khăn trong quá trình sản xuất với những phương pháp quản trị sản xuất tiên tiến, tự động hóa quy trình, công đoạn trong sản xuất mang đến hiệu suất, năng suất cao cho doanh nghiệp.</strong>
                    </p>
                    <p>
                        <strong>ACTech MRP cung cấp các tính năng:</strong>
                    </p>
                    <p>
                        <strong>Thiết lập mô hình sản xuất tăng tính hiệu quả, thích ứng với doanh nghiệp</strong>
                    </p>
                    <p>
                        <strong>Lập kế hoạch sản xuất, máy móc, nguyên vật liệu, nhân sự dễ dàng</strong>
                    </p>
                    <p>
                        <strong>Định mức nguyên vật liệu, sản xuất theo dự báo – theo đơn đặt hàng – theo dòng chảy – theo số lô hàng tránh tồn kho, thất thoát hàng hóa.</strong>
                    </p>
                    <p>
                        <strong>Phương pháp sản xuất 4M, PDCA, KPI, BSC, JIT, TPS tiên tiến hàng đầu hiện nay.</strong>
                    </p>
                    <p>
                        <strong>Khả năng tự động phát hiện lỗi, phân tích lỗi, loại bỏ lãng phí, cân bằng hệ thống sản xuất.</strong>
                    </p>
                    <p>
                        <strong>Tự động quản lý năng suất hiệu suất thời gian, con người trong sản xuất.</strong>
                    </p>
                    <p>
                        <strong> Báo cáo hiệu quả năng xuất, tiến độ nhân lực, máy móc trong quá trình sản xuất.</strong>
                    </p>
                    <p>
                        <strong>Chi tiết tham khảo tại: <a href="https://actechsmt.com/san-pham/service-mrp/">https://actechsmt.com/san-pham/service-mrp/</a> </strong>
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