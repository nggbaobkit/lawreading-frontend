import React from 'react';
import axios from 'axios';
import {RadioGroup, Radio} from 'react-radio-group';
import { Segment, Button, Header, Grid, TextArea , Form, Divider} from 'semantic-ui-react';
// import logo from './logo.svg';
import '../../styles/App.css'
import greetingFile from './greeting.mp3'

class SearchBar extends React.Component {
    
    state = { term: '' , accent: 'male', speed: 0, myLink: greetingFile, errorMessage: ''}

    renderLink () {
        try {
            return (
                <div className="link-card-container" >
                    <audio controls autoPlay ref="audio" key={this.state.myLink} src={this.state.myLink} >
                        {/* <source type="audio/mpeg"/> */}
                    </audio>
                </div>            
            ) 
        } catch (error) {
            console.log(error)
        }        
    }

    onFormSubmit = async () => {
        console.log("Form submitted!")
        const response = await axios.post('http://api.openfpt.vn/text2speech/v4', this.state.term ,{
          headers:{ 
            voice: this.state.accent,
            api_key: '989cddfc4701435793349d1313f00195' 
          }
        });
        if (response.data.error) {
          this.setState({errorMessage: response.data.error})
        }
        else {
            this.setState({myLink : response.data.async} )
        }
    }

    handleChange = (e) => { this.setState({accent: e}) }

    handleTextAreaChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() { 
        return (
<Segment style={{backgroundColor:'' ,minHeight: 700, padding: '1em 0em' }} vertical>
<Grid className="my-grid">
    <Grid.Row columns={2} >
        <Grid.Column style={{backgroundColor:'', margin: 'auto 0'}}>
            <div style={{ backgroundColor:'', margin: '5em'}}>
            <Header style={{fontSize:'4em'}} inverted icon textAlign='left'>Đọc luật</Header>
            <p style={{color:'white', fontSize:'1.2em', marginBottom:'3em'}}>Chuyển đổi văn bản thành giọng nói tiếng Việt với ngữ điệu và lựa chọn phong phú về vùng miền/giới tính.</p>
            <Button inverted basic size='huge' color='grey' type="Submit" onClick={(e) => console.log(e)}>Liên hệ</Button>
            </div>
            
        </Grid.Column>
        
        <Grid.Column>
        <Form className="my-form" onSubmit={this.onFormSubmit}>
            <Form.Field>
                <Header as="h1"  inverted>Văn bản cần đọc</Header>
                <TextArea style={{ minHeight: '200px' }} 
                    value={this.state.term} 
                    onChange={this.handleTextAreaChange} />
                <Divider horizontal></Divider>
            </Form.Field>
            <Form.Field>
                <RadioGroup name="accent" selectedValue={this.state.accent} onChange={this.handleChange} style={{margin: "20px"}}>
                    <Grid columns='two' divided>
                        <Grid.Row>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="leminh" /> Giọng nam miền Bắc</label>
                        </Grid.Column>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="hatieumai" /> Giọng nữ miền Nam</label>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="female" /> Giọng nữ miền Bắc</label>
                        </Grid.Column>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="ngoclam" /> Giọng nữ miền Trung</label>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </RadioGroup>
            </Form.Field>
            <div style={{display:'flex', flexDirection:'row', height:'80px', justifyContent:'center', alignItems:'center', backgroundColor:''}}>
                <Button style={{padding:'20px'}} inverted sbasic size='huge' color='teal' type="Submit">Tạo file âm thanh</Button> {this.renderLink()}           
            </div>
        </Form>
      </Grid.Column>
    </Grid.Row> 
</Grid>
</Segment>
        );
    }
}
 
export default SearchBar