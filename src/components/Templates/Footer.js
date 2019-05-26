import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react';
import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Thành viên nhóm' />
              <List link inverted>
                <List.Item as='a'>Nguyễn Gia Bảo</List.Item>
                <List.Item as='a'>Lê Hoàng Dương</List.Item>
                <List.Item as='a'>Phạm Lương Hào</List.Item>
                <List.Item as='a'>Nguyễn Ngọc Xuân Huy</List.Item>
                <List.Item as='a'>Thái Hoàng Nguyên</List.Item>
                <List.Item as='a'>Nguyễn Văn Tường</List.Item>
                
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Dịch vụ' />
              <List link inverted>
                <List.Item as='a'>Tìm kiếm luật</List.Item>
                <List.Item as='a'>Tạo tập tin âm thanh cho đoạn văn bản</List.Item>
                <List.Item as='a'>Thanh toán để mua file âm thanh của bộ luật</List.Item>
                {/* <List.Item as='a'>Favorite X-Men</List.Item> */}
              </List>
            </Grid.Column>
            {/* <Grid.Column width={7}> */}
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Ứng dụng ĐỌC LUẬT
              </Header>
              <p>
                Đây là sản phẩm được phát triển bởi nhóm 8 nhằm phục vụ cho môn Thực tập công nghệ phần mềm
              </p>
            </Grid.Column>

            <Grid.Column width={3} style={{ backgroundColor:''}}>
              <Image size='small' centered src={require('../../images/logo.png')}></Image>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
         );
    }
}
 
export default Footer;

