import React, { Component } from 'react';
import Slider from "react-slick";
import faker from 'faker';
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Modal,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'
  
import '../../styles/App.css'
import '../../images/dummy.jpeg'
import '../SearchLawPage/LawContentModal.js';

class HomePage extends Component {
    
    render() { 
        var settings = {
            className: "center",
      centerMode: true,
      dots: true,
      arrows: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1300
          };

          


        return (
        <div >
<Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
  <Container text>
    <Header
      as='h1'
      content='Đọc luật'
      inverted
      style={{
        fontSize: '6em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:  '2em',
      }}
    />
    <Header
      as='h2'
      content='Lắng nghe âm thanh của công lý'
      inverted
      style={{
        fontSize:  '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        marginBottom: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Bắt đầu ngay
      {/* <Link style={{color:'white'}} to="/search">Bắt đầu ngay</Link> */}
      <Icon name='right arrow' />
    </Button>
  </Container>
</Segment>

  <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              9 luật có nhiều quy định mới được áp dụng trong năm 2019
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Luật An ninh mạng có hiệu lực từ ngày 1/1/2019 quy định chi tiết các hành vi người dùng bị cấm khi sử dụng không gian mạng như: tổ chức, xúi giục, lừa gạt, lôi kéo người chống nhà nước; xuyên tạc lịch sử, phủ nhận thành tựu cách mạng, phân biệt chủng tộc...
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Luật Giáo dục đại học sửa đổi 2018
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Luật Giáo dục đại học sửa đổi 2018, có hiệu lực từ 1/7/2019 giảm đáng kể thời gian thủ tục hành chính. Trước đây các trường phải báo cáo, đăng ký, đợi sự cho phép của cơ quan nhà nước mới được mở ngành đào tạo, tuyển dụng, bổ nhiệm nhân sự cấp cao.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='huge' src={require ("../../images/lawfixed.jpg")} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            {/* <Button size='huge'>Xem thêm</Button> */}
<Modal trigger={
  <Button  size='huge' color='blue'>Xem thêm </Button>
}>
      {/* <Modal.Header>idk</Modal.Header> */}
      <Modal.Content image>
        <Image wrapped size='huge' src={require('../../images/anm.jpeg')} />
        <Modal.Description>
          <Header as="h2">Luật An ninh mạng có hiệu lực 1/1/2019: Những nhóm hành vi nào bị cấm?</Header>       
          <p>Luật An ninh mạng gồm 7 chương, 43 điều quy định những nội dung cơ bản về bảo vệ an ninh mạng đối với hệ thống thông tin quan trọng về an ninh quốc gia, phòng ngừa, xử lý hành vi xâm phạm an ninh mạng, triển khai hoạt động bảo vệ an ninh mạng và quy định trách nhiệm của cơ quan, tổ chức, cá nhân. Luật nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của tổ chức, cá nhân đồng thời quy định đầy đủ các biện pháp phòng ngừa, đấu tranh, xử lý nhằm loại bỏ nguy cơ đe dọa, phát hiện và xử lý hành vi vi phạm pháp luật.</p>
          <p>Tại điều 8 – Luật An ninh mạng quy định 6 nhóm hành vi bị nghiêm cấm thực hiện trên không gian mạng.</p>

        <p>Cụ thể, sử dụng không gian mạng, công nghệ thông tin, phương tiện điện tử vi phạm an ninh quốc gia, trật tự an toàn xã hội; các hoạt động chống Nhà nước CHXHCN Việt Nam; xuyên tạc lịch sử, xúc phạm tôn giáo, phân biệt đối xử về giới, phân biệt chủng tộc; kích động gây bạo loạn, phá rối an ninh, gây rối trật tự công cộng; thông tin sai sự thật, làm nhục, vu khống; xâm phạm trật tự quản lý kinh tế, hoạt động mại dâm, tệ nạn xã hội, mua bán người và xúi giục, lôi kéo, kích động người khác phạm tội.</p>
          <p>Thực hiện chiến tranh mạng, tấn công mạng, khủng bố mạng, gián điệp mạng, tội phạm mạng; gây sự cố, tấn công, xâm nhập, chiếm quyền điều khiển, làm sai lệch, gián đoạn, ngưng trệ, tê liệt hoặc phá hoại hệ thống thông tin quan trọng về an ninh quốc gia.</p>
          <p>
Sản xuất, sử dụng công cụ, phương tiện, phần mềm hoặc có hành vi cản trở, gây rối loạn hoạt động của mạng máy tính, mạng viễn thông; phát tán chương trình tin học gây hại cho hoạt động của mạng máy tính, mạng viễn thông, phương tiện điện tử; xâm nhập trái phép vào mạng máy tính, mạng viễn thông hoặc phương tiện điện tử của người khác.</p>
  <Header as="h2">Luật giáo dục đại học sửa đổi</Header>
  <p>Theo đó, ngày 19/11/2018, tại kỳ họp thứ 6, Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XIV đã thông qua Luật sửa đổi, bổ sung một số điều của Luật Giáo dục đại học (sau đây gọi là Luật). Ngày 03/12/2018, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam đã ký Lệnh số 13/2018/L-CTN công bố và Luật có hiệu lực từ ngày 01/07/2019</p>

<p>Luật Giáo dục đại học (GDĐH) năm 2012 đã góp phần quan trọng vào quá trình phát triển GDĐH Việt Nam thời kỳ hội nhập quốc tế, tạo ra nhiều chuyển biến tích cực trong hệ thống giáo dục quốc dân nói chung và GDĐH nói riêng.</p>

<p>Tuy nhiên, sau 05 năm thi hành, Luật GDĐH năm 2012 đã bộc lộ một số hạn chế, bất cập, trở thành những điểm nghẽn, là nút thắt cần phải giải quyết để thực hiện đổi mới căn bản, toàn diện GDĐH, thúc đẩy và triển khai tự chủ của toàn hệ thống giáo dục đại học.</p>

<p>Bên cạnh đó, cần sửa Luật GDĐH 2012 để cụ thể hoá Hiến pháp 2013 trong GDĐH và đồng bộ với một số luật mới ban hành như Luật giá (2012), Luật Ngân sách Nhà nước (2015), Luật Đầu tư công (2014), Luật Giáo dục nghề nghiệp (2014), Luật Phí và Lệ phí (2015)... nhằm tạo sự thống nhất trong hệ thống các văn bản pháp luật liên quan đến GDĐH.</p>

<p>Việc sửa còn Luật nhằm chế hóa quan điểm đổi mới căn bản, toàn diện GDĐH của Đảng và Nhà nước theo nội dung của Nghị quyết 29/NQ-TƯ về đổi mới căn bản toàn diện giáo dục và đào tạo. Đồng thời, phát huy những kết quả đã đạt được, khắc phục những hạn chế, bất cập về điều chỉnh pháp luật đối với GDĐH trong thời gian qua để giải quyết những vấn đề mới phát sinh đối với GDĐH, đáp ứng yêu cầu đổi mới GDĐH, góp phần đào tạo nguồn nhân lực trình độ cao, phục vụ yêu cầu phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh và hội nhập quốc tế.</p>

<p>Hoàn thiện khung pháp lý về GDĐH để huy động mọi nguồn lực phát triển GDĐH, đổi mới quản lý nhà nước, đổi mới quản trị đại học, quản lý đào tạo tiệm cận các chuẩn quốc tế để phát triển GDĐH theo hướng chuẩn hóa, hiện đại hóa, dân chủ hóa, xã hội hóa; tạo điều kiện cho các cơ sở GDĐH tự chủ cạnh tranh bình đẳng, phát huy nội lực, linh hoạt, sáng tạo để nâng cao chất lượng GDĐH.</p>

<p>Sửa đổi, bổ sung Luật phải đảm bảo tính toàn diện, có trọng tâm, trọng điểm, có tính thực tiễn, thiết thực, khả thi; đảm bảo tính kế thừa, phát triển và hội nhập, tạo ra bước đột phá mới trong GDĐH phù hợp với xu hướng phát triển GDĐH trên thế giới.</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Tạo đột phá mới
            </Header>
            <p style={{ fontSize: '1.33em' }}>Trong thủ tục hành chính</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Xây dựng chính phủ điện tử
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src={faker.image.imageUrl()} />
              <b>Thủ tướng:</b> "Thực hiện quyết liệt từ cấp cao nhất"
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
 
            <div style={{margin:"40px"}}>
              <Header as='h3' style={{ fontSize: '3em' }}>Thông tin nổi bật</Header>
            </div>
            <Slider {...settings}>
            
                <InfoCard image={require ("../../images/hpslider1.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider2.jpeg")}/>
            
            <InfoCard image={require ("../../images/hpslider3.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider4.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider5.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider6.jpeg")}/>
            
            <InfoCard image={require ("../../images/hpslider7.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider8.jpg")}/>
            
            <InfoCard image={require ("../../images/hpslider9.jpg")}/>
            </Slider>

            <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          10 vấn đề trọng tâm xin ý kiến nhân dân về dự thảo Bộ Luật dân sự
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Thứ nhất, về trách nhiệm của cơ quan có thẩm quyền trong việc bảo vệ quyền dân sự. Vấn đề này có hai loại ý kiến: nhất trí với quy định của dự thảo bộ Luật là Tòa án không được từ chối yêu cầu giải quyết vụ việc dân sự vì lý do chưa có điều luật để áp dụng và ý kiến thứ hai là đề nghị không quy định trong BLDS trách nhiệm của Tòa án không được từ chối yêu cầu giải quyết vụ việc dân sự vì lý do chưa có điều luật để áp dụng.
        </p>
        
<Modal trigger={
  <Button  size='huge' color='blue'>Xem thêm </Button>
}>
      {/* <Modal.Header>idk</Modal.Header> */}
      <Modal.Content image>
        <Image wrapped size='huge' src={require('../../images/ykiennhandan.jpg')} />
        <Modal.Description>
          <Header as="h2">10 vấn đề trọng tâm xin ý kiến nhân dân về dự thảo Bộ Luật dân sự (sửa đổi):</Header>       
          <p>Thứ nhất, về trách nhiệm của cơ quan có thẩm quyền trong việc bảo vệ quyền dân sự. Vấn đề này có hai loại ý kiến: nhất trí với quy định của dự thảo bộ Luật là Tòa án không được từ chối yêu cầu giải quyết vụ việc dân sự vì lý do chưa có điều luật để áp dụng và ý kiến thứ hai là đề nghị không quy định trong BLDS trách nhiệm của Tòa án không được từ chối yêu cầu giải quyết vụ việc dân sự vì lý do chưa có điều luật để áp dụng.</p>
          <p>Về quyền nhân thân, có ý kiến đề nghị BLDS cần cụ thể hóa các quyền nhân thân được quy định trong Hiến pháp và điều ước quốc tế mà Việt Nam là thành viên, ý kiến khác đề nghị chỉ nên quy định một số quyền nhân thân nhằm xác định tư cách chủ thể của cá nhân trong quan hệ dân sự.</p>
          <p>Về chủ thể của các quan hệ pháp luật dân sự, nhân dân cần cho ý kiến về việc BLDS có một số quy định riêng về việc tham gia quan hệ pháp luật dân sự của các thành viên hộ gia đình, tổ hợp tác, các tổ chức khác không có tư cách pháp nhân hay tiếp tục ghi nhận hộ gia đình và tổ hợp tác là các chủ thể của quan hệ pháp luật dân sự như hiện hành.</p>
          <p>Về hậu quả pháp lý của giao dịch dân sự không tuân thủ quy định về hình thức cũng có hai loại ý kiến: giao dịch dân sự không vô hiệu khi việc không tuân thủ quy định về hình thức không nhằm trốn tránh nghĩa vụ với người khác và giao dịch dân sự đã chuyển giao tài sản hoặc đã thực hiện công việc; và đề nghị trong trường hợp quy định hình thức bắt buộc của giao dịch mà các bên không tuân thủ thì giao dịch bị vô hiệu.</p>
          <p>Về bảo vệ người thứ ba trong trường hợp giao dịch dân sự bị vô hiệu cũng có hai ý kiến, một là đồng tình với dự thảo bộ Luật, loại ý kiến thứ hai đề nghị người thứ ba ngay tình được bảo vệ quyền lợi khi nhận được bất động sản, động sản phải đăng ký quyền sở hữu thong qua bán đấu giá hoặc giao dịch với người mà theo bản án, quyết định của cơ quan nhà nước có thẩm quyền là chủ tài sản nhưng sau đó người này không phải là chủ sở hữu tài sản do bản án, quyết định bị hủy, sửa.</p>
          <p>Về hình thức sở hữu thì có nhiều ý kiến khác nhau. Ngoài ra, còn lấy ý kiến nhân dân về nhiều vấn đề khác như: thời điểm xác lập quyền sở hữu và các vật quyền khác; về thời hiệu yêu cầu Tòa án giải quyết vụ việc dân sự.</p>
          <p>Về lãi suất trong hợp đồng vay tài sản, có ý kiến nhất trí các bên có thỏa thuận và lãi suất này không qua 200% lãi suất cơ bản do Ngân hàng Nhà nước công bố đối với loại vay tương ứng; có ý kến đề nghị quy định mức trần cụ thể ngay trong Luật.</p>
          <p>Các ý kiến góp ý của nhân dân sẽ được nghiêm túc nghiên cứu, tiếp thu để chỉnh lý dự thảo Bộ Luật dân sự (sửa đổi), trình Quốc hội xem xét, quyết định.</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>

        
        <Divider />


        <Header as='h3' style={{ fontSize: '2em' }}>
          Bất an trước nhiều vấn đề nóng trong xã hội
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Nội dung chất vấn tiếp tục được trải rộng và nóng hầu như trên tất cả các lĩnh vực, được nhìn nhận là gây bất an, ảnh hưởng đến niềm tin, cuộc sống của người dân.
        </p>
        <Modal trigger={
  <Button  size='huge' color='blue'>Xem thêm </Button>
}>
      {/* <Modal.Header>idk</Modal.Header> */}
      <Modal.Content image>
        <Image wrapped size='huge' src={require('../../images/ykiennhandan.jpg')} />
        <Modal.Description>
          <Header as="h2">Bất an trước nhiều vấn đề nóng trong xã hội</Header>       
          <p>Nội dung chất vấn tiếp tục được trải rộng và nóng hầu như trên tất cả các lĩnh vực, được nhìn nhận là gây bất an, ảnh hưởng đến niềm tin, cuộc sống của người dân.</p>
          <p>Ngày 31-10, Quốc hội tiếp tục tiến hành chất vấn các thành viên Chính phủ, Chánh án Tòa án nhân dân tối cao, Viện trưởng Viện Kiểm sát nhân dân tối cao. Nội dung chất vấn tiếp tục được trải rộng và nóng hầu như trên tất cả các lĩnh vực, được nhìn nhận là gây bất an, ảnh hưởng đến niềm tin, cuộc sống của người dân.</p>
          <Header as="h2">Đủ điều kiện án treo, tòa vẫn phạt tù giam</Header>       
          <p>Tranh luận với Chánh án Tòa án nhân dân tối cao (TANDTC) Nguyễn Hòa Bình, ĐB Phạm Trí Thức (Thanh Hóa) dẫn con số, trong 2.000 đơn yêu cầu giám đốc thẩm, tái thẩm đã giải quyết được 1.000 đơn, trong đó số vụ giám đốc thẩm là 400 - 500 vụ - rất cao so với thế giới chỉ 100 - 200 vụ. Điều quan trọng khi mắc sai lầm là biết sửa chữa, nhưng sai lầm trong xét xử rất khó sửa chữa một cách tuyệt đối.</p>
          <p>ĐB Phạm Trí Thức dẫn chứng vụ án ông Vũ Bá Phê ở Phú Yên tranh chấp một con bê nhưng tòa xử sai, sau đó ông Phê đã tự tử. “Phía sau mỗi lá đơn là số phận của một con người, một gia đình, dòng họ chứ không phải đơn giản là giải quyết được một nửa là tốt lắm rồi”, ĐB Phạm Trí Thức nói.</p>
          <p>Phản hồi lại tranh luận của ĐB Phạm Trí Thức, Chánh án TANDTC Nguyễn Hòa Bình đồng tình với nguyên tắc đã sai phải sửa và nguyên lý này đúng trong tất cả lĩnh vực chính trị, kinh tế, xã hội, tư pháp. Việc giám đốc thẩm, tái thẩm đã giải quyết được 1.000 đơn không có nghĩa là con số này dừng lại mà tiếp tục xem xét, xác định những bản án khác.</p>
          <p>Theo Chánh án TANDTC Nguyễn Hòa Bình, quy định án treo được xem như một chế định nhân đạo khi ứng xử với một hành vi vi phạm. Khi tuyên án treo, xã hội hay đặt ra câu chuyện có tiêu cực hay không? Trong một số trường hợp có thể đủ điều kiện án treo nhưng các công tố viên cũng như thẩm phán, để đảm bảo an toàn thì thường không áp dụng án này. Quy định về án treo khắt khe, đã có tập huấn, hướng dẫn nhưng thực tế khi đi kiểm tra, không chỉ có ngành dọc viện, tòa hay Bộ Công an, mà kể cả các cơ quan của Quốc hội cũng đặt vấn đề là án treo có vấn đề gì hay không. “Cần phải nhìn nhận vấn đề án treo một cách khách quan hơn”, Chánh án Nguyễn Hòa Bình nói.</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
      </Container>
    </Segment>

            
        
        </div>
         );
    }
}
 
export default HomePage;